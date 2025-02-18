import React, { useEffect, useState } from "react";
import {
	Code,
	Wifi,
	Database,
	Cloud,
	Cpu,
	Monitor,
	Star,
	Sparkles,
} from "lucide-react";

const TechAnimation: React.FC = () => {
	const [animationStarted, setAnimationStarted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationStarted(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);

	const techIcons = [Code, Wifi, Database, Cloud, Cpu, Monitor];
	const skyIcons = [Star, Sparkles];

	return (
		<div className="w-full h-full absolute inset-0 pointer-events-none z-0">
			{/* Background Stars */}
			<div className="absolute inset-0">
				{[...Array(200)].map((_, i) => {
					const size = 0.5 + Math.random() * 2.5;
					const animationDuration = 2 + Math.random() * 7;
					const animationDelay = Math.random() * 10;

					return (
						<div
							key={`star-${i}`}
							className="absolute rounded-full bg-white dark:bg-indigo-300"
							style={{
								width: size,
								height: size,
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								opacity: 0,
								animation: `twinkle ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
							}}
						></div>
					);
				})}
			</div>

			{/* Larger Shining Stars */}
			<div className="absolute inset-0">
				{[...Array(25)].map((_, i) => {
					const Icon = skyIcons[i % skyIcons.length];
					const size = 8 + Math.random() * 14;
					const duration = 3 + Math.random() * 7;
					const delay = Math.random() * 10;

					return (
						<div
							key={`shining-star-${i}`}
							className="absolute text-white dark:text-indigo-100"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								opacity: 0,
								filter: `blur(${Math.random() * 1}px)`,
								animation: `
                  shine ${duration}s ease-in-out ${delay}s infinite alternate,
                  glow ${
										duration * 0.8
									}s ease-in-out ${delay}s infinite alternate
                `,
							}}
						>
							<Icon
								size={size}
								strokeWidth={1}
							/>
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

			{/* Shooting Stars */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(5)].map((_, i) => {
					const delay = 5 + i * 5 + Math.random() * 10;
					const duration = 2 + Math.random() * 3;
					const top = Math.random() * 60;
					const left = Math.random() * 100;

					return (
						<div
							key={`shooting-star-${i}`}
							className="absolute h-px bg-white dark:bg-indigo-100 w-16"
							style={{
								top: `${top}%`,
								left: `${left}%`,
								opacity: 0,
								filter: "blur(1px)",
								animation: `shooting ${duration}s linear ${delay}s infinite`,
								transform: "rotate(-45deg)",
							}}
						>
							<div className="absolute right-0 rounded-full w-1 h-1 bg-white dark:bg-indigo-100"></div>
						</div>
					);
				})}
			</div>

			{/* Floating Particles */}
			<div className="absolute inset-0">
				{[...Array(120)].map((_, i) => {
					const delay = Math.random() * 10;
					const duration = 15 + Math.random() * 10;
					const size = 0.5 + Math.random() * 1.5;

					return (
						<div
							key={`particle-${i}`}
							className="absolute bg-indigo-100 dark:bg-indigo-400 rounded-full"
							style={{
								width: size,
								height: size,
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								opacity: 0.05 + Math.random() * 0.2,
								animation: `
                  float ${duration}s linear ${delay}s infinite alternate, 
                  twinkle ${
										3 + Math.random() * 2
									}s ease-in-out ${delay}s infinite alternate
                `,
							}}
						></div>
					);
				})}
			</div>

			{/* CSS Animations */}
			<style
				jsx
				global
			>{`
				@keyframes float {
					0% {
						transform: translate(0, 0);
					}
					100% {
						transform: translate(
							${Math.random() > 0.5 ? "+" : "-"}${5 + Math.random() * 15}px,
							${Math.random() > 0.5 ? "+" : "-"}${5 + Math.random() * 15}px
						);
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

				@keyframes twinkle {
					0% {
						opacity: 0.05;
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

				@keyframes blink {
					0% {
						opacity: 0.1;
					}
					30% {
						opacity: 0.3;
					}
					60% {
						opacity: 0.1;
					}
					100% {
						opacity: 0.3;
					}
				}

				@keyframes shine {
					0% {
						opacity: 0.2;
						transform: scale(0.9);
					}
					50% {
						opacity: 0.7;
					}
					100% {
						opacity: 0.3;
						transform: scale(1.1);
					}
				}

				@keyframes shooting {
					0% {
						opacity: 0;
						transform: translateX(0) translateY(0) rotate(-45deg);
					}
					5% {
						opacity: 0.8;
					}
					20% {
						opacity: 0;
					}
					100% {
						opacity: 0;
						transform: translateX(-200px) translateY(200px) rotate(-45deg);
					}
				}

				@keyframes line-fade {
					0% {
						opacity: 0.1;
					}
					100% {
						opacity: 0.4;
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
			`}</style>
		</div>
	);
};

export default TechAnimation;
