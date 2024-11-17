"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";

export function AppleCarousel() {
	const cards = data.map((card, index) => (
		<Card
			key={card.src}
			card={card}
			index={index}
		/>
	));

	return (
		<div className="w-full h-full py-20">
			<h2
				className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
			>
				Explore Our AI Solutions
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={"dummy-content" + index}
						className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								Unlock the potential of AI in your business.
							</span>{" "}
							Our tailored AI solutions help you streamline
							operations, enhance decision-making, and drive
							growth.
						</p>
						<Image
                     src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpJTIwcHJvZHVjdCUyMG1vY2t1cCU1QnxlbnwwfHwwfHx8MA%3D%3D"
							alt="AI solutions mockup"
							height="500"
							width="500"
							className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
						/>
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: "AI Consultation",
		title: "Expert AI Consultation Services",
      src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
		content: <DummyContent />,
	},
	{
		category: "Machine Learning",
		title: "Custom Machine Learning Solutions",
      src: "https://images.unsplash.com/photo-1508882100003-8ae16a4abbaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
		content: <DummyContent />,
	},
	{
		category: "Data Analytics",
		title: "Transform Data into Insights",
      src: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "AI Strategy",
		title: "Develop Your AI Strategy",
      src: "https://images.unsplash.com/photo-1531837763904-5d3cb2632ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Automation",
		title: "Streamline Your Workflows",
      src: "https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Training",
		title: "AI Training Workshops",
      src: "https://images.unsplash.com/photo-1717502085413-478382daf23f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
		content: <DummyContent />,
	},
];
