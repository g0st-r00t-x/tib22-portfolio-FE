"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "@/components/ui/ImageSlider";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Student profile slides data
const studentSlides = [
	{
		image: "/assets/images/Gambar1.jpg",
		background: "/assets/images/Gambar1.jpg",
		name: "John Doe",
		role: "Web Developer",
	},
	{
		image: "/assets/images/Gambar2.jpeg",
		background: "/assets/images/Gambar2.jpeg",
		name: "Jane Smith",
		role: "UX Designer",
	},
	{
		image: "/assets/images/Gambar3.png",
		background: "/assets/images/Gambar3.png",
		name: "Mike Johnson",
		role: "Full Stack Developer",
	},
	{
		image: "/placeholder.svg?height=600&width=400&text=Project+4",
		background: "/placeholder.svg?height=1080&width=1920&text=Background+4",
		name: "Emily Brown",
		role: "Graphic Designer",
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

interface interfaceSlide{
	image: string;
	background: string;
	name: string;
	role: string;
}

export default function ProfileSection() {
	const [isMounted, setIsMounted] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(studentSlides[0]);
	const [activeSection, setActiveSection] = useState("university");

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleSlideChange = (slide: interfaceSlide) => {
		setCurrentSlide(slide);
	};

	if (!isMounted) {
		return null;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-blue-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out pb-12">
			{/* Navigation Tabs */}
			<div className="container mx-auto px-4 pt-16">
				<motion.div
					className="flex flex-wrap justify-center gap-4 mb-12"
					variants={staggerContainer}
					initial="initial"
					animate="animate"
				>
					{["university", "class", "students"].map((section) => (
						<motion.button
							key={section}
							variants={fadeInUp}
							onClick={() => setActiveSection(section)}
							className={`px-6 py-3 rounded-full text-lg font-medium transition-all
                ${
									activeSection === section
										? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/10"
										: "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
								}`}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</motion.button>
					))}
				</motion.div>

				{/* Content Sections */}
				<AnimatePresence mode="wait">
					{activeSection === "university" && (
						<motion.div
							key="university"
							initial="initial"
							animate="animate"
							exit="exit"
							variants={fadeInUp}
							className="max-w-4xl mx-auto text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
								Our University
							</h2>
							<div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden shadow-xl">
								<Image
									src="/assets/images/university.jpg"
									alt="University Campus"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
								Our university stands as a beacon of academic excellence and
								innovation. Founded on principles of inclusive education and
								cutting-edge research, we pride ourselves on nurturing the next
								generation of leaders and innovators.
							</p>
							<Link
								href="https://ua.ac.id/"
								className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
							>
								Lebih lanjut tentang Universitas Kami
								<ChevronDown className="w-4 h-4" />
							</Link>
						</motion.div>
					)}

					{activeSection === "class" && (
						<motion.div
							key="class"
							initial="initial"
							animate="animate"
							exit="exit"
							variants={fadeInUp}
							className="max-w-4xl mx-auto text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
								Our Class
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
								<div className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm shadow-lg">
									<h3 className="text-xl font-semibold mb-3">Class Schedule</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Monday - Friday
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										8:00 AM - 4:00 PM
									</p>
								</div>
								<div className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm shadow-lg">
									<h3 className="text-xl font-semibold mb-3">Class Size</h3>
									<p className="text-gray-600 dark:text-gray-300">
										30 Students
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										2 Teaching Assistants
									</p>
								</div>
							</div>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
								Our class environment fosters collaboration and hands-on
								learning, equipped with state-of-the-art facilities and guided
								by experienced faculty members.
							</p>
						</motion.div>
					)}

					{activeSection === "students" && (
						<motion.div
							key="students"
							initial="initial"
							animate="animate"
							exit="exit"
							variants={fadeInUp}
							className="max-w-6xl mx-auto mb-12"
						>
							<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
								Our Students
							</h2>

							<div className="relative min-h-[600px] flex flex-col rounded-xl overflow-hidden shadow-xl">
								{/* Background with Image */}
								<div className="absolute inset-0 z-0">
									<Image
										src={currentSlide.background}
										alt="Background"
										fill
										className="object-cover"
										priority
										sizes="100vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 dark:from-black/80 dark:to-black/60" />
								</div>

								{/* Content */}
								<div className="relative z-10 flex flex-col h-full">
									<div className="flex-grow flex items-center px-4 lg:px-12 py-8">
										<div className="text-center lg:text-left w-full lg:w-1/2">
											<h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
												{currentSlide.name}
											</h3>
											<p className="text-xl sm:text-2xl text-gray-200 mb-8">
												{currentSlide.role}
											</p>
										</div>
									</div>

									{/* Slider */}
									<div className="w-full px-4 lg:px-12">
										<div className="w-full lg:w-1/3 h-[200px] sm:h-[250px] lg:h-[300px] mx-auto lg:ml-0">
											<ImageSlider
												slides={studentSlides}
												onSlideChange={handleSlideChange}
												autoPlayInterval={5000}
												showControls={true}
											/>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
