"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiTime } from "react-icons/tfi";
import { FaArrowUp } from "react-icons/fa";
import Uz from "@/assets/uz-icon.png";
import Ru from "@/assets/ru-icon.png";
import En from "@/assets/en-icon.png";
import i18next from '../../i18n.js';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    const items = [
        { key: "uz", shortName: "O'z", icon: Uz, label: "O'zbekcha" },
        { key: "ru", shortName: "Ru", icon: Ru, label: "Русский" },
        { key: "en", shortName: "En", icon: En, label: "English" },
    ];
    // const [selectedLang, setSelectedLang] = useState(items[0].label);
    // const selectedItem = items.find(item => item.label === selectedLang);

    const [selectedLang, setSelectedLang] = useState(items[0].shortName); // Qisqartirilgan nomini saqlash
    const selectedItem = items.find(item => item.shortName === selectedLang); // Qisqartirilgan nom asosida tilni aniqlash

    const handleLangChange = (key) => {
        const selectedItem = items.find(item => item.key === key);
        if (selectedItem) {
            setSelectedLang(selectedItem.shortName);
            changeLang(key);
        }
    };

    function changeLang(lang) {
        i18next.changeLanguage(lang);

        localStorage.setItem("lang", lang);
        document.cookie = `lang=${lang}; path=/;`;
    }

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") || document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1];
        const defaultLang = savedLang || selectedItem?.key || "uz";
        i18next.changeLanguage(defaultLang);
        setSelectedLang(items.find(item => item.key === defaultLang)?.shortName || "O'z");

        // i18next.changeLanguage(selectedItem?.key || "uz");
    }, []);

    // useEffect(() => {
    //     const savedLang = localStorage.getItem("lang") || document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1];
        
    //     const defaultLang = savedLang || items[0]?.key || "uz"; // items bo'sh bo'lsa
    //     i18next.changeLanguage(defaultLang);
    //     setSelectedLang(items.find(item => item.key === defaultLang)?.shortName || "O'z");
    // }, [items]); 

    return (
        <div className="sticky top-0 z-50 container pt-5">
            {/* <div className="flex items-center justify-end m-auto mb-5 px-10">
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
            </div> */}
            <div className="border border-[#E3E3E3] rounded-[50px] bg-[white] flex items-center justify-between py-7 px-10 shadow-[5.0px_5.0px_10.0px_rgba(0,0,0,0.20)]">
                <Link className="w-[10%]" href="/"><Image src={Logo} width={100} height={100} alt="logo" /></Link>
                <nav className="flex items-center m-auto justify-between">
                    {/* <Link className={`${isActive("/") ? "text-blue border-b border-b-blue" : ""} mx-5 py-3 transition-all border-b border-b-transparent hover:text-blue`} href="/">Bosh sahifa</Link> */}
                    <Link className={`${isActive("/") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/">{t("header.home")}</Link>
                    <Link className={`${isActive("/about") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/about">{t("header.about")}</Link>
                    <Link className={`${isActive("/services") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/services">{t("header.services")}</Link>
                    <Link className={`${isActive("/doctors") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/doctors">{t("header.doctors")}</Link>
                    <Link className={`${isActive("/news") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/news">{t("header.news")}</Link>
                    <Link className={`${isActive("/contact") ? "text-blue border-b-2 border-b-blue" : "border-b-transparent"} mx-5 py-3 transition-all border-b-2 hover:border-b-blue hover:text-blue`} href="/contact">{t("header.contact")}</Link>
                </nav>

                <div className=" flex items-center justify-between">
                    <Dropdown className="w-[20%]" backdrop="blur">
                        <DropdownTrigger>
                            <Button variant="none" className="flex items-center">
                                {selectedItem && (
                                    <Image
                                        src={selectedItem.icon}
                                        alt={selectedLang}
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                )}
                                {selectedLang}
                            </Button>

                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            {items.map((item, index) => (
                                <DropdownItem className="flex items-center" key={index} onClick={() => handleLangChange(item.key)}>
                                    <Image src={item.icon} alt={item.label} width={30} height={30} className="pl-1 mr-3 inline-block" />
                                    {item.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>

                    <Link className="mx-4" href="/">
                        <Button className="bg-bgBase text-blue font-semibold hover:bg-blue hover:text-white transition-all">{t("button.1")}</Button>
                    </Link>
                    {/* <Button className="bg-bgBase text-blue hover:bg-blue hover:text-white transition-all">Qabulga yozilish <GoArrowUpRight fill="#5296C6" className="p-3 size-2" /></Button> */}
                    <Link href="/doctors">
                        <Button className="bg-bgBase text-blue font-semibold flex items-center justify-between transition-all group hover:bg-blue hover:text-white">
                            {t("button.2")}
                            <span className="rounded-full transition-all p-[5px] ml-1 group-hover:bg-white">
                                <FaArrowUp style={{ transform: "rotate(45deg)" }} size={13} fill="#5296C6" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
