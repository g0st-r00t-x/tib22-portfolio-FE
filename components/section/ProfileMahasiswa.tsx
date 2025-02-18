"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "@/components/ui/ImageSlider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// Student profile slides data
const studentSlides = [
	{
		image: "/assets/images/iqmam.jpg",
		background: "/assets/images/iqmam.jpg",
		name: "Iqmam",
		role: "Behind the Scanes",
	},
	{
		image: "/assets/images/royhan-as.jpg",
		background: "/assets/images/royhan-as.jpg",
		name: "Moh. Royhan AS",
		role: "Full Stack Developer",
	},
	{
		image: "/assets/images/Gambar3.png",
		background: "/assets/images/Gambar3.png",
		name: "Mike Johnson",
		role: "Full Stack Developer",
	},
	{
		image: "/assets/images/Gambar2.jpeg",
		background: "/assets/images/Gambar2.jpeg",
		name: "Emily Brown",
		role: "Graphic Designer",
	},
];


const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -60, transition: { duration: 0.4, ease: 'easeIn' } }
};

const staggerChildrenVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-blue-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out pb-12" id="profile">
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
							className="max-w-5xl mx-auto text-center px-4 my-20"
						>
							<motion.div
								key="university"
								initial="initial"
								animate="animate"
								exit="exit"
								variants={fadeInUp}
								className="max-w-7xl mx-auto px-4 my-20"
							>
								<motion.h2
									variants={itemVariants}
									className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text text-center"
								>
									Universitas Kami
								</motion.h2>
							</motion.div>

							<motion.div
									variants={itemVariants}
									className="relative w-full h-[400px] mb-16 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
								>
									<Image
										src="/assets/images/university.jpg"
										alt="University Campus"
										objectFit="cover"
										fill
										className="object-cover transform transition-transform duration-1000 hover:scale-105"
										priority
									/>
							</motion.div>

							<motion.p
								variants={itemVariants}
								className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
							>
								Visi keilmuan Annuqayah yang juga diilhami oleh salah satu kitab
								karya Jalaluddin Assuyuthi yang berjudul Itmam al-Dirayah
								li-Qurra&apos; al-Nuqayah ini mendorong munculnya upaya pengembangan
								dan pembaruan pendidikan di berbagai aspek, termasuk
								kelembagaan.
							</motion.p>

							<motion.div
								variants={staggerChildrenVariants}
								className="space-y-16 mb-16"
							>
								{/* Visi Section */}
								<motion.div
									variants={itemVariants}
									className="max-w-3xl mx-auto"
								>
									<h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
										VISI
									</h3>
									<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
										<p className="text-gray-700 dark:text-gray-300 text-lg">
											Menjadi pusat pengembangan sains dan teknologi berbasis
											nilai-nilai pesantren untuk kemajuan Islam Ahlussunnah wal
											Jama&Apos;ah dan kemaslahatan bangsa pada tahun 2025
										</p>
									</div>
								</motion.div>

								{/* Misi Section */}
								<motion.div
									variants={itemVariants}
									className="max-w-3xl mx-auto"
								>
									<h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
										MISI
									</h3>
									<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
										<ol className="text-gray-700 dark:text-gray-300 text-lg text-left list-decimal pl-6 space-y-4">
											<li>
												Menyelenggarakan pendidikan dan pengajaran baik teori
												maupun praktik dengan muatan kurikulum untuk mewujudkan
												penguasaan sains dan teknologi berlandaskan nilai-nilai
												pesantren.
											</li>
											<li>
												Melaksanakan penelitian yang berorientasi pada
												pengembangan sains dan teknologi berlandaskan
												nilai-nilai pesantren.
											</li>
											<li>
												Melakukan pengabdian kepada masyarakat dalam
												pengembangan sains dan teknologi berlandaskan
												nilai-nilai pesantren untuk kemaslahatan bangsa.
											</li>
											<li>
												Menjalin kerjasama dengan institusi dalam dan luar
												negeri dalam penguatan pengembangan sains dan teknologi
												yang berlandaskan nilai-nilai pesantren.
											</li>
										</ol>
									</div>
								</motion.div>

								{/* Tujuan Section */}
								<motion.div
									variants={itemVariants}
									className="max-w-3xl mx-auto"
								>
									<h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
										TUJUAN
									</h3>
									<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
										<ol className="text-gray-700 dark:text-gray-300 text-lg text-left list-decimal pl-6 space-y-4">
											<li>
												Terselenggaranya pendidikan dan pengajaran baik teori
												maupun praktik dengan muatan kurikulum untuk mewujudkan
												penguasaan sains dan teknologi berlandaskan nilai-nilai
												pesantren yang mengarah pada isu lingkungan hidup.
											</li>
											<li>
												Terlaksananya penelitian yang berorientasi pada
												pengembangan sains dan teknologi berlandaskan
												nilai-nilai pesantren.
											</li>
											<li>
												Terwujudnya pengabdian kepada masyarakat dalam
												pengembangan sains dan teknologi berlandaskan
												nilai-nilai pesantren untuk kemaslahatan bangsa.
											</li>
											<li>
												Terjalinnya kerjasama dengan institusi dalam dan luar
												negeri dalam penguatan pengembangan sains dan teknologi
												yang berlandaskan nilai-nilai pesantren.
											</li>
										</ol>
									</div>
								</motion.div>
							</motion.div>

							<motion.div variants={itemVariants}>
								<Link
									href="https://ua.ac.id/"
									className="inline-flex items-center gap-2 px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
								>
									Lebih lanjut tentang Universitas Kami
									<ChevronRight className="w-5 h-5" />
								</Link>
							</motion.div>
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
								Kelas Kami
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
								Para Mahasiswa
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
										<div className="w-40 mt-40 md:mt-0 md:w-1/3 h-[200px] sm:h-[250px] lg:h-[300px] lg:ml-0">
											<ImageSlider
												slides={studentSlides}
												onSlideChange={handleSlideChange}
												autoPlayInterval={5000}
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
