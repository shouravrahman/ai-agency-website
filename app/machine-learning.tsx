"use client";

import { ThreeDCard } from "@/components/3dcard";
import { motion } from "framer-motion";

const cardData = [
	{
		title: "Supervised Learning",
		description:
			"Utilize labeled data to train models for accurate predictions.",
		imageUrl:
			"https://images.unsplash.com/photo-1517242022020-3f3c1c1c1c1c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
	},
	{
		title: "Unsupervised Learning",
		description:
			"Discover hidden patterns in data without labeled outcomes.",
		imageUrl:
			"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
	},
	{
		title: "Reinforcement Learning",
		description:
			"Train models through trial and error to maximize rewards.",
		imageUrl:
			"https://images.unsplash.com/photo-1517242022020-3f3c1c1c1c1c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
	},
];

const MachineLearning = () => {
	return (
		<div>
			<div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
				<div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
					Unlock the Power of Machine Learning
				</div>

				<p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
					Explore innovative machine learning solutions tailored to
					your business needs. Our expertise will help you harness the
					power of data.
				</p>
				<div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
					{cardData.map((card, index) => (
						<ThreeDCard
							title={card.title}
							description={card.description}
							imageUrl={card.imageUrl}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MachineLearning;
