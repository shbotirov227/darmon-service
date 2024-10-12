"use client";

import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Card, Text } from "@nextui-org/react";
import Img from "@/assets/news-card-img.png";

const Layout = React.lazy(() => import("@/components/Layout"));
const Loading = React.lazy(() => import("@/components/Loading"));
const Title = React.lazy(() => import("@/components/Title"));
const NewsCard = React.lazy(() => import("@/components/NewsCard"));

const News = () => {

    const { t } = useTranslation();

    const newsData = [
        {
            image: Img,
            date: 'September 20',
            views: 124,
            title: 'Malakali shifokorlar tomonidan azonaterapiya yangi uslubda'
        },
        {
            image: Img,
            date: 'September 21',
            views: 200,
            title: 'Yangi davolash texnikalari bilan shifokorlar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
        {
            image: Img,
            date: 'September 22',
            views: 150,
            title: 'Sog‘liqni saqlashda yangi yangiliklar'
        },
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                <div className="container">
                    <Title title={t("titleComponent.title.4")} text={t("titleComponent.text.4")} />

                        <div className="flex justify-between flex-wrap mb-14">
                            {newsData.map((news, index) => (
                                <NewsCard
                                    key={index}
                                    image={news.image}
                                    date={news.date}
                                    views={news.views}
                                    title={news.title}
                                />
                            ))}
                        </div>

                    <div className="flex items-center justify-between flex-wrap">
                    </div>
                </div>
            </Layout>
        </Suspense>
    )   
}

export default News;