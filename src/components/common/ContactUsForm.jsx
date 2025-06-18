import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { contactUsEndpoints } from "../../services/apis";
import countryCode from "../../data/countryCode.json";

const ContactUsForm = () => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const submitContactForm = async (data) => {
		console.log("Logging Data: ", data);
		setLoading(true);

		try {
			const response = await apiConnector(
				"POST",
				contactUsEndpoints.CONTACT_US_API,
				data
			);
			// const response = { status: "ok" };
			console.log("Email response: ", response);
		} catch (error) {
			console.log("Error: ", error.message);
		}

		setLoading(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "",
				firstname: "",
				lastname: "",
				phoneno: "",
				message: "",
			});
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<form
			onSubmit={handleSubmit(submitContactForm)}
			className="flex flex-col gap-7">
			{/* First Name & Last Name  */}
			<div className="flex flex-col gap-5 lg:flex-row">
				<div className="flex flex-col gap-2 lg:w-[48%]">
					<label htmlFor="first-name" className="lable-style">
						First Name
					</label>
					<input
						type="text"
						name="firstname"
						id="first-name"
						placeholder="Enter first name"
						className="form-style"
						{...register("firstname", { required: true })}
					/>
					{errors.firstname && <span>Please enter your name</span>}
				</div>

				<div className="flex flex-col gap-2 lg:w-[48%]">
					<label htmlFor="last-name" className="lable-style">
						Last Name
					</label>
					<input
						type="text"
						name="lastname"
						id="last-name"
						placeholder="Enter last name"
						className="form-style"
						{...register("lastname")}
					/>
				</div>
			</div>

			{/* Email  */}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="lable-style">
					Email Address
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter email address"
					className="form-style"
					{...register("email", { required: true })}
				/>
				{errors.email && (
					<span className="-mt-1 text-[12px] text-yellow-100">
						Please enter your email address
					</span>
				)}
			</div>

			{/* Phone No Field  */}
			<div className="flex flex-col gap-2">
				<label htmlFor="phone" className="lable-style">
					Phone
				</label>

				<div className="flex gap-5">
					<div className="flex w-[81px] flex-col gap-2">
						<select
							name="dropdown"
							id="dropdown"
							className="form-style"
							{...register("countrycode", { required: true })}>
							{countryCode.map((elem, index) => {
								return (
									<option key={index} value={elem.code}>
										{elem.code} -{elem.country}
									</option>
								);
							})}
						</select>
					</div>
					<div className="flex w-[calc(100%-90px)] flex-col gap-2">
						<input
							type="number"
							name="phoneno"
							id="phone"
							placeholder="12345 67890"
							className="form-style"
							{...register("phoneno", {
								required: {
									value: true,
									message: "Please enter your phone number",
								},
								maxLength: {
									value: 12,
									message: "Invalid Phone Number",
								},
								minLength: {
									value: 10,
									message: "Invalid Phone Number",
								},
							})}
						/>
					</div>
				</div>

				{errors.phoneno && (
					<span className="-mt-1 text-[12px] text-yellow-100">
						{errors.phoneno.message}
					</span>
				)}
			</div>

			{/* Message Field  */}
			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="lable-style">
					Message
				</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="7"
					placeholder="Enter your message here"
					className="form-style"
					{...register("message", { required: true })}
				/>
				{errors.message && (
					<span className="-mt-1 text-[12px] text-yellow-100">
						Please enter your message
					</span>
				)}
			</div>

			<button
				type="submit"
				disabled={loading}
				className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
					!loading &&
					"transition-all duration-200 hover:scale-95 hover:shadow-none"
				} disabled:bg-richblack-500 sm:text-[16px]`}>
				Send Message
			</button>
		</form>
	);
};

export default ContactUsForm;
