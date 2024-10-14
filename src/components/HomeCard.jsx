import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeCard = ({ icon, title, value, border }) => {

    // useInView Hook bilan ekranda ko'rinishni tekshiramiz
    const { ref, inView } = useInView({
        triggerOnce: true, // faqat bir marta trigger qilish uchun
        threshold: 0.2 // kartaning 20% ko'rinsa trigger bo'ladi
    });

    return (
        <div className={`flex items-center justify-center px-20 ${border ? "border-x border-x-blue" : ""}`}>
            {icon}
            <div className="ml-5">
                <h4 className="mb-2 text-blue text-3xl font-bold"><CountUp end={parseInt(value)} duration={4} className="text-4xl font-bold" />+</h4>
                {inView ? (
                    <CountUp end={parseInt(value)} duration={3} className="text-4xl font-bold" />
                ) : (
                    <CountUp end={parseInt(value)} duration={3} className="text-4xl font-bold" />
                )}
                <h5 className="w-full text-blue text-base">{title}</h5>
            </div>
        </div>
    )
}

export default HomeCard;