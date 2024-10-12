"use client";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import DoctorImg from "@/assets/doctor-img.png";

const Layout = React.lazy(() => import("@/components/Layout"));
const Loading = React.lazy(() => import("@/components/Loading"));
const Title = React.lazy(() => import("@/components/Title"));
const DoctorCard = React.lazy(() => import("@/components/DoctorCard"));


const Doctors = () => {

    const { t } = useTranslation();

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <Title title={t("titleComponent.title.3")} text={t("titleComponent.text.3")} />
                <div className="container">
                    <div className=" flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                    <div className=" flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                    <div className=" flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                    <div className=" flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                    <div className=" flex flex-wrap items-center justify-between mb-12">
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                        <DoctorCard img={DoctorImg} doctorName="Micheal Scofield" job="Nevrolog" experience={10} />
                    </div>
                </div>
            </Layout>
        </Suspense>
    )
}

export default Doctors