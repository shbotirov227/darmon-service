import React, { Suspense } from "react";
import Image from "next/image";
import Img from "@/assets/news-detail-img.png";

const Layout = React.lazy(() => import( "@/components/Layout"));
const Loading = React.lazy(() => import( "@/components/Loading"));
const Title = React.lazy(() => import( "@/components/Title"));


const NewsDetail = () => {

    const ulData = [
        "Dori-darmonlarni qabul qilgandan keyin ham o'tmaydigan tez-tez bosh og'rig'i;",
        "Ko'ngil aynish, titroq, bosh aylanishi va muvozanatni yo'qotish;",
        "Yuzning xiralashishi va yuz ifodalarining buzilishi;",
        "Oyoq-qo'llarda og'riq;"
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <div className="container">
                    <Title title="Maqola" text="Yangilikni nomi" />

                    <Image className="mb-20" src={Img} alt="news-detail-img" />

                    <div className="mb-20">
                        <h4 className="text-blue text-2xl font-bold mb-8">Lorem Ipsum is simply dummy text of the printing</h4>
                        <p className="text-base text-txtColor leading-7 mb-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                        </p>

                        <ul className="text-[bgBase] text-base list-disc p-5 mb-8">
                            {ulData.map((el, i) => <li key={i} className="text-txtColor mb-2">{el}</li>)}
                        </ul>
                        <p className="text-base text-txtColor leading-7">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                        </p>
                    </div>
                </div>
            </Layout>
        </Suspense>
    )
}

export default NewsDetail;