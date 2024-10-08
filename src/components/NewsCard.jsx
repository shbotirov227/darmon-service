import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

const NewsCard = ({ image, date, views, title }) => {
    return (
        <div className="w-[400px] h-full mb-12 bg-white rounded-lg shadow-xl overflow-hidden">
            <Image className="w-full object-cover" src={image} alt="Yangilik" />
            <div className="p-8 h-[170px]">
                <div className="flex items-center text-gray-500 text-sm mb-5">
                    <span className="mr-2">• {date}</span>
                    <span className="flex items-center">
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12h2m-6 4h.01M7 8h10m1 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2h1m4-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4"
                            />
                        </svg>
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