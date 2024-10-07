import React from 'react'
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Img1 from "@/assets/services-img1.png"
import Img2 from "@/assets/services-img2.png"
import Img3 from "@/assets/services-img3.png"
import Img4 from "@/assets/services-img4.png"
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
    return (
        <div>
            <Layout>
                <Title title="Xizmatlar" text="Darmon Servis xizmatlari" />
                <div className="container flex items-center justify-between flex-wrap">
                    <ServiceCard img={Img1} title="Terapevt" />
                    <ServiceCard img={Img2} title="Terapevt" />
                    <ServiceCard img={Img3} title="Terapevt" />
                    <ServiceCard img={Img4} title="Terapevt" />

                    <ServiceCard img={Img1} title="Terapevt" />
                    <ServiceCard img={Img2} title="Terapevt" />
                    <ServiceCard img={Img3} title="Terapevt" />
                    <ServiceCard img={Img4} title="Terapevt" />

                    <ServiceCard img={Img1} title="Terapevt" />
                    <ServiceCard img={Img2} title="Terapevt" />
                    <ServiceCard img={Img3} title="Terapevt" />
                    <ServiceCard img={Img4} title="Terapevt" />

                    <ServiceCard img={Img1} title="Terapevt" />
                    <ServiceCard img={Img2} title="Terapevt" />
                    <ServiceCard img={Img3} title="Terapevt" />
                    <ServiceCard img={Img4} title="Terapevt" />

                    <ServiceCard img={Img1} title="Terapevt" />
                    <ServiceCard img={Img2} title="Terapevt" />
                    <ServiceCard img={Img3} title="Terapevt" />
                    <ServiceCard img={Img4} title="Terapevt" />
                </div>
            </Layout>
        </div>
    )
}

export default Services