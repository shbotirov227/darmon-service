"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import HomePage from "../pages/Home";
import 'aos/dist/aos.css'; // AOS css faylini import qiling
import '@/styles/slick.css';
// import dynamic from 'next/dynamic'
 
// const NoSSR = dynamic(() => import('../pages/Home'), { ssr: false })

export default function Home() {

    useEffect(() => {
        AOS.init({
            offset: 50, 
            duration: 1000, // animatsiya davomiyligi (millisekundlarda)
            once: false, // animatsiya faqat bir marta ko'rinishini ta'minlaydi
        });
      }, []);


	return (
        <>
		{/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		</div> */}
            <HomePage />
            {/* <NoSSR /> */}
        </>
	);
}
