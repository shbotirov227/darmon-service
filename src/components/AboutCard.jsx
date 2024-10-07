import React from 'react'
import Image from "next/image";
import Img1 from "@/assets/about-img1.png"
import { FaUserDoctor } from "react-icons/fa6";

const AboutCard = ({ img, personName, job, description, qualification, isReversed }) => {
    return (
        <div className={`flex items-center justify-center mt-12 ${isReversed ? "flex-row-reverse": "flex-row"}`}>
            <div className={`w-[45%] ${isReversed ? "ml-20" : "mr-20"}`}>
                <h3 className="text-black text-[32px] font-bold text-center">{personName}</h3>
                <h4 className="text-blue text-center text-[16px] mb-3">{job}</h4>
                <p className="text-txtColor my-5 leading-7 text-[15px]">{description}</p>

                <div className="flex items-center">
                    <div className="p-3 bg-bgBase rounded-lg mr-3">
                        <FaUserDoctor fill="#5296c6" size={25} />
                    </div>
                    <h4 className="text-blue font-semibold">{qualification}</h4>
                </div>
            </div>
            <Image className="w-[30%]" src={img} alt="about-img1" />
        </div>
    )
}

export default AboutCard