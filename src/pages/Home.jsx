"use client";

import React, { useState } from "react";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import HomeCard from "@/components/HomeCard";
import MiniCard from "@/components/MiniCard";
import DoctorCard from "@/components/DoctorCard";
import NewsCard from "@/components/NewsCard";
import ContactForm from "@/components/ContactForm";
import { GoArrowRight } from "react-icons/go";
import { Button, Card, Input, Label, Textarea } from "@nextui-org/react";
import Img from "@/assets/home-img1.png";
import Img1 from "@/assets/about-img1.png";
import CarouselImg1 from "@/assets/about-img1.png";
import CarouselImg2 from "@/assets/news-card-img.png";
import DoctorImg from "@/assets/doctor-img.png";
import NewsCardImg from "@/assets/news-card-img.png";
import Image from "next/image";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import InputMask from "react-input-mask";
import {
    HomeHospitalIcon,
    HomeCardIcon1,
    HomeCardIcon2,
    HomeCardIcon3,
    HomeCardIcon4,
    HomeCardIcon5,
    HomeCardIcon6,
    HomeIcon1,
    HomeIcon2,
    HomeIcon3
} from "@/assets/icons";
import { Icon } from '@iconify/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
    
    const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [Img, Img1, CarouselImg1, CarouselImg2];

    const homeCardData = [
        {
            icon: <HomeIcon1 size={55} />,
            value: "250+",
            title: "Bemorlar soni"
        },

        {
            icon: <HomeIcon2 size={55} />,
            value: "250+",
            title: "Malakali shiforkorlar",
            border: true
        },

        {
            icon: <HomeIcon3 size={45} />,
            value: "250+",
            title: "Xizmat turlari"
        }
    ];

    const cardData = [
        {
            icon: <HomeCardIcon1 />,
            title: "24/7 ishlash xizmati"
        },

        {
            icon: <HomeCardIcon2 />,
            title: "Tibbiy xizmatni uyga chaqirish imkoniyati"
        },

        {
            icon: <HomeCardIcon3 />,
            title: "Faol rivojlanish va zamonaviy uskunalar"
        },

        {
            icon: <HomeCardIcon4 />,
            title: "Qulay chegirmalar tizimi"
        },

        {
            icon: <HomeCardIcon5 />,
            title: "Keng ish tajribasi va malakali shifokorlar"
        },

        {
            icon: <HomeCardIcon6 />,
            title: "Ultratovush diagnostikasi bo’yicha yetakchilar"
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
            title: "Ginokologiya"
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

    // Custom Prev Arrow
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 cursor-pointer z-10">
                <FaArrowLeft onClick={onClick} size={24} color="#5296c6" />
            </div>
        );
    };

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => {
        return (
            <div className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 cursor-pointer z-10">
                <FaArrowRight onClick={onClick} size={24} color="#5296c6" />
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
        customPaging: i => (
            <div className="w-3 h-3 bg-blue rounded-full cursor-pointer"></div>
        ),
        dotsClass: "slick-dots custom-dots",
    };

    const handleAfterChange = (current) => {
        setCurrentSlide(current);
    };

    const serviceSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 4.7,
        slidesToShow: 4,
        nextArrow: false,
        prevArrow: false,
        cursor: "pointer",
        customPaging: (i) => (
            <div
                className={`w-4 h-3 transition-all rounded-full cursor-pointer ${
                    i === currentSlide
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

    return (
        <div>
            <Layout>
                <div className="m-auto text-center">
                    <div className="inline-flex items-center text-sm bg-[white] rounded-3xl shadow-md py-2 px-4 my-10">
                        <HomeHospitalIcon cls="mr-2 bg-blue p-[5px] rounded-full w-[30px] h-[30px]" />
                        <h4 className="text-blue">Welcome to our hospital</h4>
                    </div>

                    <h2 className="w-[50%] m-auto mb-6 font-semibold text-5xl text-center text-black leading-[70px]">
                        <span className="text-blue">DARMON SERVIS</span> Klinikasi Sizning Sog’ligingiz Haqida Qayg’uradi
                    </h2>
                    <Button className="bg-blue text-white shadow-md">
                        Uyga chaqiruv xizmat <GoArrowRight fill="white" size={22} />
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
                        <h4 className="text-blue text-center text-[16px] mb-3">Biz haqimizda</h4>
                        <h3 className="text-black text-[32px] font-bold text-center">DARMON SERVIS klinikasi</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className="flex items-center mb-[8%]">
                            <div className="flex items-center mr-[5%]">
                                <div className="p-1 bg-blue rounded-full mr-3">
                                    <BsCheckLg fill="#fff" size={15} />
                                </div>
                                <h4 className="text-blue font-semibold">Faol rivojlanish</h4>
                            </div>

                            <div className="flex items-center">
                                <div className="p-1 bg-blue rounded-full mr-3">
                                    <BsCheckLg fill="#fff" size={15} />
                                </div>
                                <h4 className="text-blue font-semibold">Keng ish tajribasi</h4>
                            </div>
                        </div>

                        <Link href="/">
                            <Button className="flex items-center text-md font-semibold text-blue bg-[#fff] rounded-3xl shadow-md">
                                Ko’proq ma’lumot
                                <FaArrowRight fill="#5296c6" size={15} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <Title title="Afzalliklarmiz" text="Nega aynan Darmon Servisni tanlashingiz kerak?" />

                <div className="w-full grid grid-cols-3 gap-5 my-auto container mb-10">
                    {cardData.map((el, i) => <MiniCard key={i} cls="block m-auto" icon={el.icon} title={el.title} />)}
                </div>

                <div className="container grid grid-cols-3 m-auto bg-bgBase p-12 rounded-[30px] mb-10">
                    {homeCardData.map((el, i) => <HomeCard key={i} icon={el.icon} border={el.border} value={el.value} title={el.title} />)}
                </div>

                <Title title="Xizmatlar" text="Darmon Servis xizmatlari" />

                <div className="relative container w-full mx-auto my-10">
                    <Slider className="min-w-[100%]" {...serviceSettings}>
                        {servicesData.map((el, i) => (
                            <div key={i} className="items-center rounded-3xl p-4">
                                <ServiceCard img={el.icon} title={el.title} />
                            </div>
                        ))}
                    </Slider>
                </div>


                <Title title="Shifokorlar" text="Tajribali mutaxassislar" />

                <div className="flex flex-wrap items-center justify-between mb-12">
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
            
                <Title title="Maqola" text="So’ngi yangiliklar" />

               
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
                        Barchasini ko'rish
                        <Icon className="text-sm text-blue ml-1" icon="formkit:arrowright" />
                    </Link>
                </Button>

                <Title title="Konsultatsiya" text="Shifokor qabuliga yoziling" />

                <div className="container overflow-hidden ">
                    <ContactForm 
                        handleSubmit={handleSubmit} 
                        formState={formState} 
                        handleChange={handleChange} 
                        NewsCardImg={NewsCardImg} 
                    />
                </div>

                <Title title="Izohlar" text="Bemorlar fikrlari" />

            </Layout>
        </div>
    );
};

export default Home;
