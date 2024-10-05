import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Link from "next/link";

const Header = () => {
    return (
        <div className="container p-20">
            <Link href="/"><Image src={Logo} width={100} height={100} alt="logo" /></Link>
            <nav className>
                <Link href="/">Bosh sahifa</Link>
                <Link href="/">Biz haqimizda</Link>
                <Link href="/">Xizmatlar</Link>
                <Link href="/">Shifokorlar</Link>
                <Link href="/">Maqolalar</Link>
                <Link href="/">Bog’lanish</Link>
            </nav>
        </div>
    );
};

export default Header;
