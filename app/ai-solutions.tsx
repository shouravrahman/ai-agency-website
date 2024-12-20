"use client";

import Image from "next/image";

const AISolutions = () => {
	return (
		<div className="text-white">
			<div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
				<div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
               Empower Your Business with <br />AI-Driven Innovation
				</div>
				<p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
               Your business deserves more than just solutions—it needs a partner in transformation.


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
                     src="/images/rb.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/vr.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/vr3.webp"
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
                     src="/images/vr2.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai6.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai4.webp"
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
                     src="https://images.unsplash.com/photo-1710993011875-38d2f3ecf0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFpfGVufDB8fDB8fHww"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ml.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="https://images.unsplash.com/photo-1677691824188-3e266886cb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFpfGVufDB8fDB8fHww"
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
                     src="https://images.unsplash.com/photo-1710993011776-b0cf571c7196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFpfGVufDB8fDB8fHww"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/ai.webp"
							alt=""
						/>
					</div>
					<div>
						<Image
							width={500}
							height={500}
							priority
							className="h-auto max-w-full rounded-lg"
                     src="/images/rb2.webp"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AISolutions;
