import React from 'react'
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import DoctorCard from "@/components/DoctorCard";
import DoctorImg from "@/assets/doctor-img.png";

const Doctors = () => {
    return (
        <Layout>
            <Title title="Shifokorlar" text="Tajribali mutaxassislar" />
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
    )
}

export default Doctors