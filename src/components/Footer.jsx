import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../assets/logo-footer.png";
import { FaTelegram, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-blue py-14 rounded-tr-[120px] rounded-tl-[120px]">
            <div className="container px-10 flex items-start justify-between mb-2">
                <div className="w-[25%]">
                    <Link href="/"><Image className="w-[40%] mb-8" src={FooterLogo} alt="footer-logo" /></Link>
                    <p className="w-[70%] text-[13px] text-[white]">
                        ЗАБОТЬТЕСЬ О СВОЕМ ЗДОРОВЬЕ
                        ВМЕСТЕ С <b>DARMON SERVIS</b>
                    </p>
                </div>

                <div className="w-[20%] text-[white]">
                    <h4 className="mb-4 font-semibold text-xl">Foydali havola</h4>
                    <ul>
                        <li className="mb-3"><Link href="/about" className="transition-all text-[base] pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Biz haqimizda</Link></li>
                        <li className="mb-3"><Link href="/services" className="transition-all text-[base] pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Xizmatlar</Link></li>
                        <li className="mb-3"><Link href="/doctors" className="transition-all text-[base] pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Shifokorlar</Link></li>
                        <li className="mb-3"><Link href="/new" className="transition-all text-[base] pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Maqolalar</Link></li>
                        <li className="mb-3"><Link href="/" className="transition-all text-[base] pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">FAQ</Link></li>
                    </ul>
                </div>

                <div className="w-[30%] text-[white]">
                    <h4 className="mb-4 font-semibold text-xl">Foydali havola</h4>
                    <ul>
                        <li className="mb-3"><Link href="https://yandex.uz/maps/-/CDXazKyr" target="_blank">Toshkent, Chilonzor, Cho’pon ota ko’chasi 18/19 uy</Link></li>
                        <li className="mb-3"><Link className="transition-all text-base pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b" href="tel:+99871-203-00-17">71-203-00-17</Link></li>
                        <li className="mb-3"><Link className="transition-all text-base pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b" href="tel:+99871-200-00-17">71-200-00-17</Link></li>
                        <li className="mb-3"><Link href="/doctors" className="transition-all text-base pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Shifokorlar</Link></li>
                        <li className="mb-3"><Link href="/news" className="transition-all text-base pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">Maqolalar</Link></li>
                        <li className="mb-3"><Link href="/" className="transition-all text-base pb-1 border-b border-b-transparent hover:border-b-[white] hover:border-b">FAQ</Link></li>
                    </ul>

                    <div className="flex items-center justify-between">
                        <FaInstagram fill="#5296C6" size={20} />
                        <FaYoutube fill="#5296C6" size={20} />
                        <FaFacebook fill="#5296C6" size={20} />
                        <FaTelegram fill="#5296C6" size={20} />
                    </div>
                </div>
            </div>
            <h4 className="container text-center text-[white] pt-10 border-t border-t-[white]">DARMONSERVIS since 2005</h4>
        </div>
    )
}

export default Footer;