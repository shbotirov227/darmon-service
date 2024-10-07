import React from "react";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@nextui-org/react";
import Carousel from "@/components/Carousel/Carousel";
import Img from "@/assets/home-img1.png";
import Img2 from "@/assets/logo.svg";
// import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Image from "next/image";

const Home = () => {

    const data = [
        Img, Img2
    ]

    return (
        <div className="">
            <Layout>
                <div className="m-auto text-center">
                    <h2 className="w-[50%] m-auto mb-6 text-5xl text-center text-black"><span className="text-blue">DARMON SERVIS</span> Klinikasi Sizning Sog’ligigiz Haqida Qayg’uradi</h2>
                    <Button className="bg-blue text-white">Uyga chaqiruv xizmat <GoArrowRight fill="white" size={22} /></Button>
                </div>

                <Image src={Img} alt="img" />
            </Layout>
        </div>
    );
};

export default Home;
