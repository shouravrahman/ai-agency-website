"use client";

import Image from "next/image";

const AISolutions = () => {
	return (
		<div className="text-white">
			<div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
				<div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
					Transform Your Business <br /> with AI Solutions
				</div>
				<p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
					We provide cutting-edge AI solutions tailored to your
					business needs. Our team of experts is here to help you
					innovate and grow.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
				<div className="grid gap-4">
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/rb.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/vr.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/vr3.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/vr2.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai6.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai4.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ml.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
							src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai.jpg"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/rb2.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AISolutions;
