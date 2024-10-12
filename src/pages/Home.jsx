"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

// Lazy-loaded components
const Layout = React.lazy(() => import("@/components/Layout"));
const Title = React.lazy(() => import("@/components/Title"));
const HomeCard = React.lazy(() => import("@/components/HomeCard"));
const MiniCard = React.lazy(() => import("@/components/MiniCard"));
const DoctorCard = React.lazy(() => import("@/components/DoctorCard"));
const NewsCard = React.lazy(() => import("@/components/NewsCard"));
const ContactForm = React.lazy(() => import("@/components/ContactForm"));
const FeedbackCard = React.lazy(() => import("@/components/FeedbackCard"));
const ServiceCard = React.lazy(() => import("@/components/ServiceCard"));

import {
  HomeHospitalIcon,
  HomeIcon1,
  HomeIcon2,
  HomeIcon3,
  HomeCardIcon1,
  HomeCardIcon2,
  HomeCardIcon3,
  HomeCardIcon4,
  HomeCardIcon5,
  HomeCardIcon6
} from "@/assets/icons";

// Other assets
import Img from "@/assets/home-img1.png";
import Img1 from "@/assets/about-img1.png";
import DoctorImg from "@/assets/doctor-img.png";
import NewsCardImg from "@/assets/news-card-img.png";
import CallBg from "@/assets/call-bg.png";
import CallImg from "@/assets/call-img.png";
import CarouselImg1 from "@/assets/about-img1.png";
import CarouselImg2 from "@/assets/news-card-img.png";
import FeedbackCardImg from "@/assets/feedback-card-img.png";

// Slider settings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const { t, i18n } = useTranslation();
    const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [text, setText] = useState("");
    const data = [Img, Img1, CarouselImg1, CarouselImg2];

    const homeCardData = [
        {
            icon: <HomeIcon1 size={55} />,
            value: "250+",
            title: t("homeCardData.1")
        },

        {
            icon: <HomeIcon2 size={55} />,
            value: "250+",
            title: t("homeCardData.2"),
            border: true
        },

        {
            icon: <HomeIcon3 size={45} />,
            value: "250+",
            title: t("homeCardData.3")
        }
    ];

    const cardData = [
        {
            icon: <HomeCardIcon1 />,
            title: t("cardData.1")
        },

        {
            icon: <HomeCardIcon2 />,
            title: t("cardData.2")
        },

        {
            icon: <HomeCardIcon3 />,
            title: t("cardData.3")
        },

        {
            icon: <HomeCardIcon4 />,
            title: t("cardData.4")
        },

        {
            icon: <HomeCardIcon5 />,
            title: t("cardData.5")
        },

        {
            icon: <HomeCardIcon6 />,
            title: t("cardData.6")
        },
    ];

    const servicesData = [
        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="medical-icon:i-physical-therapy" />,
            title: "Terapevt"
        },

        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="streamline:ear-hearing-solid" />,
            title: "LOR"
        },

        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="medical-icon:i-neurology" />,
            title: "Nevrologiya"
        },

        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="healthicons:pediatric-surgery" />,
            title: "Pediatr"
        },

        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="mingcute:female-line" />,
            title: "Ginokelogiya"
        },

        {
            icon: <Icon className="m-auto size-24 bg-bgBase text-[#5296C6] rounded-full p-6" icon="material-symbols:urology-sharp" />,
            title: "Urologiya"
        },
    ];

    const newsData = [
        {
            image: NewsCardImg,
            date: 'September 20',
            views: 124,
            title: 'Malakali shifokorlar tomonidan azonaterapiya yangi uslubda'
        },
        {
            image: NewsCardImg,
            date: 'September 21',
            views: 200,
            title: 'Yangi davolash texnikalari bilan shifokorlar'
        },
        {
            image: NewsCardImg,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        }
    ];

    const feedbackData = [
        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        },

        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        },

        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        },

        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        },

        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        },

        {
            img: FeedbackCardImg,
            name: "Madina Abdullayeva",
            role: "Patient",
            text: "opularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
        }
    ];

    const handleAfterChange = (current) => {
        setCurrentSlide(current);
    };

    // Custom Prev Arrow
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
        slidesToShow: 1,
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


    const serviceSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5.2,
        nextArrow: false,
        prevArrow: false,
        cursor: "pointer",
        customPaging: (i) => (
            <div
                className={`w-4 h-3 transition-all rounded-full cursor-pointer ${i === currentSlide
                    ? " bg-[#5296C6] px-3"
                    : "bg-[#CFE0EB]"
                    }`}
            ></div>
        ),
        afterChange: handleAfterChange
    };

    const feedbackSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3.8,
        nextArrow: false,
        prevArrow: false,
        cursor: "pointer",
        customPaging: (i) => (
            <div
                className={`w-4 h-3 transition-all rounded-full cursor-pointer ${i === currentSlide
                    ? " bg-[#5296C6] px-3"
                    : "bg-[#CFE0EB]"
                    }`}
            ></div>
        ),
        afterChange: handleAfterChange
    };


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    useEffect(() => {
        if (i18n.language === "ru") {
            setText(
                <>
                    {t("klinika")}
                    <span className="text-blue"> DARMON SERVIS </span>
                    {t("titleMain")}
                </>
            );
        } else {
            setText(
                <>
                    <span className="text-blue">DARMON SERVIS </span>
                    {t("titleMain")}
                </>
            );
        }
    }, [i18n.language, t]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <div className="overflow-hidden m-auto text-center">
                    <div className="inline-flex items-center text-sm bg-[white] rounded-3xl shadow-md py-2 px-4 my-10">
                        <HomeHospitalIcon cls="mr-2 bg-blue p-[5px] rounded-full w-[30px] h-[30px]" />
                        <h4 className="text-blue">{t("button.welcome")}</h4>
                    </div>

                    <h2 className="w-[50%] m-auto mb-6 font-semibold text-5xl text-center text-black leading-[70px]">
                        {text}
                    </h2>

                    <Button className="bg-blue text-white shadow-md">
                        {t("button.3")} <GoArrowRight fill="white" size={22} />
                    </Button>
                </div>

                <div className="relative w-full max-w-4xl mx-auto my-10">
                    <Slider {...settings}>
                        {data.map((img, index) => (
                            <div key={index} className="items-center rounded-3xl bg-[white] p-4">
                                <Image className="rounded-lg w-full h-[380px]" src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* About section */}
                <div className="container flex items-center justify-center my-12">
                    <Image className="w-[30%]" src={Img1} alt="about-img1" />
                    <div className="w-[45%] ml-20">
                        <h4 className="text-blue text-center text-[16px] mb-3">{t("header.about")}</h4>
                        <h3 className="text-black text-[32px] font-bold text-center">{i18n.language === 'ru' ? `${t("klinika")} DARMON SERVIS` : `DARMON SERVIS ${t("klinika")}`}</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">
                            {t("text.1")}
                        </p>

                        <div className="flex items-center mb-[8%]">
                            <div className="flex items-center mr-[5%]">
                                <div className="p-1 bg-blue rounded-full mr-3">
                                    <Icon icon="mynaui:check-solid" className="text-[#fff]" size={15} />
                                </div>
                                <h4 className="text-blue font-semibold">{t("button.4")}</h4>
                            </div>

                            <div className="flex items-center">
                                <div className="p-1 bg-blue rounded-full mr-3">
                                    <Icon icon="mynaui:check-solid" className="text-[#fff]" size={15} />
                                </div>
                                <h4 className="text-blue font-semibold">{t("button.5")}</h4>
                            </div>
                        </div>

                        <Link href="/">
                            <Button className="inline-flex items-center text-md font-semibold text-blue bg-[#fff] rounded-3xl shadow-md">
                                {t("link.1")}
                                <Icon icon="si:arrow-right-fill" fill="#5296c6" size={15} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <Title title={t("titleComponent.title.1")} text={t("titleComponent.text.1")} />

                <div className="w-full grid grid-cols-3 gap-5 my-auto container mb-14">
                    {cardData.map((el, i) => <MiniCard key={i} cls="block m-auto" icon={el.icon} title={el.title} />)}
                </div>

                <div className="container grid grid-cols-3 m-auto border bg-bgBase p-12 rounded-[30px] mb-14">
                    {homeCardData.map((el, i) => <HomeCard key={i} icon={el.icon} border={el.border} value={el.value} title={el.title} />)}
                </div>

                <Title title={t("titleComponent.title.2")} text={t("titleComponent.text.2")} />

                <div className="relative w-full mx-auto my-10">
                    <Slider arrows={false} className="w-[100%]" {...serviceSettings}>
                        {servicesData.map((el, i) => (
                            <div key={i} className="items-center rounded-3xl p-4">
                                <ServiceCard img={el.icon} title={el.title} />
                            </div>
                        ))}
                    </Slider>
                </div>


                <Title title={t("titleComponent.title.3")} text={t("titleComponent.text.3")} />

                <div className="container flex flex-wrap items-center justify-between mb-12">
                    <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                </div>

                <Button className="flex items-center mb-10 text-base text-center mx-auto text-blue bg-transparent font-semibold">
                    <Link className="flex items-center" href="/doctors">
                        Barchasini ko'rish
                        <Icon className="text-sm text-blue ml-1" icon="formkit:arrowright" />
                    </Link>
                </Button>

                <Title title={t("titleComponent.title.4")} text={t("titleComponent.text.4")} />


                <div className="container flex justify-between flex-wrap mb-14">
                    {newsData.map((news, index) => (
                        <NewsCard
                            key={index}
                            image={news.image}
                            date={news.date}
                            views={news.views}
                            title={news.title}
                        />
                    ))}
                </div>

                <Button className="flex items-center mb-10 text-base text-center mx-auto text-blue bg-transparent font-semibold">
                    <Link className="flex items-center" href="/news">
                        Barchasini ko`rish
                        <Icon className="text-sm text-blue ml-1" icon="formkit:arrowright" />
                    </Link>
                </Button>

                <Title title={t("titleComponent.title.5")} text={t("titleComponent.text.5")} />

                <div className="container overflow-hidden ">
                    <ContactForm
                        handleSubmit={handleSubmit}
                        formState={formState}
                        handleChange={handleChange}
                        NewsCardImg={NewsCardImg}
                    />
                </div>

                <Title title={t("titleComponent.title.6")} text={t("titleComponent.text.6")} />

                <div className="flex mb-52">
                    <Slider arrows={false} className="min-w-[100%]" {...feedbackSettings}>
                        {feedbackData.map((el, i) => (
                            <div key={i} className="items-center rounded-3xl p-4">
                                <FeedbackCard img={el.img} name={el.name} role={el.role} text={el.text} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="container relative rounded-full flex items-center justify-between bg-callBg py-16 px-20 mb-32 bg-cover bg-center" style={{ backgroundImage: `url(${CallBg})` }}>
                    <Image className="w-[98%] h-[110%] absolute rounded-full border-2 border-bgBase left-0 mx-auto right-0 size-" src={CallBg} alt="call-img" />
                    <div className="z-10 w-full flex items-center">
                        <div className="p-2 bg-blue rounded-full">
                            <Icon className="text-white size-20 rounded-full border border-white p-4 m-2 bg-blue" icon="line-md:phone-call-loop" />
                        </div>

                        <div className="ml-7">
                            <h4 className="text-blue pb-2 mb-5 border-b border-b-blue">Qo'ng'iroq vaqti: 24/7</h4>
                            <Link className="text-blue font-semibold text-xl" href="tel:+99871-203-00-17">71-203-00-17</Link>
                        </div>
                    </div>
                    <Image className="absolute -bottom-3 right-[80px] w-[30%]" src={CallImg} alt="call-img" />
                </div>

            </Layout>
        </Suspense>
    );
};

export default Home;
