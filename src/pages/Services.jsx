import React from "react";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Img1 from "@/assets/services-img1.png"
import Img2 from "@/assets/services-img2.png"
import Img3 from "@/assets/services-img3.png"
import Img4 from "@/assets/services-img4.png"
import ServiceCard from "@/components/ServiceCard";
import { Icon } from "@iconify/react";

const Services = () => {

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
        <Layout>
            <Title title="Xizmatlar" text="Darmon Servis xizmatlari" />
            <div className="container flex items-center justify-between flex-wrap">
                {servicesData.map((el, i) => (
                    <ServiceCard key={i} img={el.icon} title={el.title} />
                ))}
                {/* <ServiceCard img={<Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="streamline:ear-hearing-solid" />} title="LOR" />
                <ServiceCard img={<Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="medical-icon:i-neurology" />} title="Nevrologiya" />
                <ServiceCard img={<Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="healthicons:pediatric-surgery" />} title="Pediatr" />
                <ServiceCard img={<Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="mingcute:female-line" />} title="Ginekologiya" />
                <ServiceCard img={<Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="material-symbols:urology-sharp" />} title="Urologiya" /> */}
                {/* <ServiceCard img={Img2} title="Terapevt" />
                <ServiceCard img={Img3} title="Terapevt" />
                <ServiceCard img={Img4} title="Terapevt" />

                <ServiceCard img={Img1} title="Terapevt" />
                <ServiceCard img={Img2} title="Terapevt" />
                <ServiceCard img={Img3} title="Terapevt" />
                <ServiceCard img={Img4} title="Terapevt" />

                <ServiceCard img={Img1} title="Terapevt" />
                <ServiceCard img={Img2} title="Terapevt" />
                <ServiceCard img={Img3} title="Terapevt" />
                <ServiceCard img={Img4} title="Terapevt" />

                <ServiceCard img={Img1} title="Terapevt" />
                <ServiceCard img={Img2} title="Terapevt" />
                <ServiceCard img={Img3} title="Terapevt" />
                <ServiceCard img={Img4} title="Terapevt" />

                <ServiceCard img={Img1} title="Terapevt" />
                <ServiceCard img={Img2} title="Terapevt" />
                <ServiceCard img={Img3} title="Terapevt" />
                <ServiceCard img={Img4} title="Terapevt" /> */}
            </div>
        </Layout>
    )
}

export default Services