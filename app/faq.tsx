import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What is AI Consultation?",
		answer: "AI Consultation involves expert guidance to help businesses leverage AI technologies for their specific needs.",
	},
	{
		question: "How can I get started with AI solutions?",
		answer: "You can start by reaching out to us through our contact form. We will respond within 24 hours to discuss your needs.",
	},
	{
		question: "What are the pricing options?",
		answer: "We offer custom pricing based on the specific services you require. Please contact us for a detailed quote.",
	},
	{
		question: "What kind of support do you provide?",
		answer: "We provide support Monday through Friday for all our clients, ensuring you have assistance when you need it.",
	},
];

const FAQS = () => {
	return (
		<div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
			<div className="p-10 md:p-4 md:px-20">
				<div className="text-3xl md:text-7xl font-bold text-black">
					Have questions?
				</div>
				<div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
					Get answers.
				</div>
				<Accordion
					type="single"
					collapsible
				>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index + 1}`}
						>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQS;
