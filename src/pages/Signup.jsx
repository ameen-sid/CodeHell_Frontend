import React from "react";
import Template from "../components/core/auth/Template";
import image from "../assets/Images/signup.webp";

const Signup = () => {
	return (
		<section className="w-full mx-auto md:h-[100vh]">
			<Template
				heading="Join the millions learning to code with CodeHell for free"
				description1="Build skills for today, tomorrow, and beyond."
				description2="Education to future-proof your career."
				image={image}
				formtype="signup"
			/>
		</section>
	);
};

export default Signup;
