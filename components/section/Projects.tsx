"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const projects = [
	{
		id: 1,
		title: "Minimalist Brand Identity",
		description: "Clean and modern visual communication for a tech startup",
		imageUrl: "/placeholder.svg?height=600&width=800",
		category: "Branding",
	},
	{
		id: 2,
		title: "Sleek Web Experience",
		description: "Elegant online presence for a luxury fashion brand",
		imageUrl: "/placeholder.svg?height=800&width=600",
		category: "Web Design",
	},
	{
		id: 3,
		title: "Intuitive Mobile App",
		description: "User-friendly app design for a health and wellness company",
		imageUrl: "/placeholder.svg?height=600&width=800",
		category: "Mobile App",
	},
	{
		id: 4,
		title: "Elegant Digital Campaign",
		description:
			"Sophisticated marketing strategy for a luxury automotive brand",
		imageUrl: "/placeholder.svg?height=800&width=600",
		category: "Digital Marketing",
	},
	{
		id: 5,
		title: "Refined UI/UX Design",
		description:
			"Streamlined user interfaces for a financial services platform",
		imageUrl: "/placeholder.svg?height=600&width=800",
		category: "UI/UX",
	},
	{
		id: 6,
		title: "Minimalist Product Design",
		description: "Sleek and functional design for a smart home device",
		imageUrl: "/placeholder.svg?height=800&width=600",
		category: "Product Design",
	},
];

const categories = [
	"All",
	...new Set(projects.map((project) => project.category)),
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
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

export default function ProjectsGrid() {
	const [filter, setFilter] = useState("All");
	const [isMounted, setIsMounted] = useState(false);

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category === filter);
	useEffect(() => {
			setIsMounted(true);
		}, []);
	if (!isMounted) {
		return null;
	}

	return (
		<section className="py-24 bg-gradient-to-b from-background to-background/50 transition-colors duration-300" id="projects">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
						Our Work
					</h2>
					<p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
						A showcase of our minimalist designs and creative solutions.
					</p>
				</motion.div>

				<motion.div
					className="flex flex-wrap justify-center gap-3 mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setFilter(category)}
							className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm
                ${
									filter === category
										? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
										: "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
								}`}
						>
							{category}
						</button>
					))}
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<AnimatePresence mode="wait">
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								layout
								className="group relative bg-card rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 
                          border border-border hover:border-primary/30 backdrop-blur-sm"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={project.imageUrl}
										alt={project.title}
										layout="fill"
										objectFit="cover"
										className="transition-transform duration-700 group-hover:scale-110"
									/>
									<motion.div
										className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                              flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
										initial={false}
									>
										<p className="text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
											{project.description}
										</p>
									</motion.div>
								</div>
								<div className="p-8">
									<div className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-3">
										{project.category}
									</div>
									<h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
										{project.title}
									</h3>
									<a
										href="#"
										className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
									>
										View Project
										<motion.svg
											className="w-5 h-5 ml-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											whileHover={{ x: 5 }}
											transition={{ duration: 0.2 }}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</motion.svg>
									</a>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
