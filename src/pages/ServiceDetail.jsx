/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import DoctorCard from "@/components/DoctorCard";
import Img1 from "@/assets/service-detail-img1.png";
import DoctorImg from "@/assets/doctor-img.png";

const ServiceDetail = () => {

    const ulData1 = [
        "Dori-darmonlarni qabul qilgandan keyin ham o'tmaydigan tez-tez bosh og'rig'i;",
        "Ko'ngil aynish, titroq, bosh aylanishi va muvozanatni yo'qotish;",
        "Yuzning xiralashishi va yuz ifodalarining buzilishi;",
        "Oyoq-qo'llarda og'riq;",
        "Charchoqning kuchayishi;",
        "Pastki bel og'rig'i;",
        "Orqa, oshqozon va ko'krakdagi og'riqlar.",
    ]

    const ulData2 = [
        "migren;",
        "insult;",
        "Miyaning ichki bosimi;",
        "Miya shikastlanishi;",
        "Periferik asab tizimining kasalliklari;",
        "Lomber mintaqada churra Osteoxondroz.",
    ]

    return (
        <Layout>
            <div className="container">
                <Title title="Xizmatlar" text="Nevrologiya" />
                <Image className="mb-7" src={Img1} alt="service-detail-img" />

                <div className="mb-12">
                    <h4 className="text-blue text-lg font-semibold mb-5">Nevrologiya bu nima?</h4>
                    <p className="text-txtColor text-base">
                        Nevrologiya - bu markaziy asab tizimi bilan shug'ullanadigan tibbiyot sohasi. “Darmon servis” tibbiyot markazi nevropatologlari miya kasalliklari, asab tizimi shikastlanishlari, nevrozlar, asab tizimi kasalliklarini davolaydi. Ko'pgina nevrologik kasalliklarning belgilari ichki organlar kasalliklarining klinik ko'rinishiga o'xshaydi, shuning uchun to'g'ri tashxis qo'yish uchun to'liq keng qamrovli tekshiruvdan o'tish juda muhimdir.Nevrologik kasalliklarning dastlabki belgilarida mutaxassis bilan bog'lanish sizni davolash samaradorligini ta'minlashga imkon beradi.
                    </p>
                </div>

                <div className="mb-12">
                    <h4 className="text-blue text-lg font-semibold mb-5">Nevrologga qachon murojaat qilish kerak?</h4>
                    <p className="text-txtColor text-base">
                        Quyidagi alomatlar uchun nevrolog bilan bog'lanishingiz mumkin:
                    </p>

                    <ul className="text-txtColor text-base list-disc p-5">
                        {ulData1.map((el, i) => <li key={i} className="text-txtColor mb-2">{el}</li>)}
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="text-blue text-lg font-semibold mb-5">Nevrologga qachon murojaat qilish kerak?</h4>
                    <p className="text-txtColor text-base">
                        Quyidagi alomatlar uchun nevrolog bilan bog'lanishingiz mumkin:
                    </p>

                    <ul className="text-[bgBase] text-base list-disc p-5">
                        {ulData2.map((el, i) => <li key={i} className="text-txtColor mb-2">{el}</li>)}
                    </ul>
                </div>

                <div>
                    <Title title="Shifokorlar" text="Nevrolog shifokorlar" />

                    <div className="flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default ServiceDetail;