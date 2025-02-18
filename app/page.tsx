"use client";

import About from "@/components/section/About";
import ContactFormSection from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import GallerySection from "@/components/section/Gallery";
import Hero from "@/components/section/Hero";
import ProfileSection from "@/components/section/ProfileMahasiswa";
import ProjectsGrid from "@/components/section/Projects";
import SupportedBy from "@/components/section/SupportedBy";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
	return (
    <>
    <Navbar/>
		<Hero/>
    <About/>
    <ProfileSection/>
    <GallerySection/>
    <ProjectsGrid/>
    <SupportedBy/>
    <ContactFormSection/>
    <Footer/>
    </>
	);
}
