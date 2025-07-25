import React from "react";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
	return (
		<div
			className={`w-[360px] lg:w-[30%] ${
				cardData.heading === currentCard
					? "bg-white shadow-[12px_12px_0_0] shadow-[#FFD60A] text-[#5e615d]"
					: "bg-[#161D29]"
			} h-[300px] cursor-pointer`}
			onClick={() => setCurrentCard(cardData.heading)}>
			<div className="border-b-[2px] border-[#5e615d] border-dashed h-[80%] p-6 flex flex-col gap-3">
				<h4
					className={`${
						cardData.heading === currentCard
							? "text-[#161D29]"
							: "text-[#DBDDEA]"
					} font-semibold text-[20px]`}>
					{cardData.heading}
				</h4>
				<p className="text-[#999DAA]">
					This course covers the basic concepts of HTML including
					creating and structuring web pages, adding text, links,
					images, and more.
				</p>
			</div>
			<div
				className={`flex justify-between ${
					cardData.heading === currentCard
						? "text-[#0F7A9D]"
						: "text-[#999DAA]"
				} px-6 py-3 font-medium`}>
				<div className="flex items-center gap-2 text-[16px]">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 20 20"
						aria-hidden="true"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
					</svg>
					<p>{cardData.level}</p>
				</div>
				<div className="flex items-center gap-2 text-[16px]">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						version="1.1"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M15.25 12h-0.25v-3.25c0-0.965-0.785-1.75-1.75-1.75h-4.25v-2h0.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v2h-4.25c-0.965 0-1.75 0.785-1.75 1.75v3.25h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.413 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.337-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75zM3 15h-2v-2h2v2zM9 15h-2v-2h2v2zM7 4v-2h2v2h-2zM15 15h-2v-2h2v2z"></path>
					</svg>
					<p>{`${cardData.lessonNo} Lessons`}</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
