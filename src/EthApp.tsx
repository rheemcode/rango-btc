import "./App.css";
import { createBrowserRouter, Link, Outlet, RouterProvider, useLocation } from "react-router-dom"
import SwapPage from "./Swap"
import { PropsWithChildren } from "react";
import Profile from "./profile";
import Affiliate from "./Affliate";
import Leaderboard from "./Leaderboards";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { BitcoinWalletConnectors } from "@dynamic-labs/bitcoin";
import { SdkViewSectionType, SdkViewType } from "@dynamic-labs/sdk-api";


const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return (<>
        {/* <Navbar /> */}
        {children}
        <div className="bg-[#070917]  w-full md:hidden fixed bottom-0 rounded-t-2xl z-10">
            <div className="grid h-20 grid-cols-5 items-center text-center justify-center text-zinc-400">


                <Link className="h-full flex flex-col items-center justify-center text-xs font-light" to={"/swap"}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="c-PJLV c-PJLV-dgkOqI-color-gray _icon"><g clip-path="url(#clip0_13896_357843)"><g clip-path="url(#clip1_13896_357843)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 18.9837C0.176778 18.6908 0.176776 18.2159 0.469666 17.923L5.0163 13.3763C5.30919 13.0834 5.78406 13.0834 6.07696 13.3763C6.36985 13.6692 6.36986 14.1441 6.07697 14.437L2.06066 18.4534L6.07696 22.4697C6.36985 22.7626 6.36985 23.2374 6.07696 23.5303C5.78407 23.8232 5.30919 23.8232 5.0163 23.5303L0.46967 18.9837Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 18.4539C0.25 18.0396 0.585786 17.7039 1 17.7039H23C23.4142 17.7039 23.75 18.0396 23.75 18.4539C23.75 18.8681 23.4142 19.2039 23 19.2039H1C0.585786 19.2039 0.25 18.8681 0.25 18.4539Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9228 10.6483C17.6299 10.3554 17.6299 9.88049 17.9228 9.58759L21.9391 5.57122L17.9228 1.55491C17.6299 1.26202 17.6299 0.787147 17.9228 0.494253C18.2157 0.201361 18.6906 0.201361 18.9835 0.494253L23.5301 5.04088C23.823 5.33378 23.823 5.80865 23.5301 6.10154L18.9835 10.6482C18.6906 10.9411 18.2157 10.9411 17.9228 10.6483Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 5.57129C0.25 5.15708 0.585786 4.82129 1 4.82129L23 4.82129C23.4142 4.82129 23.75 5.15708 23.75 5.57129C23.75 5.9855 23.4142 6.32129 23 6.32129L1 6.32129C0.585786 6.32129 0.25 5.9855 0.25 5.57129Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_13896_357843"><rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"></rect></clipPath><clipPath id="clip1_13896_357843"><rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"></rect></clipPath></defs></svg>
                    <span className="mt-1">  Swap</span>
                </Link>

                <Link className="h-full flex flex-col items-center justify-center text-xs font-light" to={"/profile"}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="c-PJLV c-PJLV-dgkOqI-color-gray _icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0636 2.6C10.1507 2.6 8.60005 4.1507 8.60005 6.06359C8.60005 7.97648 10.1507 9.52717 12.0636 9.52717C13.9765 9.52717 15.5272 7.97648 15.5272 6.06359C15.5272 4.1507 13.9765 2.6 12.0636 2.6ZM7.40005 6.06359C7.40005 3.48796 9.48801 1.4 12.0636 1.4C14.6393 1.4 16.7272 3.48796 16.7272 6.06359C16.7272 8.63922 14.6393 10.7272 12.0636 10.7272C9.48801 10.7272 7.40005 8.63922 7.40005 6.06359ZM6.85651 14.7727C9.97465 12.9424 13.9255 12.9424 17.0436 14.7727C17.1482 14.8341 17.2767 14.9056 17.4217 14.9862C18.0519 15.3368 18.9933 15.8605 19.6389 16.4834C20.042 16.8724 20.4204 17.3807 20.4891 18.0006C20.5621 18.6589 20.2716 19.2787 19.6813 19.8331C18.6512 20.8005 17.4252 21.5661 15.8448 21.5661H8.05532C6.47498 21.5661 5.24887 20.8005 4.21882 19.8331C3.62849 19.2787 3.33796 18.6589 3.41096 18.0006C3.4797 17.3807 3.85806 16.8724 4.26126 16.4834C4.90678 15.8605 5.84812 15.3369 6.47838 14.9863C6.62334 14.9056 6.75185 14.8341 6.85651 14.7727ZM16.4361 15.8076C13.6931 14.1975 10.2071 14.1975 7.46396 15.8076C7.31802 15.8932 7.15724 15.9831 6.9882 16.0777C6.35806 16.43 5.61319 16.8465 5.09449 17.347C4.77177 17.6583 4.62705 17.9218 4.60365 18.1328C4.58451 18.3054 4.63279 18.5757 5.04031 18.9584L4.62957 19.3957L5.04032 18.9584C5.96005 19.8222 6.90548 20.3661 8.05532 20.3661H15.8448C16.9946 20.3661 17.94 19.8222 18.8598 18.9584C19.2673 18.5757 19.3156 18.3054 19.2965 18.1328C19.2731 17.9218 19.1283 17.6583 18.8056 17.3469C18.2869 16.8464 17.542 16.43 16.9118 16.0776C16.7428 15.9831 16.5821 15.8932 16.4362 15.8076L16.4361 15.8076Z" fill="currentColor"></path></svg>
                    <span className="mt-1">  Profile</span>
                </Link>

                <Link className="h-full flex flex-col items-center justify-center text-xs font-light" to={"/leaderboard"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="c-PJLV c-PJLV-dgkOqI-color-gray _icon"><g id="surface1"><path fill="currentColor" d="M 11.519531 9.542969 L 13.011719 9.542969 L 13.011719 4.089844 L 11.6875 4.089844 L 9.816406 5.617188 L 10.582031 6.558594 L 11.199219 6.046875 C 11.324219 5.9375 11.4375 5.820312 11.542969 5.695312 C 11.527344 5.988281 11.519531 6.308594 11.519531 6.65625 Z M 11.519531 9.542969 " style={{ stroke: "none", fillRule: "nonzero", fillOpacity: 1 }}></path><path fill="currentColor" d="M 8.488281 20.453125 L 4.535156 20.453125 L 4.535156 19.484375 L 5.867188 18.136719 C 6.246094 17.742188 6.496094 17.46875 6.613281 17.324219 C 6.707031 17.210938 6.789062 17.082031 6.855469 16.949219 C 6.902344 16.847656 6.925781 16.734375 6.925781 16.621094 C 6.929688 16.558594 6.917969 16.496094 6.894531 16.4375 C 6.867188 16.378906 6.832031 16.328125 6.785156 16.285156 C 6.675781 16.199219 6.539062 16.15625 6.398438 16.164062 C 6.214844 16.167969 6.035156 16.21875 5.878906 16.308594 C 5.667969 16.4375 5.46875 16.582031 5.285156 16.746094 L 4.472656 15.796875 C 4.6875 15.59375 4.925781 15.414062 5.179688 15.257812 C 5.375 15.148438 5.585938 15.066406 5.804688 15.011719 C 6.054688 14.949219 6.3125 14.921875 6.566406 14.925781 C 6.890625 14.917969 7.214844 14.980469 7.511719 15.109375 C 7.773438 15.222656 8 15.40625 8.160156 15.640625 C 8.308594 15.871094 8.390625 16.140625 8.386719 16.414062 C 8.394531 16.816406 8.28125 17.207031 8.058594 17.542969 C 7.929688 17.742188 7.777344 17.925781 7.613281 18.097656 C 7.429688 18.292969 7.035156 18.660156 6.429688 19.203125 L 6.429688 19.238281 L 8.492188 19.238281 Z M 8.488281 20.453125 " ></path><path fill="currentColor" d="M 18.90625 17.058594 C 19.113281 16.8125 19.222656 16.503906 19.21875 16.183594 C 19.222656 16 19.183594 15.820312 19.097656 15.65625 C 19.011719 15.496094 18.886719 15.359375 18.734375 15.257812 C 18.335938 15.011719 17.871094 14.894531 17.40625 14.921875 C 17.054688 14.917969 16.707031 14.960938 16.367188 15.046875 C 16.050781 15.140625 15.75 15.285156 15.480469 15.472656 L 16.09375 16.457031 C 16.414062 16.238281 16.789062 16.117188 17.175781 16.105469 C 17.332031 16.097656 17.484375 16.136719 17.621094 16.214844 C 17.675781 16.246094 17.71875 16.296875 17.746094 16.351562 C 17.777344 16.410156 17.789062 16.472656 17.785156 16.535156 C 17.785156 16.917969 17.414062 17.109375 16.664062 17.109375 L 16.320312 17.109375 L 16.320312 18.214844 L 16.65625 18.214844 C 16.882812 18.210938 17.105469 18.230469 17.328125 18.277344 C 17.464844 18.300781 17.597656 18.367188 17.699219 18.460938 C 17.78125 18.554688 17.824219 18.679688 17.816406 18.804688 C 17.820312 18.890625 17.804688 18.972656 17.765625 19.050781 C 17.726562 19.125 17.667969 19.1875 17.597656 19.234375 C 17.378906 19.339844 17.132812 19.386719 16.890625 19.367188 C 16.660156 19.367188 16.429688 19.335938 16.207031 19.28125 C 15.953125 19.222656 15.707031 19.128906 15.476562 19.011719 L 15.476562 20.238281 C 15.738281 20.34375 16.011719 20.417969 16.289062 20.46875 C 16.558594 20.511719 16.832031 20.535156 17.105469 20.53125 C 17.691406 20.566406 18.277344 20.414062 18.777344 20.097656 C 18.96875 19.960938 19.125 19.78125 19.230469 19.574219 C 19.335938 19.363281 19.386719 19.128906 19.378906 18.894531 C 19.378906 18.152344 18.921875 17.722656 18.011719 17.605469 L 18.011719 17.582031 C 18.359375 17.5 18.667969 17.316406 18.90625 17.058594 Z M 18.90625 17.058594 " ></path><path fill="currentColor" d="M 6 0.707031 C 5.636719 0.707031 5.34375 1 5.34375 1.363281 L 5.34375 11.617188 L 1.089844 11.617188 C 0.730469 11.617188 0.4375 11.910156 0.4375 12.273438 L 0.4375 23.179688 C 0.4375 23.542969 0.730469 23.835938 1.089844 23.835938 L 22.910156 23.835938 C 23.269531 23.835938 23.5625 23.542969 23.5625 23.179688 L 23.5625 12.273438 C 23.5625 11.910156 23.269531 11.617188 22.910156 11.617188 L 18.652344 11.617188 L 18.652344 1.363281 C 18.652344 1 18.359375 0.707031 18 0.707031 Z M 17.34375 11.617188 L 6.652344 11.617188 L 6.652344 2.019531 L 17.34375 2.019531 Z M 1.746094 22.527344 L 1.746094 12.925781 L 11.34375 12.925781 L 11.34375 22.527344 Z M 12.652344 22.527344 L 12.652344 12.925781 L 22.253906 12.925781 L 22.253906 22.527344 Z M 12.652344 22.527344 "></path></g></svg>
                    <span className="mt-1">  Leaderboard</span>
                </Link>

                <Link className="h-full flex flex-col items-center justify-center text-xs font-light" to={"/affiliate"}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="c-PJLV c-PJLV-dgkOqI-color-gray _icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.45318 2.60045C3.57763 2.60561 3.70937 2.61423 3.84631 2.62555C4.17141 2.65241 4.5031 2.69234 4.81038 2.72934C4.83446 2.73224 4.85839 2.73512 4.88215 2.73798C5.19198 2.77521 5.50531 2.81244 5.71946 2.81549C6.0508 2.82019 6.32322 2.55541 6.32793 2.22407C6.33264 1.89274 6.06785 1.62032 5.73651 1.61561C5.60081 1.61368 5.3621 1.58702 5.02531 1.54655C5.00076 1.5436 4.97583 1.5406 4.95056 1.53755C4.6469 1.50097 4.29373 1.45842 3.94513 1.42962C3.57094 1.3987 3.17504 1.38108 2.82889 1.4088C2.65549 1.42269 2.47599 1.44926 2.30897 1.49983C2.14712 1.54884 1.9535 1.63327 1.79549 1.79127M3.45318 2.60045L5.48846 4.63574C5.72278 4.87005 5.72278 5.24995 5.48846 5.48426C5.25415 5.71858 4.87425 5.71858 4.63994 5.48426L2.60464 3.44897C2.6098 3.57342 2.61842 3.70517 2.62974 3.84211C2.6566 4.16722 2.69654 4.49891 2.73354 4.80619C2.73644 4.83027 2.73932 4.85419 2.74217 4.87795C2.77941 5.18779 2.81664 5.50112 2.81969 5.71527C2.82439 6.04661 2.55961 6.31903 2.22827 6.32374C1.89693 6.32844 1.62452 6.06366 1.61981 5.73232C1.61788 5.59663 1.59122 5.35791 1.55075 5.02112C1.54779 4.99657 1.54479 4.97164 1.54175 4.94637C1.50516 4.64271 1.46262 4.28953 1.43381 3.94093C1.40289 3.56674 1.38526 3.17084 1.41299 2.82468C1.42688 2.65128 1.45345 2.47178 1.50403 2.30476C1.55304 2.14291 1.63748 1.94928 1.79549 1.79128M21.6816 1.49983C21.8435 1.54884 22.0371 1.63327 22.1951 1.79128C22.3531 1.94928 22.4375 2.14291 22.4866 2.30476C22.5371 2.47178 22.5637 2.65128 22.5776 2.82468C22.6053 3.17084 22.5877 3.56674 22.5568 3.94093C22.528 4.28956 22.4854 4.64277 22.4488 4.94645C22.4458 4.97169 22.4428 4.99659 22.4398 5.02112C22.3994 5.35791 22.3727 5.59663 22.3708 5.73232C22.3661 6.06366 22.0936 6.32844 21.7623 6.32374C21.431 6.31903 21.1662 6.04661 21.1709 5.71527C21.1739 5.50112 21.2112 5.18779 21.2484 4.87795C21.2513 4.85418 21.2541 4.83023 21.257 4.80614C21.294 4.49887 21.334 4.1672 21.3608 3.84211C21.3722 3.70517 21.3808 3.57342 21.3859 3.44897L19.3506 5.48426C19.1163 5.71858 18.7364 5.71858 18.5021 5.48426C18.2678 5.24995 18.2678 4.87005 18.5021 4.63574L20.5374 2.60045C20.413 2.60561 20.2812 2.61423 20.1443 2.62555C19.8192 2.65241 19.4875 2.69235 19.1802 2.72934C19.1561 2.73224 19.1322 2.73512 19.1084 2.73798C18.7986 2.77521 18.4853 2.81244 18.2711 2.81549C17.9398 2.82019 17.6674 2.55541 17.6627 2.22407C17.6579 1.89274 17.9227 1.62032 18.2541 1.61561C18.3898 1.61368 18.6285 1.58702 18.9653 1.54655C18.9898 1.5436 19.0148 1.5406 19.04 1.53755C19.3437 1.50097 19.6969 1.45842 20.0455 1.42962C20.4196 1.3987 20.8155 1.38108 21.1617 1.4088C21.3351 1.42269 21.5146 1.44926 21.6816 1.49983ZM12 5.6C8.46537 5.6 5.59999 8.46538 5.59999 12C5.59999 15.5346 8.46537 18.4 12 18.4C15.5346 18.4 18.4 15.5346 18.4 12C18.4 8.46538 15.5346 5.6 12 5.6ZM4.39999 12C4.39999 7.80264 7.80263 4.4 12 4.4C16.1974 4.4 19.6 7.80264 19.6 12C19.6 16.1974 16.1974 19.6 12 19.6C7.80263 19.6 4.39999 16.1974 4.39999 12ZM11.914 7.85703C12.2454 7.85703 12.514 8.12566 12.514 8.45703V8.74862C12.7685 8.79155 12.9983 8.86333 13.2082 8.96269C13.5718 9.13478 13.8401 9.37297 14.0577 9.61866C14.2774 9.86671 14.2545 10.2459 14.0064 10.4656C13.7584 10.6854 13.3792 10.6624 13.1595 10.4143C13.0136 10.2497 12.87 10.1302 12.6948 10.0473C12.5196 9.96434 12.2773 9.90127 11.914 9.90127C11.4745 9.90127 11.1257 10.0294 10.9013 10.1966C10.6762 10.3644 10.6 10.547 10.6 10.6887C10.6 10.8984 10.6593 10.9952 10.778 11.0741C10.9459 11.1858 11.3023 11.2999 12 11.2999C12.8926 11.2999 13.5695 11.5021 14.0216 11.9271C14.4822 12.3602 14.6 12.9206 14.6 13.3875C14.6 13.975 14.31 14.4863 13.8122 14.8284C13.4625 15.0687 13.0219 15.2201 12.514 15.2849V15.5088C12.514 15.8402 12.2454 16.1088 11.914 16.1088C11.5826 16.1088 11.314 15.8402 11.314 15.5088V15.2883C11.0965 15.2607 10.8972 15.214 10.7078 15.1413C10.3529 15.0052 10.0837 14.7967 9.8224 14.5603C9.5767 14.3379 9.55776 13.9585 9.7801 13.7128C10.0024 13.4671 10.3819 13.4482 10.6276 13.6705C10.8459 13.8681 10.9857 13.9626 11.1377 14.021C11.294 14.0809 11.5136 14.1214 11.914 14.1214C12.5245 14.1214 12.9142 13.9895 13.1325 13.8394C13.3341 13.7009 13.4 13.5453 13.4 13.3875C13.4 13.1093 13.3319 12.9258 13.1996 12.8014C13.0587 12.6689 12.7356 12.4999 12 12.4999C11.2196 12.4999 10.576 12.381 10.1134 12.0734C9.60164 11.733 9.39999 11.2242 9.39999 10.6887C9.39999 10.0851 9.7285 9.57404 10.1842 9.23441C10.499 8.99982 10.886 8.83524 11.314 8.75567V8.45703C11.314 8.12566 11.5826 7.85703 11.914 7.85703ZM2.22827 17.6422C2.55961 17.6469 2.82439 17.9193 2.81969 18.2506C2.81664 18.4648 2.77941 18.7781 2.74217 19.0879C2.73932 19.1117 2.73644 19.1356 2.73354 19.1597C2.69654 19.467 2.6566 19.7987 2.62974 20.1238C2.61842 20.2607 2.6098 20.3925 2.60464 20.5169L4.63994 18.4816C4.87425 18.2473 5.25415 18.2473 5.48846 18.4816C5.72278 18.716 5.72278 19.0959 5.48846 19.3302L3.45318 21.3654C3.57763 21.3603 3.70937 21.3517 3.84631 21.3404C4.17139 21.3135 4.50305 21.2736 4.81032 21.2366C4.83442 21.2337 4.85837 21.2308 4.88215 21.2279C5.19198 21.1907 5.50531 21.1535 5.71946 21.1504C6.0508 21.1457 6.32322 21.4105 6.32793 21.7418C6.33264 22.0732 6.06785 22.3456 5.73651 22.3503C5.60081 22.3522 5.3621 22.3789 5.02531 22.4194C5.00073 22.4223 4.97578 22.4253 4.95049 22.4284C4.64685 22.4649 4.2937 22.5075 3.94513 22.5363C3.57094 22.5672 3.17504 22.5848 2.82889 22.5571C2.65549 22.5432 2.47599 22.5166 2.30897 22.4661C2.14712 22.4171 1.9535 22.3326 1.79549 22.1746C1.63748 22.0166 1.55304 21.823 1.50403 21.6611C1.45345 21.4941 1.42688 21.3146 1.41299 21.1412C1.38526 20.7951 1.40289 20.3992 1.43381 20.025C1.46262 19.6764 1.50517 19.3232 1.54175 19.0195C1.54479 18.9943 1.5478 18.9693 1.55075 18.9448C1.59122 18.608 1.61788 18.3693 1.61981 18.2336C1.62452 17.9022 1.89693 17.6375 2.22827 17.6422ZM21.7623 17.6422C22.0936 17.6375 22.3661 17.9022 22.3708 18.2336C22.3727 18.3693 22.3994 18.608 22.4398 18.9448C22.4428 18.9693 22.4458 18.9942 22.4488 19.0194C22.4854 19.3231 22.528 19.6763 22.5568 20.025C22.5877 20.3992 22.6053 20.7951 22.5776 21.1412C22.5637 21.3146 22.5371 21.4941 22.4866 21.6611C22.4375 21.823 22.3531 22.0166 22.1951 22.1746C22.0371 22.3326 21.8435 22.4171 21.6816 22.4661C21.5146 22.5166 21.3351 22.5432 21.1617 22.5571C20.8155 22.5848 20.4196 22.5672 20.0455 22.5363C19.6969 22.5075 19.3437 22.4649 19.0401 22.4284C19.0148 22.4253 18.9899 22.4223 18.9653 22.4194C18.6285 22.3789 18.3898 22.3522 18.2541 22.3503C17.9227 22.3456 17.6579 22.0732 17.6627 21.7418C17.6674 21.4105 17.9398 21.1457 18.2711 21.1504C18.4853 21.1535 18.7986 21.1907 19.1084 21.2279C19.1322 21.2308 19.1562 21.2337 19.1803 21.2366C19.4875 21.2736 19.8192 21.3135 20.1443 21.3404C20.2812 21.3517 20.413 21.3603 20.5374 21.3655L18.5021 19.3302C18.2678 19.0959 18.2678 18.716 18.5021 18.4816C18.7364 18.2473 19.1163 18.2473 19.3506 18.4816L21.3859 20.5169C21.3808 20.3925 21.3722 20.2607 21.3608 20.1238C21.334 19.7987 21.294 19.467 21.257 19.1598C21.2541 19.1357 21.2513 19.1117 21.2484 19.0879C21.2112 18.7781 21.1739 18.4648 21.1709 18.2506C21.1662 17.9193 21.431 17.6469 21.7623 17.6422Z" fill="currentColor"></path></svg>
                    <span className="mt-1">  Affiliate</span>
                </Link>

                <Link className="h-full flex flex-col items-center justify-center text-xs font-light" to={"/swap"}>
                    <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="c-PJLV c-PJLV-dgkOqI-color-gray _icon"><path fill-rule="evenodd" d="M7.80078 12.5C7.80078 11.6716 7.12921 11 6.30078 11C5.47235 11 4.80078 11.6716 4.80078 12.5C4.80078 13.3284 5.47235 14 6.30078 14C7.12921 14 7.80078 13.3284 7.80078 12.5Z" fill="currentColor"></path><path fill-rule="evenodd" d="M13.8008 12.5C13.8008 11.6716 13.1292 11 12.3008 11C11.4724 11 10.8008 11.6716 10.8008 12.5C10.8008 13.3284 11.4724 14 12.3008 14C13.1292 14 13.8008 13.3284 13.8008 12.5Z" fill="currentColor"></path><path fill-rule="evenodd" d="M19.8008 12.5C19.8008 11.6716 19.1292 11 18.3008 11C17.4724 11 16.8008 11.6716 16.8008 12.5C16.8008 13.3284 17.4724 14 18.3008 14C19.1292 14 19.8008 13.3284 19.8008 12.5Z" fill="currentColor"></path></svg>
                    <span className="mt-1">  More</span>
                </Link>

            </div>

        </div>
        {/* <div className="">
            <footer>
                <div className="md:px-16 px-6 pb-6 bg-[#472728]">
                    <div className="flex md:flex-row flex-col pt-6 justify-between tems-center text-sm border-t border-[#ffffff8c] ">
                        <div className="text-sm font-medium text-white ">
                            © 2024 Birdswap. All rights reserved.
                        </div>
                        <div className="text-zinc-300 text-xs md:text-sm">
                            <ul className="flex mt-2 gap-x-1 md:gap-x-5">
                                <li>Terms & Condition</li>
                                <li className="hidden md:block">|</li>
                                <li>Privacy Policy</li>
                                <li className="hidden md:block">|</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div> */}
    </>
    )
}


export function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 1000;
}


const router = createBrowserRouter([
    {
        element: <Providers><Outlet />

        </Providers>,
        errorElement: <>error</>,
        children: [
            {
                path: "/*",
                index: true,

                element: <>
                    <Container> <SwapPage /> </Container></>,
            },
            {
                path: "/swap/*",
                element: <>
                    <Container> <SwapPage /> </Container></>,
            },
            {
                path: "/profile",
                element: <>
                    <Container> <Profile /> </Container></>,
            },
            {
                path: "/affiliate",
                element: <>
                    <Container> <Affiliate /> </Container></>,
            },
            {
                path: "/leaderboard",
                element: <>
                    <Container> <Leaderboard /> </Container></>,
            },

        ],
    },

])

export const AppRoutes = () => {

    return (
        <RouterProvider
            router={router}
        />
    )
}


function Providers({
    children,
}: {
    children: React.ReactNode;
}) {



    return (
        <DynamicContextProvider
            theme="dark"
            settings={{
                environmentId: "42f4a546-8d90-4be7-93c0-f17980c4e9cd",
                overrides: {
                    views: [{
                        type: SdkViewType.Login,
                        sections: [
                            { type: SdkViewSectionType.Wallet },
                        ],
                    }]
                },
                siweStatement: "Your custom message goes here....",
                walletConnectors: [BitcoinWalletConnectors],
            }}
        >
            {children}
        </DynamicContextProvider>
    );
}


const EthApp = () => {
    return (
        <>

            <AppRoutes />
        </>
    );
};

export default EthApp;
