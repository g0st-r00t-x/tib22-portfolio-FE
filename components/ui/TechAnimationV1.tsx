import React, { useEffect, useState } from "react";
import {
	Code,
	Wifi,
	Database,
	Cloud,
	Cpu,
	Monitor,
	Server,
	Globe,
	HardDrive,
	Laptop,
} from "lucide-react";

const TechAnimationV1: React.FC = () => {
	const [animationStarted, setAnimationStarted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationStarted(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	const techIcons = [
		Code,
		Wifi,
		Database,
		Cloud,
		Cpu,
		Monitor,
		Server,
		Globe,
		HardDrive,
		Laptop,
	];


	return (
		<div className="w-full h-full absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-blue-900 to-indigo-950 dark:from-black dark:to-indigo-950 opacity-80">
			{/* Moving Stars Background - Horizontal Parallax Effect */}
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute inset-0"
					style={{ animation: "move-stars-slow 120s linear infinite" }}
				>
					{[...Array(150)].map((_, i) => {
						const size = 0.5 + Math.random() * 2;
						const animationDuration = 2 + Math.random() * 5;
						const animationDelay = Math.random() * 10;

						return (
							<div
								key={`slow-star-${i}`}
								className="absolute rounded-full bg-white dark:bg-indigo-200"
								style={{
									width: size,
									height: size,
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									opacity: 0.1 + Math.random() * 0.3,
									animation: `twinkle ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
								}}
							></div>
						);
					})}
				</div>

				<div
					className="absolute inset-0"
					style={{ animation: "move-stars-medium 80s linear infinite" }}
				>
					{[...Array(100)].map((_, i) => {
						const size = 1 + Math.random() * 2;
						const animationDuration = 2 + Math.random() * 4;
						const animationDelay = Math.random() * 8;

						return (
							<div
								key={`medium-star-${i}`}
								className="absolute rounded-full bg-white dark:bg-indigo-100"
								style={{
									width: size,
									height: size,
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									opacity: 0.2 + Math.random() * 0.4,
									animation: `twinkle ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
								}}
							></div>
						);
					})}
				</div>

				<div
					className="absolute inset-0"
					style={{ animation: "move-stars-fast 60s linear infinite" }}
				>
					{[...Array(50)].map((_, i) => {
						const size = 1.5 + Math.random() * 2.5;
						const animationDuration = 1.5 + Math.random() * 3;
						const animationDelay = Math.random() * 6;

						return (
							<div
								key={`fast-star-${i}`}
								className="absolute rounded-full bg-white dark:bg-indigo-50"
								style={{
									width: size,
									height: size,
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									opacity: 0.3 + Math.random() * 0.5,
									animation: `twinkle ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
								}}
							></div>
						);
					})}
				</div>
			</div>

			{/* Moving Tech Particles - Vertical Movement */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(15)].map((_, i) => {
					const duration = 30 + Math.random() * 40;
					const delay = Math.random() * 20;
					const size = 3 + Math.random() * 6;
					const leftPos = Math.random() * 100;

					return (
						<div
							key={`data-stream-${i}`}
							className="absolute"
							style={{
								left: `${leftPos}%`,
								top: "-20px",
								opacity: 0.1 + Math.random() * 0.3,
								animation: `data-stream ${duration}s linear ${delay}s infinite`,
							}}
						>
							<div className="flex flex-col items-center space-y-10">
								{[...Array(Math.floor(5 + Math.random() * 10))].map((_, j) => (
									<div
										key={`data-bit-${i}-${j}`}
										className="rounded-full bg-blue-400 dark:bg-indigo-400"
										style={{
											width: size,
											height: size,
											opacity: 0.5 + Math.random() * 0.5,
											animation: `pulse ${2 + Math.random() * 3}s ease-in-out ${
												Math.random() * 2
											}s infinite alternate`,
										}}
									></div>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* Larger Moving Tech Icons */}
			<div
				className={`transition-opacity duration-1000 ${
					animationStarted ? "opacity-100" : "opacity-0"
				}`}
			>
				{[...Array(8)].map((_, i) => {
					const Icon = techIcons[i % techIcons.length];
					const size = 24 + Math.random() * 16;
					const duration = 50 + Math.random() * 30;
					const delay = i * 4;
					const leftPos = Math.random() * 100;

					return (
						<div
							key={`moving-tech-${i}`}
							className="absolute"
							style={{
								left: `${leftPos}%`,
								top: "-50px",
								opacity: 0.2 + Math.random() * 0.4,
								animation: `tech-float ${duration}s linear ${delay}s infinite`,
							}}
						>
							<div
								className="relative"
								style={{
									animation: `spin ${20 + Math.random() * 30}s linear infinite`,
								}}
							>
								<Icon
									size={size}
									className="text-indigo-400 dark:text-indigo-300"
									style={{
										animation: `blink ${
											4 + Math.random() * 4
										}s ease-in-out infinite alternate`,
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>

			{/* Floating Orbital System */}
			<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div
					className={`transition-all duration-1000 delay-500 ${
						animationStarted ? "scale-100 opacity-100" : "scale-0 opacity-0"
					}`}
				>
					{/* Orbital Rings */}
					{[...Array(3)].map((_, i) => (
						<div
							key={`orbital-ring-${i}`}
							className="absolute top-1/2 left-1/2 rounded-full border border-indigo-400 dark:border-indigo-500 opacity-20"
							style={{
								width: `${180 + i * 70}px`,
								height: `${180 + i * 70}px`,
								marginLeft: `-${(180 + i * 70) / 2}px`,
								marginTop: `-${(180 + i * 70) / 2}px`,
								borderWidth: "1px",
								animation: `spin-ring ${30 + i * 10}s linear infinite ${
									i % 2 === 0 ? "" : "reverse"
								}`,
							}}
						></div>
					))}

					{/* Orbiting Tech Icons */}
					{techIcons.slice(0, 6).map((Icon, i) => {
						const angle = (i * 60) % 360;
						const orbitDuration = 20 + i * 5;
						const orbitRadius = 90 + (i % 3) * 35;
						const iconSize = 22 + Math.random() * 8;

						return (
							<div
								key={`orbiting-icon-${i}`}
								className="absolute top-1/2 left-1/2"
								style={{
									marginLeft: "-14px",
									marginTop: "-14px",
									animation: `orbit ${orbitDuration}s linear infinite ${
										i % 2 === 0 ? "" : "reverse"
									}`,
								}}
							>
								<div
									className="absolute"
									style={{
										transformOrigin: "center",
										transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
									}}
								>
									<Icon
										size={iconSize}
										className="text-indigo-500 dark:text-indigo-400"
										style={{
											animation: `pulse ${
												4 + Math.random() * 2
											}s ease-in-out infinite alternate`,
										}}
									/>
								</div>
							</div>
						);
					})}

					{/* Central Core */}
					<div className="w-28 h-28 bg-indigo-500 bg-opacity-5 dark:bg-opacity-10 rounded-full border border-indigo-300 dark:border-indigo-500 flex items-center justify-center">
						<div className="w-20 h-20 bg-indigo-400 bg-opacity-10 dark:bg-opacity-15 rounded-full flex items-center justify-center animate-ping">
							<div className="w-14 h-14 bg-indigo-500 dark:bg-indigo-400 bg-opacity-20 dark:bg-opacity-30 rounded-full animate-pulse"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Moving Shooting Stars */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(8)].map((_, i) => {
					const delay = 3 + i * 4 + Math.random() * 6;
					const duration = 1.5 + Math.random() * 1;
					const top = Math.random() * 70;
					const left = 100 + Math.random() * 20; // Start from outside right edge
					const width = 40 + Math.random() * 60;

					return (
						<div
							key={`shooting-star-${i}`}
							className="absolute h-px bg-white dark:bg-indigo-100"
							style={{
								top: `${top}%`,
								left: `${left}%`,
								width: `${width}px`,
								opacity: 0,
								filter: "blur(1px)",
								animation: `shooting-rtl ${duration}s linear ${delay}s infinite`,
								transform: "rotate(15deg)",
							}}
						>
							<div className="absolute right-0 rounded-full w-1 h-1 bg-white dark:bg-indigo-100"></div>
						</div>
					);
				})}
			</div>

			{/* CSS Animations */}
			<style
				jsx
				global
			>{`
				@keyframes move-stars-slow {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				@keyframes move-stars-medium {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				@keyframes move-stars-fast {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				@keyframes twinkle {
					0% {
						opacity: 0.1;
						transform: scale(0.8);
					}
					50% {
						opacity: 0.4;
					}
					100% {
						opacity: 0.2;
						transform: scale(1.2);
					}
				}

				@keyframes pulse {
					0% {
						opacity: 0.3;
						filter: blur(0px);
					}
					100% {
						opacity: 0.8;
						filter: blur(1px);
					}
				}

				@keyframes blink {
					0% {
						opacity: 0.1;
					}
					30% {
						opacity: 0.4;
					}
					70% {
						opacity: 0.2;
					}
					100% {
						opacity: 0.5;
					}
				}

				@keyframes data-stream {
					0% {
						transform: translateY(-20px);
						opacity: 0;
					}
					5% {
						opacity: 0.2;
					}
					95% {
						opacity: 0.2;
					}
					100% {
						transform: translateY(calc(100vh + 50px));
						opacity: 0;
					}
				}

				@keyframes tech-float {
					0% {
						transform: translateY(-50px) translateX(0);
						opacity: 0;
					}
					5% {
						opacity: 0.3;
					}
					95% {
						opacity: 0.3;
					}
					100% {
						transform: translateY(calc(100vh + 50px))
							translateX(
								${Math.random() > 0.5 ? "" : "-"}${Math.random() * 200}px
							);
						opacity: 0;
					}
				}

				@keyframes shooting-rtl {
					0% {
						opacity: 0;
						transform: translateX(0) translateY(0) rotate(15deg);
					}
					10% {
						opacity: 0.8;
					}
					30% {
						opacity: 0;
					}
					100% {
						opacity: 0;
						transform: translateX(-400px) translateY(50px) rotate(15deg);
					}
				}

				@keyframes orbit {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				@keyframes spin-ring {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};

export default TechAnimationV1;
