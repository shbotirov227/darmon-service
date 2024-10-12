"use client";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";

import Img1 from "@/assets/about-img1.png"
import Img2 from "@/assets/about-img2.png"
import Img3 from "@/assets/about-img3.png"

const LazyAboutCard = React.lazy(() => import("@/components/AboutCard"));
const LazyLayout = React.lazy(() => import("@/components/Layout"));
const LazyTitle = React.lazy(() => import("@/components/Title"));

const About = () => {
    
    const { t, i18n } = useTranslation();

    const data = [
        {
            img: Img2,
            personName: t("aboutCard.doctorName.1"),
            job: t("aboutCard.job.1"),
            description: t("text.2"),
            qualification: t("aboutCard.qualification.1"),
        },

        {
            img: Img3,
            personName: t("aboutCard.doctorName.2"),
            job: t("aboutCard.job.2"),
            description: t("text.3"),
            qualification: t("aboutCard.qualification.2"),
        },
    ];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLayout>
                <div className="container flex items-center justify-center mt-12">
                    <Image className="w-[30%]" src={Img1} alt="about-img1" />
                    <div className="w-[45%] ml-20">
                        <h4 className="text-blue text-center text-[16px] mb-3">{t("header.about")}</h4>
                        <h3 className="text-black text-[32px] font-bold text-center">{i18n.language === 'ru' ? `${t("klinika")} DARMON SERVIS` : `DARMON SERVIS ${t("klinika")}`}</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">
                            {t("text.1")}
                        </p>

                        <div className="flex items-center">
                            <div className="p-3 bg-bgBase rounded-lg mr-3">
                                <FaUserDoctor fill="#5296c6" size={25} />
                            </div>
                            <h4 className="text-blue font-semibold">{t("button.6")}</h4>
                        </div>
                    </div>
                </div>

                <div className="container mb-10">
                    {
                        data.map((el, index) => (
                            <Suspense key={index} fallback={<div>Loading...</div>}>
                                <LazyAboutCard
                                    img={el.img}
                                    personName={el.personName}
                                    job={el.job}
                                    description={el.description}
                                    qualification={el.qualification}
                                    isReversed={index % 2 !== 0}
                                />
                            </Suspense>
                        ))
                    }
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <LazyTitle title={t("titleComponent.title.7")} text={t("titleComponent.text.7")} />
                </Suspense>
            </LazyLayout>
        </Suspense>
    )
}

export default About