/* eslint-disable react/no-unescaped-entities */
import React, { Suspense } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Img1 from "@/assets/service-detail-img1.png";
import DoctorImg from "@/assets/doctor-img.png";

const Layout = React.lazy(() => import("@/components/Layout"));
const Loading = React.lazy(() => import("@/components/Loading"));
const Title = React.lazy(() => import("@/components/Title"));
const DoctorCard = React.lazy(() => import("@/components/DoctorCard"));


const ServiceDetail = () => {

    const { t } = useTranslation();

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
        <Suspense fallback={<Loading />}>
            <Layout>
                <div className="container">
                    <Title title={t("titleComponent.title.8")} text={t("titleComponent.text.9")} />
                    <Image className="mb-7" src={Img1} alt="service-detail-img" />

                    <div className="mb-12">
                        <h4 className="text-blue text-lg font-semibold mb-5">{t("serviceDetail.title.1")}</h4>
                        <p className="text-txtColor text-base">{t("serviceDetail.text.1")}</p>
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
        </Suspense>
    )
}

export default ServiceDetail;