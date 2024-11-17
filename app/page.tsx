"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

import Brands from "./brands";
import Services from "./service";
import FAQS from "./faq";
import { AppleCarousel } from "@/components/carousel";
import AISolutions from "./ai-solutions";
import MachineLearning from "./machine-learning";
import AIConsultation from "./ai-consultation";

export default function Home() {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};
	const closeDropdown = () => {
		setDropdownVisible(false);
	};

	const aiSolutionsRef = useRef<HTMLDivElement>(null);
	const machineLearningRef = useRef<HTMLDivElement>(null);
	const dataAnalyticsRef = useRef<HTMLDivElement>(null);
	const aiConsultingRef = useRef<HTMLDivElement>(null);
	const brandsRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLDivElement>(null);

	const scrollToAiSolutions = () => {
		// Updated function name
		aiSolutionsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};

	const scrollToMachineLearning = () => {
		// Updated function name
		machineLearningRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToBrands = () => {
		// Updated function name
		brandsRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToAiConsulting = () => {
		// Updated function name
		aiConsultingRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// const scrollToBrands = () => {
	// 	brandsRef.current?.scrollIntoView({ behavior: "smooth" });
	// };

	// Function to scroll to Services section
	const scrollToServices = () => {
		servicesRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Navbar
				scrollToAiSolutions={scrollToAiSolutions}
				scrollToMachineLearning={scrollToMachineLearning}
				scrollToBrands={scrollToBrands}
				scrollToAiConsulting={scrollToAiConsulting}
				scrollToServices={scrollToServices}
			/>

			<Spotlight
				className="hidden md:flex md:-top-80 left-80  "
				fill="white"
			/>
			<div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
				<div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
					Innovate, automate, and <br /> elevate your AI solutions
				</div>
				<p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
					Tailored AI solutions for your needs. Our expert team is
					dedicated to transforming your ideas into reality.
				</p>

				<Link
					href={"/book"}
					className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
				>
					Book a call
				</Link>

				<div className="w-full pt-20">
					<SliderOne />
				</div>

            <div
               id="services"
               ref={servicesRef}
            >
               <Services />
            </div>
				<div ref={aiSolutionsRef}>
					<AISolutions />
				</div>


				<div ref={machineLearningRef}>
					<MachineLearning />
				</div>

				<div ref={aiConsultingRef}>
					<AIConsultation />
				</div>
				<div ref={brandsRef}>
					<Brands />
				</div>

				<AppleCarousel />
				<FAQS />
			</div>
		</div>
	);
}
