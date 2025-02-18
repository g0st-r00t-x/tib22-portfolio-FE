"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Sample gallery data - replace with your actual images
const galleryItems = [
	{
		id: 1,
		title: "Tech Workshop 2025",
		image: "/placeholder.svg?height=400&width=600&text=Workshop+Photo",
		category: "Workshops",
		date: "January 15, 2025",
	},
	{
		id: 2,
		title: "Annual Hackathon",
		image: "/placeholder.svg?height=400&width=600&text=Hackathon+Photo",
		category: "Events",
		date: "March 22, 2025",
	},
	{
		id: 3,
		title: "Campus Innovation Fair",
		image: "/placeholder.svg?height=400&width=600&text=Innovation+Fair+Photo",
		category: "Events",
		date: "April 5, 2025",
	},
	{
		id: 4,
		title: "Student Mentorship Program",
		image:
			"/placeholder.svg?height=400&width=600&text=Mentorship+Program+Photo",
		category: "Programs",
		date: "February 10, 2025",
	},
	{
		id: 5,
		title: "Industry Leaders Panel",
		image: "/placeholder.svg?height=400&width=600&text=Panel+Discussion+Photo",
		category: "Talks",
		date: "May 18, 2025",
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
			duration: 0.6,
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

export default function GallerySection() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<section className="py-20 mt-20 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300">
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
						Our Activities
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
						Explore some highlights from our recent events, workshops, and
						activities. Join us at our next event!
					</p>
				</motion.div>

				{/* Gallery grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
				>
					{galleryItems.map((item) => (
						<motion.div
							key={item.id}
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
						>
							{/* Image */}
							<div className="absolute inset-0 w-full h-full">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
								/>
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
							</div>

							{/* Content */}
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
								<p className="text-blue-300 dark:text-blue-200 text-sm font-medium mb-1">
									{item.category} · {item.date}
								</p>
								<h3 className="text-xl font-bold mb-3 group-hover:text-blue-100 transition-colors duration-200">
									{item.title}
								</h3>

								{/* View button */}
								<div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
									<button className="inline-flex items-center text-sm font-medium text-white bg-blue-600/80 hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors">
										View Details
										<svg
											className="w-4 h-4 ml-1.5"
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
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* View all button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					viewport={{ once: true, margin: "-50px" }}
					className="text-center"
				>
					<Link href="/gallery">
						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
							}}
							whileTap={{ scale: 0.95 }}
							className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 dark:shadow-blue-500/10 transition-all duration-300 flex items-center mx-auto"
						>
							View Full Gallery
							<svg
								className="w-5 h-5 ml-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
