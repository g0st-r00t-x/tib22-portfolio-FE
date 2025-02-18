"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
	{
		id: 1,
		name: "IEDA ZAIDAH",
		logo: "/assets/images/ieda-partner.jpg",
		website: "https://example.com/techcorp",
	},
	{
		id: 2,
		name: "RAMA DEKORASI",
		logo: "/assets/images/rama-partner.jpg",
		website: "https://example.com/edufund",
	},
	{
		id: 3,
		name: "InnoLabs",
		logo: "/placeholder.svg?height=100&width=200&text=InnoLabs",
		website: "https://example.com/innolabs",
	},
	{
		id: 4,
		name: "GlobalConnect",
		logo: "/placeholder.svg?height=100&width=200&text=GlobalConnect",
		website: "https://example.com/globalconnect",
	},
	{
		id: 5,
		name: "FutureTech",
		logo: "/placeholder.svg?height=100&width=200&text=FutureTech",
		website: "https://example.com/futuretech",
	},
	{
		id: 6,
		name: "ArtsFund",
		logo: "/placeholder.svg?height=100&width=200&text=ArtsFund",
		website: "https://example.com/artsfund",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const fadeInVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

export default function Partners() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-black dark:to-indigo-950">
			<div className="container mx-auto px-4">
				{/* Section heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={fadeInVariants}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
						Supported By
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
						Our programs are made possible by the generous support of these
						industry-leading organizations.
					</p>
				</motion.div>

				{/* Partners grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
				>
					{partners.map((partner) => (
						<motion.div
							key={partner.id}
							variants={itemVariants}
							className="relative w-full aspect-square max-w-sm overflow-hidden rounded-xl"
						>
							<motion.a
								href={partner.website}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full h-full relative"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Image
									src={partner.logo}
									alt={partner.name}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
									<span className="text-white font-semibold text-lg">
										{partner.name}
									</span>
								</div>
							</motion.a>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
