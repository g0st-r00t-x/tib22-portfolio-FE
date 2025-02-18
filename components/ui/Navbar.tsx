"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "./button";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const { theme, setTheme } = useTheme();
	const { scrollY } = useScroll();
	const [mounted, setMounted] = useState(false);

	// Set mounted to true after component mounts
	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous !== undefined && latest > previous && latest > 150) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	});

	const navVariants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -25 },
	};

	return (
		<motion.nav
			variants={navVariants}
			animate={isVisible ? "visible" : "hidden"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/20 backdrop-blur-md shadow-lg"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
							<Link
								href="/"
								className="text-xl font-bold text-gray-800 dark:text-white bg-transparent hover:bg-transparent"
							>
								TI-B22
							</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/about">About Us</NavLink>
							<NavLink href="/gallery">Gallery</NavLink>
							<NavLink href="/projects">Projects</NavLink>
							<NavLink href="/profile">Profile</NavLink>
						</div>
					</div>
					<div className="flex items-center">
						<Button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-full w-10 h-10 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
						>
							{mounted && (
								<>
									{theme === "dark" ? (
										<Sun className="h-6 w-6 text-black" />
									) : (
										<Moon className="h-6 w-6" />
									)}
								</>
							)}
						</Button>
						<div className="md:hidden ml-2">
							<Button
								onClick={toggleMenu}
								className="justify-center rounded-full h-10 w-10 dark:text-black text-white hover:text-gray-500 dark:hover:text-gray-800"
							>
								{isOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
						<MobileNavLink
							href="/"
							toggleMenu={toggleMenu}
						>
							Home
						</MobileNavLink>
						<MobileNavLink
							href="/about"
							toggleMenu={toggleMenu}
						>
							About Us
						</MobileNavLink>
						<MobileNavLink
							href="/gallery"
							toggleMenu={toggleMenu}
						>
							Gallery
						</MobileNavLink>
						<MobileNavLink
							href="/projects"
							toggleMenu={toggleMenu}
						>
							Projects
						</MobileNavLink>
						<MobileNavLink
							href="/profile"
							toggleMenu={toggleMenu}
						>
							Profile
						</MobileNavLink>
					</div>
				</div>
			)}
		</motion.nav>
	);
};

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
	toggleMenu: () => void;
}

const NavLink = ({ href, children }: NavLinkProps) => (
	<Link
		href={href}
		className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
	>
		{children}
	</Link>
);

const MobileNavLink = ({ href, children, toggleMenu }: MobileNavLinkProps) => (
	<Link
		href={href}
		className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
		onClick={toggleMenu}
	>
		{children}
	</Link>
);

export default Navbar;
