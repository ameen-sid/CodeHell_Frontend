import React from "react";
import ContactDetails from "../components/core/contactUs/ContactDetails";
import ContactForm from "../components/core/contactUs/ContactForm";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const ContactUs = () => {
	return (
		<main>
			<section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
				{/* Contact Details */}
				<aside className="lg:w-[40%]">
					<ContactDetails />
				</aside>

				<aside className="lg:w-[60%]">
					<ContactForm />
				</aside>
			</section>

			<section className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
				{/* Reviews from other learners  */}
				<h1 className="text-center text-4xl font-semibold mt-8">
					Reviews from other learners
				</h1>
				<ReviewSlider />
			</section>

			{/* Footer  */}
			<Footer />
		</main>
	);
};

export default ContactUs;
