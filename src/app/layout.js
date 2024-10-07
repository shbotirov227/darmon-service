import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-[#F9F9F9]">
                <NextUIProvider>
                    {children}
                </NextUIProvider>
			</body>
		</html>
	);
}
