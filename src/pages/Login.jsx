import React from "react";
import Template from "../components/core/auth/Template";
import image from "../assets/Images/loginImageReplace.jpg";

const Login = () => {
	return (
		<section className="w-full mx-auto md:h-[100vh]">
			<Template
				heading="Welcome Back"
				description1="Discover your passions,"
				description2="Be Unstoppable"
				image={image}
				formtype="login"
			/>
		</section>
	);
};

export default Login;
