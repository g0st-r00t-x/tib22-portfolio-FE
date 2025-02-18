"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
	image: string;
	background: string;
	name: string;
	role: string;
};

type ImageSliderProps = {
	slides: Slide[];
	onSlideChange?: (slide: Slide) => void;
	autoPlayInterval?: number;
	showControls?: boolean;
};

export default function ImageSlider({
	slides,
	onSlideChange,
	autoPlayInterval = 5000,
	showControls = true,
}: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	// const [isMobile, setIsMobile] = useState(false);

	// // Check for mobile viewport
	// useEffect(() => {
	// 	const checkMobile = () => {
	// 		setIsMobile(window.innerWidth < 768);
	// 	};

	// 	checkMobile();
	// 	window.addEventListener("resize", checkMobile);
	// 	return () => window.removeEventListener("resize", checkMobile);
	// }, []);

	const goToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	const goToPrevious = useCallback(() => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + slides.length) % slides.length
		);
	}, [slides.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	}, [slides.length]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				goToPrevious();
			} else if (event.key === "ArrowRight") {
				goToNext();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [goToPrevious, goToNext]);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(goToNext, autoPlayInterval);
		return () => clearInterval(interval);
	}, [isAutoPlaying, autoPlayInterval, goToNext]);

	useEffect(() => {
		onSlideChange?.(slides[currentIndex]);
	}, [currentIndex, onSlideChange, slides]);

	return (
		<div
			className="relative w-full h-full overflow-hidden rounded-lg shadow-xl"
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			<AnimatePresence mode="wait">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.5 }}
					className="absolute inset-0"
				>
					<Image
						src={slides[currentIndex].image}
						alt={`Project of ${slides[currentIndex].name}`}
						fill
						className="object-cover"
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					{/* Mobile-optimized overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
						<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
							<h3 className="text-lg sm:text-xl font-bold text-white mb-1">
								{slides[currentIndex].name}
							</h3>
							<p className="text-sm sm:text-md text-gray-200">
								{slides[currentIndex].role}
							</p>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			{showControls && (
				<>
					{/* Responsive navigation buttons */}
					<button
						onClick={goToPrevious}
						className="absolute left-2 top-1/2 transform -translate-y-1/2 
                     bg-white/50 backdrop-blur-sm
                     p-1 sm:p-2 rounded-full 
                     transition-all hover:bg-white/75 
                     focus:outline-none focus:ring-2 focus:ring-white"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
					</button>
					<button
						onClick={goToNext}
						className="absolute right-2 top-1/2 transform -translate-y-1/2 
                     bg-white/50 backdrop-blur-sm
                     p-1 sm:p-2 rounded-full 
                     transition-all hover:bg-white/75 
                     focus:outline-none focus:ring-2 focus:ring-white"
						aria-label="Next slide"
					>
						<ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
					</button>

					{/* Responsive indicators */}
					<div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-1.5 sm:space-x-2">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all
                          ${
														index === currentIndex
															? "bg-white scale-125"
															: "bg-white/50"
													} hover:bg-white focus:outline-none focus:ring-2 focus:ring-white`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
