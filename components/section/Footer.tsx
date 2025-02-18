"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

// Animation variants
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Navigation links
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

// Social media links
const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Footer() {
	const [isMounted, setIsMounted] = useState(false);
	const year= new Date().getFullYear();
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	if (!isMounted) {
		return null;
	}

	return (
		<footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
			{/* Main footer */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={footerVariants}
				className="container mx-auto px-4 pt-16 pb-8"
			>
				{/* Top section */}
				<div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
					{/* Logo and description */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-2"
					>
						<div className="flex items-center gap-3 mb-5">
							<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-400/20 dark:shadow-blue-700/30">
								<span className="text-white text-xl font-bold">E</span>
							</div>
							<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
								EduConnect
							</span>
						</div>
						<p className="text-gray-600 dark:text-gray-400 mb-6">
							Empowering students with innovative educational resources and
							connecting them with opportunities in the tech industry.
						</p>
						<button
							onClick={toggleTheme}
							className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							{theme === "dark" ? (
								<>
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									Switch to Light Mode
								</>
							) : (
								<>
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
									Switch to Dark Mode
								</>
							)}
						</button>
					</motion.div>

					{/* Navigation */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Navigation
						</h3>
						<ul className="space-y-3">
							{navigationLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Additional links */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Resources
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/blog"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="/support"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Support
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="/partners"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Partners
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Legal */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Legal
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/privacy"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/cookies"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									href="/accessibility"
									className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								>
									Accessibility
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Newsletter */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Stay Updated
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
							Subscribe to our newsletter to get the latest updates and news.
						</p>
						<form className="space-y-3">
							<div>
								<input
									type="email"
									placeholder="Your email address"
									className="w-full px-3 py-2 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
								/>
							</div>
							<button
								type="submit"
								className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-200 inline-flex items-center"
							>
								Subscribe
								<svg
									className="w-4 h-4 ml-2"
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
						</form>
					</motion.div>
				</div>

				{/* Bottom section */}
				<div className="pt-8 border-t border-gray-200 dark:border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<motion.div
							variants={itemVariants}
							className="mb-4 md:mb-0"
						>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								&copy; {year} EduConnect. All rights reserved.
							</p>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="flex items-center space-x-4"
						>
							{socialLinks.map((item) => (
								<a
									key={item.name}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
									aria-label={`${item.name} profile`}
								>
									{item.icon}
								</a>
							))}
						</motion.div>
					</div>
				</div>
			</motion.div>
		</footer>
	);
}