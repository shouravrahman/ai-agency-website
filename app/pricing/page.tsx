"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
	{
		index: 0,
		name: "Starter",
		price: "US $299",
		features: [
			"Initial AI consultation",
			"Basic data analysis",
			"Email support",
			"1-2 days turnaround time",
		],
		style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
		description:
			"Ideal for individuals or small businesses looking to explore AI solutions.",
		button: "Get Started",
	},
	{
		index: 1,
		name: "Professional",
		price: "US $799",
		features: [
			"Comprehensive AI strategy development",
			"Advanced data analysis",
			"Priority email support",
			"3-5 days turnaround time",
		],
		style: "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
		description:
			"Best for businesses ready to implement AI solutions for growth and efficiency.",
		button: "Get Started",
	},
	{
		index: 2,
		name: "Enterprise",
		feature: "Contact Us",
		price: "Let's Talk!",
		features: [
			"Custom AI solutions tailored to your business",
			"Dedicated project manager",
			"Unlimited revisions",
			"24-hour support response time",
			"Priority development queue",
		],
		style: "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
		description:
			"Perfect for large organizations needing comprehensive AI integration and support.",
		button: "Contact Us",
	},
];

const Pricing = () => {
	return (
		<div
			className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased
     bg-grid-white/[0.02] relative overflow-hidden"
		>
			<Navbar
				scrollToAiSolutions={() => {}}
				scrollToMachineLearning={() => {}}
				scrollToBrands={() => {}}
				scrollToAiConsulting={() => {}}
				scrollToServices={() => {}}
			/>

			<div className="flex items-center justify-center flex-col   ">
				<div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
					Simple Pricing <br /> Choose your plan
				</div>
				<div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
					{plans.map((plan, index) => (
						<div
							key={plan.name}
							className="h-full flex flex-col justify-between border rounded-3xl px-6  "
						>
							<div className={plan.style}>
								<div className="text-4xl flex  items-center font-medium">
									{plan.name}
									{/* render feature tag only for enterprise tab*/}
									{plan.feature === "Contact Us" && (
										<div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
											Contact Us
										</div>
									)}
								</div>
								<div className="text-3xl pt-6 ">
									{plan.price}
								</div>
								<div className="py-6">{plan.description}</div>

								<ul>
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="text-lg  py-2 flex space-x-2 items-center"
										>
											{/* render checkmark only for enterprise tab*/}
											{plan.feature === "Contact Us" ? (
												<PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
											) : (
												<PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
											)}

											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className={plan.button}>
								{index === 0 && (
									<Link
										href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
										className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
									>
										Buy Now
									</Link>
								)}
								{index === 1 && (
									<Link
										href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"
										className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
									>
										Buy Now
									</Link>
								)}
								{index === 2 && (
									<Link
										href="/contact"
										className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
									>
										Contact Us
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
