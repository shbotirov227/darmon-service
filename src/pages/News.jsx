"use client";

import React from "react"
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import NewsCard from "@/components/NewsCard";
import Img from "@/assets/news-card-img.png";
import { Grid, Card, Text } from "@nextui-org/react";

const News = () => {

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
        <Layout>
            <div className="container">
                <Title title="Maqola" text="So’ngi yangiliklar" />

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
    )   
}

export default News;