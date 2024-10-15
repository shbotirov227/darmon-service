"use client";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import Img1 from "@/assets/services-img1.png";
import Img2 from "@/assets/services-img2.png";
import Img3 from "@/assets/services-img3.png";
import Img4 from "@/assets/services-img4.png";

const Layout = React.lazy(() => import("@/components/Layout"));
const Loading = React.lazy(() => import("@/components/Loading"));
const Title = React.lazy(() => import("@/components/Title"));
const ServiceCard = React.lazy(() => import("@/components/ServiceCard"));

const Services = () => {

    const { t } = useTranslation();

    const cardStyle = `m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6`

    const servicesData = [
        {
            icon: <Icon className={cardStyle} icon="medical-icon:i-physical-therapy" />,
            title: "Terapevt"
        },

        {
            icon: <Icon className={cardStyle} icon="streamline:ear-hearing-solid" />,
            title: "LOR"
        },

        {
            icon: <Icon className={cardStyle} icon="medical-icon:i-neurology" />,
            title: "Nevrologiya"
        },

        {
            icon: <Icon className={cardStyle} icon="healthicons:pediatric-surgery" />,
            title: "Pediatr"
        },

        {
            icon: <Icon className={cardStyle} icon="mingcute:female-line" />,
            title: "Ginokelogiya"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Urologiya"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Endikrinolog"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:gastroenterology-outline" />,
            title: "Gastroentrolog"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Bolalar nevrologi"
        },

        {
            icon: <Icon className={cardStyle} icon="fa-solid:tooth" />,
            title: "Stomatolog"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Oftalmolog"
        },

        {
            icon: <Icon className={cardStyle} icon="medical-icon:i-surgery" />,
            title: "Xirurg"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols-light:cardiology" />,
            title: "Kardiolog"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Gepatolog"
        },

        {
            icon: <Icon className={cardStyle} icon="medical-icon:i-dermatology" />,
            title: "Dermatolog"
        },

        {
            icon: <Icon className={cardStyle} icon="medical-icon:i-dermatology" />,
            title: "MRT"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "MSKT"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Rentgen"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "УЗИ"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Gematologik tahlil"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "PCR"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "IXLA"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Biokimyoviy tahlil"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Klinik tahlil"
        },

        {
            icon: <Icon className={cardStyle} icon="material-symbols:urology-sharp" />,
            title: "Sitologik tahlil"
        },
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <Title title={t("titleComponent.title.2")} text={t("titleComponent.text.2")} />
                <div className="container flex items-center justify-between flex-wrap">
                    {servicesData.map((el, i) => (
                        <ServiceCard data-aos="fade-up" data-aos-anchor-placement="center-bottom" key={i} img={el.icon} title={el.title} />
                    ))}
                </div>
            </Layout>
        </Suspense>
    )
}

export default Services