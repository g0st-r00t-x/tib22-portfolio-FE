"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import TechAnimation from "@/components/ui/TechAnimation";

export default function Hero() {
	useEffect(() => {
		// Initialize AOS
		import("aos").then((AOS) => {
			AOS.default.init({
				duration: 1000,
				once: true,
			});
		});
	}, []);

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				duration: 0.8,
				ease: "easeInOut",
			},
		},
	};

	return (
		<main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-black dark:to-indigo-950" id='home'>
			<TechAnimation />
			<motion.div
				className="text-center z-10"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.h1
					className="mb-4 font-bold"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<span className="block text-5xl md:text-7xl text-gray-600 dark:text-gray-300 mb-2">
						Welcome To
					</span>
					<span className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-extrabold tracking-tight">
						TI-B22
					</span>
				</motion.h1>

				<motion.div
					className="space-y-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.8 }}
				>
					<p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300">
						Teknologi Informasi Angkatan-22
					</p>
					<motion.h2
						className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.9, duration: 0.6 }}
					>
						Universitas An-Nuqayah
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: "60%" }}
						transition={{ delay: 1.1, duration: 0.7 }}
						className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mt-3 rounded-full"
					/>
				</motion.div>
			</motion.div>
		</main>
	);
}
