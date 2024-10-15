"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Layout = React.lazy(() => import("@/components/Layout"));
const Loading = React.lazy(() => import("@/components/Loading"));
const Title = React.lazy(() => import("@/components/Title"));
const MiniCard = React.lazy(() => import("@/components/MiniCard"));

const Contact = () => {

    const { t } = useTranslation();

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
            <div className="container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Title title={t("header.contact")} text={t("titleComponent.text.8")} />

                <div className="flex items-center justify-around mb-20">

                    <MiniCard 
                        icon={<LuPhoneCall className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />}
                        title={t("footer.link.2")}
                        link="71-200-00-17"
                        url="tel:+99871-200-00-17"
                    />

                    <MiniCard 
                        icon={<LuMail className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />}
                        title={t("footer.link.3")}
                        link="Darmonservis1@gmail.com"
                        url="mailto:Darmonservis1@gmail.com"
                    />

                    <MiniCard 
                        icon={<SlLocationPin className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />}
                        title={t("footer.link.4")}
                        link={t("footer.link.address")}
                        url="https://yandex.uz/maps/-/CDXazKyr"
                        target
                    />

                    {/* <div className="w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px]"> */}
                        {/* <div className="flex items-center bg-bgBase p-2 rounded-full"> */}
                            {/* <LuMail className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} /> */}
                        {/* </div> */}
                        {/* <h3 className="text-black font-semibold mb-3"></h3> */}
                        {/* <Link className="text-black py-3" href=""></Link> */}
                    {/* </div> */}

                    {/* <div className="w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px]"> */}
                        {/* <div className="flex items-center "> */}
                            {/* <SlLocationPin className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} /> */}
                        {/* </div> */}
                        {/* <h3 className="text-black font-semibold mb-3">Manzil</h3> */}
                        {/* <Link className="text-black py-3" target="_blank" href="https://yandex.uz/maps/-/CDXazKyr">Toshkent, Chilonzor 18/19 uy</Link> */}
                    {/* </div> */}
                </div>

                <div className="flex items-center justify-between mb-20">
                    <div>
                        <h3 className="text-blue font-bold text-[30px] mb-4">{t("contactPage.title")}</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">{t("contactPage.text")}</p>
                    </div>

                    <iframe
                        src="https://yandex.uz/map-widget/v1/-/CDXazKyr?z=16&l=map"
                        className="shadow-xl rounded-xl border border-[#D6D6D6]"
                        width="745"
                        height="280"
                        allowfullscreen="true"
                    ></iframe>
                </div>
            </div>
        </Layout>
        </Suspense>
    )
}

export default Contact