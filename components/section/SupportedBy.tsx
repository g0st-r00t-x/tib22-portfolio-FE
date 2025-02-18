"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Partner/Sponsor data
const partners = [
	{
		id: 1,
		name: "TechCorp",
		logo: "/placeholder.svg?height=100&width=200&text=TechCorp",
		website: "https://example.com/techcorp",
		description: "Leading technology solutions provider",
		category: "Technology",
	},
	{
		id: 2,
		name: "EduFund",
		logo: "/placeholder.svg?height=100&width=200&text=EduFund",
		website: "https://example.com/edufund",
		description: "Educational scholarship foundation",
		category: "Education",
	},
	{
		id: 3,
		name: "InnoLabs",
		logo: "/placeholder.svg?height=100&width=200&text=InnoLabs",
		website: "https://example.com/innolabs",
		description: "Innovation and research laboratory",
		category: "Research",
	},
	{
		id: 4,
		name: "GlobalConnect",
		logo: "/placeholder.svg?height=100&width=200&text=GlobalConnect",
		website: "https://example.com/globalconnect",
		description: "International student exchange program",
		category: "Education",
	},
	{
		id: 5,
		name: "FutureTech",
		logo: "/placeholder.svg?height=100&width=200&text=FutureTech",
		website: "https://example.com/futuretech",
		description: "Emerging technology incubator",
		category: "Technology",
	},
	{
		id: 6,
		name: "ArtsFund",
		logo: "/placeholder.svg?height=100&width=200&text=ArtsFund",
		website: "https://example.com/artsfund",
		description: "Creative arts and design sponsor",
		category: "Arts",
	},
];

// Animation variants
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
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
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

export default function SupportedBy() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-black dark:to-indigo-950 transition-colors duration-300">
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
					viewport={{ once: true, margin: "-50px" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{partners.map((partner) => (
						<motion.div
							key={partner.id}
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="h-20 flex items-center justify-center mb-6 relative">
								<Image
									src={partner.logo}
									alt={partner.name}
									width={180}
									height={80}
									className="object-contain max-h-full dark:invert-[0.15] transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
								{partner.name}
							</h3>
							<p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
								{partner.category}
							</p>
							<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
								{partner.description}
							</p>
							<Link
								href={partner.website}
								className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
							>
								Visit Website
								<svg
									className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</Link>
						</motion.div>
					))}
				</motion.div>

				{/* Call to action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					viewport={{ once: true, margin: "-50px" }}
					className="mt-16 text-center"
				>
					<p className="text-gray-700 dark:text-gray-300 mb-4">
						Interested in becoming a supporter?
					</p>
					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
						}}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 dark:shadow-blue-500/10 transition-all duration-300"
					>
						Become a Partner
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
