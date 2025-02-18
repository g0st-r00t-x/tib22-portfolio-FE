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
  showControls = false,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  const goToNext = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

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
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              goToNext();
            } else if (swipe > swipeConfidenceThreshold) {
              goToPrevious();
            }
          }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 
                     bg-white/50 backdrop-blur-sm
                     p-1 sm:p-2 rounded-full 
                     transition-all hover:bg-white/75 
                     focus:outline-none focus:ring-2 focus:ring-white
                     hover:scale-110"
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
                     focus:outline-none focus:ring-2 focus:ring-white
                     hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all
                          ${index === currentIndex ? "bg-white scale-125" : "bg-white/50"} 
                          hover:bg-white focus:outline-none focus:ring-2 focus:ring-white`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}