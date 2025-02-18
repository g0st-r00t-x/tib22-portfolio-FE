"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUpVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const formItemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function ContactFormSection() {
	const [isMounted, setIsMounted] = useState(false);
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSuccess(false);
			}, 5000);
		}, 1500);
	};

	if (!isMounted) {
		return null;
	}

	return (
		<section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-4">
				{/* Section heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={fadeInUpVariants}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
						Get In Touch
					</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
						Have a question or ready to collaborate? Reach out to our team and
						we&apos;ll get back to you soon.
					</p>
				</motion.div>

				{/* Contact form */}
				<div className="max-w-3xl mx-auto">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={fadeInUpVariants}
						className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12"
					>
						{isSuccess ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="text-center py-10"
							>
								<div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										className="w-10 h-10 text-green-600 dark:text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
									Message Sent!
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Thank you for reaching out. We&apos;ll get back to you as soon
									as possible.
								</p>
							</motion.div>
						) : (
							<form
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								<motion.div
									variants={formItemVariants}
									className="grid grid-cols-1 md:grid-cols-2 gap-6"
								>
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300"
										>
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formState.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
											placeholder="John Doe"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300"
										>
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
											placeholder="you@example.com"
										/>
									</div>
								</motion.div>

								<motion.div
									variants={formItemVariants}
									className="space-y-2"
								>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
										placeholder="How can we help you?"
									/>
								</motion.div>

								<motion.div
									variants={formItemVariants}
									className="space-y-2"
								>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Your Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										value={formState.message}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 transition-all duration-200"
										placeholder="Write your message here..."
									></textarea>
								</motion.div>

								<motion.div
									variants={formItemVariants}
									className="pt-2"
								>
									<motion.button
										whileHover={{
											scale: 1.02,
											boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)",
										}}
										whileTap={{ scale: 0.98 }}
										disabled={isSubmitting}
										type="submit"
										className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/10 transition-all duration-300 flex items-center justify-center disabled:opacity-70"
									>
										{isSubmitting ? (
											<>
												<svg
													className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Sending...
											</>
										) : (
											<>
												Send Message
												<svg
													className="w-5 h-5 ml-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M13 7l5 5m0 0l-5 5m5-5H6"
													/>
												</svg>
											</>
										)}
									</motion.button>
								</motion.div>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
