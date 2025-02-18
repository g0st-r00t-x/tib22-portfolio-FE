"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Sample gallery data - replace with your actual images
const galleryData = [
	{
		id: 1,
		title: "Tech Workshop 2025",
		image: "/placeholder.svg?height=600&width=800&text=Workshop+Photo",
		category: "Workshops",
		date: "January 15, 2025",
		description:
			"Students learning about the latest web development technologies and best practices.",
		location: "Main Campus, Building A",
		participants: "50+ students",
	},
	{
		id: 2,
		title: "Annual Hackathon",
		image: "/placeholder.svg?height=600&width=800&text=Hackathon+Photo",
		category: "Events",
		date: "March 22, 2025",
		description:
			"Teams collaborating to build innovative solutions during our 24-hour hackathon.",
		location: "Innovation Hub",
		participants: "120 participants",
	},
	{
		id: 3,
		title: "Campus Innovation Fair",
		image: "/placeholder.svg?height=600&width=800&text=Innovation+Fair",
		category: "Events",
		date: "April 5, 2025",
		description:
			"Showcasing student projects and research work to industry partners.",
		location: "University Convention Center",
		participants: "200+ attendees",
	},
	// Add more items as needed
];

// Filter categories
const categories = ["All", "Workshops", "Events", "Programs", "Talks"];

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
	hidden: { scale: 0.8, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const modalVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

interface SelectedImage {
	id: number;
	title: string;
	image: string;
	category: string;
	date: string;
	description: string;
	location: string;
	participants: string;
}


export default function GalleryPage() {
	const [isMounted, setIsMounted] = useState(false);
	const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
		null
	);
	const [activeCategory, setActiveCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const filteredGallery = galleryData.filter((item) => {
		const matchesCategory =
			activeCategory === "All" || item.category === activeCategory;
		const matchesSearch =
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	if (!isMounted) {
		return null;
	}

	return (
		<div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
			{/* Hero section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative py-20 px-4 overflow-hidden"
			>
				<div className="container mx-auto text-center relative z-10">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
						Photo Gallery
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
						Explore our collection of memorable moments, events, and activities
						that showcase our vibrant community.
					</p>

					{/* Search bar */}
					<div className="max-w-xl mx-auto">
						<div className="relative">
							<input
								type="text"
								placeholder="Search gallery..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
							/>
							<svg
								className="w-5 h-5 absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Category filters */}
			<div className="container mx-auto px-4 mb-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="flex flex-wrap justify-center gap-3"
				>
					{categories.map((category) => (
						<Button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								activeCategory === category
									? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/10"
									: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}
						>
							{category}
						</Button>
					))}
				</motion.div>
			</div>

			{/* Gallery grid */}
			<div className="container mx-auto px-4 pb-20">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{filteredGallery.map((item) => (
						<motion.div
							key={item.id}
							variants={itemVariants}
							whileHover={{ y: -5 }}
							className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
							onClick={() => setSelectedImage(item)}
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
							<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
								<p className="text-blue-300 dark:text-blue-200 text-sm font-medium mb-2">
									{item.category} · {item.date}
								</p>
								<h3 className="text-xl font-bold group-hover:text-blue-100 transition-colors duration-200">
									{item.title}
								</h3>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Image modal */}
			<AnimatePresence>
				{selectedImage && (
					<Dialog
						open={!!selectedImage}
						onOpenChange={() => setSelectedImage(null)}
					>
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
						>
							<div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
								<Button
									onClick={() => setSelectedImage(null)}
									className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</Button>

								<div className="relative aspect-[4/3]">
									<Image
										src={selectedImage.image}
										alt={selectedImage.title}
										fill
										className="object-cover"
									/>
								</div>

								<div className="p-6 md:p-8">
									<div className="flex items-center justify-between mb-4">
										<div>
											<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
												{selectedImage.title}
											</h3>
											<p className="text-blue-600 dark:text-blue-400 font-medium">
												{selectedImage.category} · {selectedImage.date}
											</p>
										</div>
										<div className="text-right">
											<p className="text-gray-600 dark:text-gray-400">
												{selectedImage.location}
											</p>
											<p className="text-gray-500 dark:text-gray-500 text-sm">
												{selectedImage.participants}
											</p>
										</div>
									</div>
									<p className="text-gray-700 dark:text-gray-300">
										{selectedImage.description}
									</p>
								</div>
							</div>
						</motion.div>
					</Dialog>
				)}
			</AnimatePresence>
      <Button asChild className="absolute top-10 left-10" variant={'secondary'}>
        <Link href='/'>
          <ArrowLeft className="w-6 h-6"/> Back
        </Link>
      </Button>
		</div>
	);
}
