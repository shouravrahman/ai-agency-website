"use client";

import { ServiceCards } from "@/components/servicecard";

const Services = () => {
	return (
		<div className="max-w-5xl mx-auto py-20">
			<div
				className="text-4xl pb-5 md:text-7xl text-center
     bg-clip-text text-transparent bg-gradient-to-b
      from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
			>
				Transform Your Business with AI Solutions
			</div>
			<p
				className="mt-4 text-lg font-normal
      text-neutral-300 max-w-lg
      text-center mx-auto"
			>
				Our expert AI consultation services empower your business to
				leverage cutting-edge technologies, from data analytics to
				machine learning, ensuring sustainable growth and efficiency.
			</p>

			<ServiceCards />
		</div>
	);
};

export default Services;
