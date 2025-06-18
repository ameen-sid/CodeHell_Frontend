import React from "react";
import frame from "../../../assets/Images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useSelector } from "react-redux";

const Template = ({ heading, description1, description2, image, formtype }) => {
	const { loading } = useSelector((state) => state.auth);

	return (
		<section className="relative overflow-hidden xl:w-[1260px] mx-auto p-10 md:p-6 lg:p-12 flex flex-col-reverse md:flex-row justify-between items-center md:gap-10 lg:gap-40">
			{loading ? (
				<div className="spinner"></div>
			) : (
				<>
					<article className="flex flex-col gap-2 mt-10 min-[540px]:w-[460px] md:w-[50%] lg:w-[500px]">
						<h2 className="text-[30px] leading-9 font-semibold">
							{heading}
						</h2>

						<div className="mt-4">
							<span className="text-[18px] block text-[#a8aab6] leading-tight">
								{description1}
							</span>
							<span className="text-[16px] xl:text-[18px] text-[#47a5c5] italic my-[-5px] font-edu-sa">
								{description2}
							</span>
						</div>

						{/* Form Type  */}
						{formtype === "login" ? <LoginForm /> : <SignupForm />}
					</article>
					<article className="relative mx-auto md:w-[45%] min-[940px]:w-[382px] lg:w-[450px]">
						<img
							src={frame}
							alt=""
							className="w-[400px] lg:w-[450px] mt-6"
						/>
						<img
							src={image}
							alt=""
							className="absolute top-3 right-4 w-[400px] lg:w-[450px]"
						/>
					</article>
				</>
			)}
		</section>
	);
};

export default Template;
