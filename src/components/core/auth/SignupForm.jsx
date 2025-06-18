import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";
import { setSignupData } from "../../../slices/authSlice";
import { sendOtp } from "../../../services/operations/authAPI";
import { toast } from "react-hot-toast";

const SignupForm = () => {
	const [isClickOne, setIsClickOne] = useState(false);
	const [isClickTwo, setIsClickTwo] = useState(false);

	// Student or Instructor
	const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { firstName, lastName, email, password, confirmPassword } = formData;

	// Handle input fields, when some value changes
	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle Form Submission
	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords are not match");
			return;
		}

		const signupData = {
			...formData,
			accountType,
		};

		// Setting signup data to state
		// To be used after otp verification
		dispatch(setSignupData(signupData));
		// Send OTP to user for verification
		dispatch(sendOtp(formData.email, navigate));

		// Reset
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		setAccountType(ACCOUNT_TYPE.STUDENT);
	};

	// data to pass to Tab component
	const tabData = [
		{
			id: 1,
			tabName: "Student",
			type: ACCOUNT_TYPE.STUDENT,
		},
		{
			id: 2,
			tabName: "Instructor",
			type: ACCOUNT_TYPE.INSTRUCTOR,
		},
	];

	return (
		<>
			{/* Tab */}
			<Tab
				tabData={tabData}
				field={accountType}
				setField={setAccountType}
			/>

			<form onSubmit={submitHandler}>
				<section className="flex gap-6">
					<div>
						<label
							htmlFor="first-name"
							className="text-[#daddf0] mt-2">
							First Name <sup className="text-red-600">*</sup>
							<input
								type="text"
								required
								id="first-name"
								name="firstName"
								placeholder="Enter first name"
								onChange={handleOnChange}
								className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
							/>
						</label>
					</div>

					<div>
						<label
							htmlFor="last-name"
							className="text-[#daddf0] mt-2">
							Last Name <sup className="text-red-600">*</sup>
							<input
								type="text"
								required
								id="last-name"
								name="lastName"
								placeholder="Enter last name"
								onChange={handleOnChange}
								className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
							/>
						</label>
					</div>
				</section>

				<section>
					<label
						htmlFor="email-address"
						className="text-[#daddf0] mt-2">
						Email Address <sup className="text-red-600">*</sup>
						<input
							type="email"
							required
							id="email-address"
							name="email"
							placeholder="Enter email address"
							onChange={handleOnChange}
							className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
						/>
					</label>
				</section>

				{/* <section>
					<div>
						<label
							htmlFor="phone-number"
							className="text-[#daddf0] mt-2">
							Phone Number <sup className="text-red-600">*</sup>
							<div className="flex gap-6 justify-between w-full border">
								<select
									id="phone-number"
									className="px-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-[30%] my-1">
									<option value="+91">
										<p>
											+91
											<BsChevronDown />
										</p>
									</option>
								</select>
								<input
									type="number"
									required
									id="phone-number"
									placeholder="12345 67890"
									className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
								/>
							</div>
						</label>
					</div>
				</section> */}

				<section className="flex gap-6">
					<div>
						<label
							htmlFor="create-password"
							className="text-[#daddf0] mt-2 relative">
							Create Password{" "}
							<sup className="text-red-600">*</sup>
							<input
								type={isClickOne ? "text" : "password"}
								required
								id="create-password"
								name="password"
								placeholder="Enter Password"
								onChange={handleOnChange}
								className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
							/>
							<span
								className="cursor-pointer absolute bottom-0 right-2 text-gray-400"
								onClick={() => setIsClickOne((prev) => !prev)}>
								{isClickOne ? (
									<AiOutlineEyeInvisible size="25px" />
								) : (
									<AiOutlineEye size="25px" />
								)}
							</span>
						</label>
					</div>

					<div>
						<label
							htmlFor="confirm-password"
							className="text-[#daddf0] mt-2 relative">
							Create Password{" "}
							<sup className="text-red-600">*</sup>
							<input
								type={isClickTwo ? "text" : "password"}
								required
								id="confirm-password"
								name="confirmPassword"
								placeholder="Confirm Password"
								onChange={handleOnChange}
								className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
							/>
							<span
								className="cursor-pointer absolute bottom-0 right-2 text-gray-400"
								onClick={() => setIsClickTwo((prev) => !prev)}>
								{isClickTwo ? (
									<AiOutlineEyeInvisible size="25px" />
								) : (
									<AiOutlineEye size="25px" />
								)}
							</span>
						</label>
					</div>
				</section>

				<button className="w-full mt-8 px-12 py-2 rounded-md bg-[#ffd60a] text-[#000] font-semibold">
					Create Account
				</button>
			</form>
		</>
	);
};

export default SignupForm;
