"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
	useEffect(() => {
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
		<motion.div
			className="min-h-screen bg-gradient-to-tr from-indigo-200 to-white dark:from-black dark:to-indigo-950 py-12 px-4 sm:px-6 lg:px-8"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="max-w-7xl mx-auto" id="about">
				<div className="mb-12 md:mb-16 space-y-4 mt-20">
					<h1
						className="text-4xl font-bold text-center text-gray-800 dark:text-white"
						data-aos="fade-down"
					>
						Tentang Kami
					</h1>
					<p className="text-xl text-center text-gray-600 dark:text-white">
						Kelas kami adalah kelas unggulan & humoris.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div data-aos="fade-right">
						<Image
							src="/placeholder.svg?height=400&width=600"
							alt="University"
							width={600}
							height={400}
							className="rounded-lg shadow-lg dark:brightness-75"
						/>
					</div>
					<div data-aos="fade-left">
						<h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
							Kelas Kami
						</h2>
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							Sejak masa awal perkembangannya hingga saat ini, Pondok Pesantren
							Annuqayah telah melakukan terobosan pendidikan yang menegaskan
							landasan epistemologi keilmuan yang terbuka. Visi keilmuan
							Annuqayah yang juga diilhami oleh salah satu kitab karya
							Jalaluddin Assuyuthi yang berjudul Itmam al-Dirayah li- Qurra’
							al-Nuqayah ini mendorong munculnya upaya pengembangan dan
							pembaruan pendidikan di berbagai aspek, termasuk kelembagaan.
						</p>
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							Duis aute irure dolor in reprehenderit...
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
