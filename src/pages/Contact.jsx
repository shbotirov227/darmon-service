import React from "react";
import Link from "next/link";
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

const Contact = () => {
    return (
        <Layout>
            <div className="container">
                <Title title="Bog'lanish" text="Biz bilan bog'laning" />

                <div className="flex items-center justify-around mb-20">
                    <div className="w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px]">
                        {/* <div className="flex items-center justify-center bg-bgBase p-2 rounded-full"> */}
                            <LuPhoneCall className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />
                        {/* </div> */}
                        <h3 className="text-black font-semibold mb-3">Telefon raqam</h3>
                        <Link className="text-black py-3" href="tel:+99871-200-00-17">71-200-00-17</Link>
                    </div>

                    <div className="w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px]">
                        {/* <div className="flex items-center bg-bgBase p-2 rounded-full"> */}
                            <LuMail className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />
                        {/* </div> */}
                        <h3 className="text-black font-semibold mb-3">Elektron pochta</h3>
                        <Link className="text-black py-3" href="mailto:Darmonservis1@gmail.com">Darmonservis1@gmail.com</Link>
                    </div>

                    <div className="w-[300px] h-full text-center p-10 bg-white shadow-xl rounded-[30px]">
                        {/* <div className="flex items-center "> */}
                            <SlLocationPin className="flex items-center justify-center m-auto text-blue bg-bgBase p-4 rounded-full mb-6" size={55} />
                        {/* </div> */}
                        <h3 className="text-black font-semibold mb-3">Manzil</h3>
                        <Link className="text-black py-3" target="_blank" href="https://yandex.uz/maps/-/CDXazKyr">Toshkent, Chilonzor 18/19 uy</Link>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-20">
                    <div>
                        <h3 className="text-blue font-bold text-[30px] mb-4">Visit our hospital</h3>
                        <p className="text-txtColor my-5 leading-7 text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <iframe
                        src="https://yandex.uz/map-widget/v1/-/CDXazKyr?z=16&l=map"
                        className="shadow-xl rounded-xl border border-[#D6D6D6]"
                        width="745"
                        height="280"
                        frameborder="0"
                        allowfullscreen="true"
                    ></iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Contact