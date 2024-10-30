import { HoverEffect } from "./ui/card-hover-effect";

export function ServiceCards() {
	return (
		<div className="max-w-5xl mx-auto px-8">
			<HoverEffect items={projects} />
		</div>
	);
}

export const projects = [
	{
		title: "AI Consultation",
		description:
			"Expert guidance to help you leverage AI technologies for your business needs.",
		link: "https://your-ai-consultation-link.com",
	},
	{
		title: "Machine Learning Solutions",
		description:
			"Custom machine learning models tailored to enhance your business processes.",
		link: "https://your-machine-learning-link.com",
	},
	{
		title: "Data Analytics Services",
		description:
			"Transform your data into actionable insights with our advanced analytics services.",
		link: "https://your-data-analytics-link.com",
	},
	{
		title: "AI Strategy Development",
		description:
			"Comprehensive strategies to integrate AI into your business operations effectively.",
		link: "https://your-ai-strategy-link.com",
	},
	{
		title: "Automation Solutions",
		description:
			"Streamline your workflows and increase efficiency with our automation services.",
		link: "https://your-automation-link.com",
	},
	{
		title: "AI Training Workshops",
		description:
			"Hands-on workshops to equip your team with the skills needed to implement AI solutions.",
		link: "https://your-ai-training-link.com",
	},
];
