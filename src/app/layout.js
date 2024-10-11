import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <link rel="icon" href="/logo_white.svg" />
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
			<body className="bg-[#F9F9F9]">
                <NextUIProvider>
                    {children}
                </NextUIProvider>
			</body>
		</html>
	);
}
