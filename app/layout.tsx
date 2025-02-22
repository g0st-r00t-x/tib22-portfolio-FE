import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/Providers/ThemeProvider";
const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "TI-B22 Portfolio",
	description:
		"Portfolio for TI-B22 class of Information Technology Department",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${poppins.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
