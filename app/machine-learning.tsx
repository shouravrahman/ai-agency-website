"use client";

import { ThreeDCard } from "@/components/3dcard";
import { motion } from "framer-motion";

const cardData = [
	{
		title: "Supervised Learning",
		description:
			"Utilize labeled data to train models for accurate predictions.",
		imageUrl:
         "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
	},
	{
		title: "Unsupervised Learning",
		description:
			"Discover hidden patterns in data without labeled outcomes.",
		imageUrl:
         "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		title: "Reinforcement Learning",
		description:
			"Train models through trial and error to maximize rewards.",
		imageUrl:
         "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
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
                     key={index}
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
