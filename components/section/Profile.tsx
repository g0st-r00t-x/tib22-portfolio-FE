"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const students = [
	{
		name: "John Doe",
		role: "Frontend Developer",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		name: "Jane Smith",
		role: "Backend Developer",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		name: "Mike Johnson",
		role: "UI/UX Designer",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		name: "Emily Brown",
		role: "Data Scientist",
		image: "/placeholder.svg?height=200&width=200",
	},
];

export default function Profile() {
	useEffect(() => {
		// Initialize AOS
		import("aos").then((AOS) => {
			AOS.default.init({
				duration: 1000,
				once: true,
			});
		});
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1
					className="text-4xl font-bold text-center mb-12"
					data-aos="fade-down"
				>
					Student Profiles
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{students.map((student, index) => (
						<Card
							key={index}
							data-aos="flip-left"
							data-aos-delay={index * 100}
						>
							<CardHeader>
								<Image
									src={student.image || "/placeholder.svg"}
									alt={student.name}
									width={200}
									height={200}
									className="rounded-full mx-auto"
								/>
							</CardHeader>
							<CardContent className="text-center">
								<CardTitle className="mb-2">{student.name}</CardTitle>
								<p className="text-gray-600">{student.role}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
