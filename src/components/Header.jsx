"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiTime } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    const items = [
        { key: "new", label: "New file" },
        { key: "copy", label: "Copy link" },
        { key: "edit", label: "Edit file" },
        { key: "delete", label: "Delete file" }
    ];

    return (
        <div className="container pt-5">
            <div className="flex items-center justify-end m-auto mb-5 px-10">
                <div className="flex items-center mr-7">
                    <LiaPhoneVolumeSolid fill="#5296C6" size={20} />
                    <h4 className="text-blue ml-2 mr-3 font-xs">Bog’lanish:</h4>
                    <Link className="text-blue font-xs" href="tel:+99871-200-00-17">71-200-00-17</Link>
                </div>

                <div className="flex items-center ">
                    <TfiTime fill="#5296C6" size={20} />
                    <h4 className="text-blue ml-2 mr-3 font-xs">Ish vaqti:</h4>
                    <h4 className="text-blue font-xs">24/7</h4>
                </div>
            </div>
            <div className="border border-[#E3E3E3] rounded-[50px] bg-[white] flex items-center justify-between py-7 px-10 shadow-[5.0px_5.0px_10.0px_rgba(0,0,0,0.20)]">
                <Link href="/"><Image src={Logo} width={100} height={100} alt="logo" /></Link>
                <nav className="flex items-center m-auto justify-between">
                    {/* <Link className={`${isActive("/") ? "text-blue border-b border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/">Bosh sahifa</Link> */}
                    <Link className={`${isActive("/") ? "text-blue border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/">Bosh sahifa</Link>
                    <Link className={`${isActive("/about") ? "text-blue border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/about">Biz haqimizda</Link>
                    <Link className={`${isActive("/services") ? "text-blue border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/services">Xizmatlar</Link>
                    <Link className={`${isActive("/doctors") ? "text-blue border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/doctors">Shifokorlar</Link>
                    <Link className={`${isActive("/news") ? "text-blue border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/news">Maqolalar</Link>
                    <Link className={`${isActive("/contact" ? "border-b border-b-blue" : "")} mx-5 py-3 transition-all border-b border-b-transparent hover:border-b-blue hover:border-b hover:text-blue`} href="/contact">Bog’lanish</Link>
                </nav>

                <div>
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button variant="bordered">O'z</Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            {items.map((item) => (
                                <DropdownItem key={item.key}>ggg</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>

                    <Button className="bg-bgBase text-blue hover:bg-blue hover:text-white transition-all">Natijani ko'rish</Button>
                    <Button className="bg-bgBase text-blue hover:bg-blue hover:text-white transition-all">Qabulga yozilish <GoArrowUpRight fill="#5296C6" className="p-3 size-2" /></Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
