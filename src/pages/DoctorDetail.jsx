"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Img1 from "@/assets/doctor-detail-img.png";
import RatingStars from "@/components/RatingStars";
import ScheduleComponent from "@/components/ScheduleComponent";

const DoctorDetail = () => {

    const ulData = [
        "Dori-darmonlarni qabul qilgandan keyin ham o'tmaydigan tez-tez bosh og'rig'i;",
        "Ko'ngil aynish, titroq, bosh aylanishi va muvozanatni yo'qotish;",
        "Yuzning xiralashishi va yuz ifodalarining buzilishi;",
        "Oyoq-qo'llarda og'riq;"
    ];

    return (
        <Layout>
            <div className="my-20 container">
                <div className="w-full flex justify-betweeen mb-8">
                    <Image className="w-[30%]" src={Img1} alt="doctor-detail-img" />

                    <div className="w-[50%] ml-12">
                        <h4 className="text-blue text-2xl font-bold">Izzat Abdullayev Sardorovich</h4>
                        <h4 className="text-2xl text-black font-bold my-5">Nevropotolog</h4>
                        <p className="text-base text-txtColor leading-7">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                        </p>
                    </div>
                </div>
                <div className="inline-flex items-center mb-20 py-2 px-4 bg-[white] rounded-3xl shadow-[2.0px_2.0px_5.0px_rgba(0,0,0,0.10)]">
                    <RatingStars />
                    <h4 className="ml-3 text-lg leading-7 mb-1">(5.0)</h4>
                </div>

                <div className="mb-24">
                    <ScheduleComponent />
                </div>

                <div className="mb-20">
                    <h4 className="text-blue text-2xl font-bold mb-8">Shifokor haqida ma’lumot</h4>
                    <p className="text-base text-txtColor leading-7 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                    </p>

                    <ul className="text-[bgBase] text-base list-disc p-5 mb-8">
                        {ulData.map((el, i) => <li key={i} className="text-txtColor mb-2">{el}</li>)}
                    </ul>
                    <p className="text-base text-txtColor leading-7">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default DoctorDetail