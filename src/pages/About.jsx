import React from 'react'
import Layout from "@/components/Layout";
import AboutCard from "@/components/AboutCard";
import Img1 from "@/assets/about-img1.png"
import Img2 from "@/assets/about-img2.png"
import Img3 from "@/assets/about-img3.png"
import { FaUserDoctor } from "react-icons/fa6";
import Image from "next/image";
import Title from "@/components/Title";

const About = () => {
    const data = [
        {
            img: Img2,
            personName: "Abdullayeva Aziza Umidovna",
            job: "Klinika asoschisi",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
            qualification: "Yuqori malakali shifokor",
        },

        {
            img: Img3,
            personName: "Abdullayeva Aziza Umidovna",
            job: "Klinika asoschisi",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
            qualification: "Yuqori malakali shifokor",
        },
    ];

    return (
        <div>
            <Layout>
                <div className="container flex items-center justify-center mt-12">
                    <Image className="w-[30%]" src={Img1} alt="about-img1" />
                    <div className="w-[45%] ml-20">
                        <h4 className="text-blue text-center text-[16px] mb-3">Biz haqimizda</h4>
                        <h3 className="text-black text-[32px] font-bold text-center">DARMON SERVIS klinikasi</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of publishing software like Aldus PageMaker including versions of Lorem Ipsum.essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        </p>

                        <div className="flex items-center">
                            <div className="p-3 bg-bgBase rounded-lg mr-3">
                                <FaUserDoctor fill="#5296c6" size={25} />
                            </div>
                            <h4 className="text-blue font-semibold">Yuqori malakali shifokorlar</h4>
                        </div>
                    </div>
                </div>

                <div className="container mb-10">
                    {
                        data.map((el, index) => (
                            <AboutCard
                                key={index}
                                img={el.img}
                                personName={el.personName}
                                job={el.job}
                                description={el.description}
                                qualification={el.qualification}
                                isReversed={index % 2 !== 0}
                            />
                        ))
                    }
                </div>

                <Title title="Darmon servis klinikasi" text="Fotolavhalar" />
            </Layout>
        </div>
    )
}

export default About