import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isClick, setIsClick] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password, navigate));
	};

	return (
		<form className="flex flex-col my-4" onSubmit={submitHandler}>
			<label htmlFor="email-address" className="text-[#daddf0]">
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

			<label htmlFor="password" className="relative text-[#daddf0] mt-2">
				Password <sup className="text-red-600">*</sup>
				<input
					type={isClick ? "text" : "password"}
					required
					id="password"
					name="password"
					placeholder="Enter Password"
					onChange={handleOnChange}
					className="p-[12px] bg-[#161d29] rounded-[0.5rem] text-[#F1F2FF] w-full my-1"
				/>
				<span
					className="absolute text-gray-400 bottom-4 right-3"
					onClick={() => setIsClick((prev) => !prev)}>
					{isClick === false ? (
						<AiOutlineEye size="25px" />
					) : (
						<AiOutlineEyeInvisible size="25px" />
					)}
				</span>
			</label>

			<div className="relative w-full mt-4">
				<span className="text-[#47a5c5] text-xs absolute right-0 bottom-0">
					<Link to="/forgot-password">Forget Password</Link>
				</span>
			</div>

			<button className="mt-8 px-12 py-2 rounded-md bg-[#ffd60a] text-[#000] font-semibold">
				Sign in
			</button>
		</form>
	);
};

export default LoginForm;
