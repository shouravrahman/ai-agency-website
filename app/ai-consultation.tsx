"use client";

import Image from "next/image";

const consultations = [
	{
		image: "/images/image2.png",
		quote: "The AI consultation transformed our approach, making everything clearer and more efficient.",
		name: "Alice Johnson",
	},
	{
		image: "/images/shop-2.jpeg",
		quote: "Thanks to the AI insights, we were able to streamline our processes and achieve remarkable results.",
		name: "Michael Smith",
	},
	{
		image: "/images/s-2.webp",
		quote: "The team provided exceptional guidance, helping us leverage AI to enhance our business strategy.",
		name: "Sophia Brown",
	},
];

const AIConsultation = () => {
	return (
		<section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
			<div className="p-4 mx-auto relative z-10 w-full">
				<div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
					AI Consultation Testimonials <br />
				</div>

				<p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
					We provide expert AI consultation services that drive
					results.
				</p>
				<div className="md:flex items-center justify-center px-10">
					{consultations.map((consultation, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
						>
							<div className="flex flex-col items-center justify-center">
								<Image
									src={consultation.image}
									alt="AI consultation"
									width={400}
									height={400}
									className="rounded-lg mx-auto"
								/>
								<p className="text-neutral-800 font-bold text-lg mt-4 text-center">
									&quot;{consultation.quote}&quot;
								</p>
								<p className="text-neutral-800 font-bold text-lg mt-4">
									- {consultation.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AIConsultation;
