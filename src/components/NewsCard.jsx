import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";

const NewsCard = ({ image, date, views, title }) => {
    return (
        <div className="w-[400px] h-full mb-12 bg-white rounded-xl shadow-xl overflow-hidden">
            <Image className="w-full object-cover" src={image} alt="Yangilik" />
            <div className="p-8 h-[170px]">
                <div className="flex items-center text-gray-500 text-sm mb-5">
                    <span className="mr-2">• {date}</span>
                    <span className="flex items-center">
                        <Icon icon="lsicon:view-outline" size={30} />
                        {views}
                    </span>
                </div>
                <Link href="news-detail" className="text-lg font-semibold mb-2">
                    {title}
                </Link>
            </div>
        </div>
    )
}

export default NewsCard;