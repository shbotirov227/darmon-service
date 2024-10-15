"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaUserDoctor } from "react-icons/fa6";
import { Icon } from "@iconify/react";

import Title from "@/components/Title";
import Img1 from "@/assets/about-img1.png";
import Img2 from "@/assets/about-img2.png";
import Img3 from "@/assets/about-img3.png";
import CarouselImg1 from "@/assets/about-carousel-img1.png";
import CarouselImg2 from "@/assets/about-carousel-img2.png";
import CarouselImg3 from "@/assets/about-carousel-img3.png";

const Loading = React.lazy(() => import("@/components/Loading"));
const AboutCard = React.lazy(() => import("@/components/AboutCard"));
const Layout = React.lazy(() => import("@/components/Layout"));

const About = () => {
    
    const { t, i18n } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (current) => {
        setCurrentSlide(current);
    };

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

    const carouselData = [ CarouselImg1, CarouselImg2, CarouselImg3 ];

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="bg-bgBase p-3 rounded-xl rotate-180 absolute top-1/2 left-[-100px] transform -translate-y-1/2 cursor-pointer z-10">
                <Icon icon="grommet-icons:form-next" onClick={onClick} size={24} color="#5296c6" />
            </div>
        );
    };

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => {
        return (
            <div className="bg-bgBase p-3 rounded-xl absolute top-1/2 right-[-100px] transform -translate-y-1/2 cursor-pointer z-10">
                <Icon icon="grommet-icons:form-next" onClick={onClick} size={24} color="#5296c6" />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: (i) => (
            <div
                className={`w-4 h-3 transition-all rounded-full cursor-pointer ${i === currentSlide
                    ? " bg-[#5296C6] px-3"
                    : "bg-[#CFE0EB]"
                    }`}
            ></div>
        ),
        afterChange: handleAfterChange,
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <div className="container flex items-center justify-center mt-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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

                <div className="container mb-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    {
                        data.map((el, index) => (
                            <Suspense key={index} fallback={<div>Loading...</div>}>
                                <AboutCard
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

                <Title
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    title={t("titleComponent.title.7")}
                    text={t("titleComponent.text.7")}
                />

                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex mb-8">
                    <Slider arrows={false} className="min-w-[100%]" {...settings}>
                        {carouselData.map((el, i) => (
                            <div key={i} className="items-center rounded-3xl p-4">
                                <Image src={el} alt={`about-carousel-img-${i}`} />
                            </div>
                        ))}
                    </Slider>
                </div>

            </Layout>
        </Suspense>
    )
}

export default About