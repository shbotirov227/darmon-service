"use client";

import Logo from "@/assets/logo.png";
import Image from "next/image";
import {Spinner} from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="w-full h-screen px-4 flex flex-col justify-center items-center gap-3">
            <Image src={Logo} alt="logo" className="w-36 h-auto" />
            <div className="flex gap-1">
                <h1 className="text-4xl font-semibold blue-text">Darmon</h1>
                <h1 className="text-4xl font-semibold green-text">Servis</h1>
            </div>
            <Spinner label="Loading..." size="xl" color="#5296C6" />
            {/* <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
        </div>
    );
}

export default Loading;
