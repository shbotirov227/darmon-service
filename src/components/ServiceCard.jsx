import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
// import Img1 from "@/assets/about-img1.png"
// import { FaUserDoctor } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ img, title }) => {

    const { t } = useTranslation();

    return (
        // <Tilt tiltReverse={true} gyroscope={true}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-[250px] transition-all bg-white p-5 rounded-[30px] text-center mb-12 border border-[#E3E3E3] shadow-[5.0px_5.0px_10.0px_rgba(0,0,0,0.20)] hover:shadow-[5.0px_5.0px_10.0px_rgba(0,0,0,0.40)]">
                <div className="pb-5 border-b border-b-[#C6D6F6] w-full">
                    {img}
                </div>
                <h4 className="text-blue my-5 font-semibold text-lg">{title}</h4>
                <Link className="flex items-center justify-center text-blue group" href="/service-detail">{t("link.2")} <FaArrowRight className="hover:group-ml-3 ml-2" fill="#5296C6" size={15} /></Link>
            </div>
        // </Tilt>
    )
}

export default ServiceCard;