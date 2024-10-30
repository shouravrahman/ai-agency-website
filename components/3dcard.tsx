"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Card {
	title: string;
	description: string;
	imageUrl: string;
}

export function ThreeDCard({ title, description, imageUrl }: Card) {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative border w-auto sm:w-[30rem] h-auto rounded-xl p-6">
				<CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
					{title}
				</CardItem>
				<CardItem
					as="p"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{description}
				</CardItem>
				<CardItem className="w-full mt-4">
					<Image
						src={imageUrl}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						as="button"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Try now →
					</CardItem>
					<CardItem
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Sign up
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
