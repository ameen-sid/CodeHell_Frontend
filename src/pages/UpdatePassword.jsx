import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { resetPassword } from "../services/operations/authAPI";

const UpdatePassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const { loading } = useSelector((state) => state.auth);

	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { password, confirmPassword } = formData;

	const handlerOnChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handlerOnSubmit = (e) => {
		e.preventDefault();
		const token = location.pathname.split("/").at(-1);
		dispatch(resetPassword(password, confirmPassword, token, navigate));
	};

	return (
		<section className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
			{loading ? (
				<div className="spinner"></div>
			) : (
				<div className="max-w-[500px] p-4 lg:p-8">
					<h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
						Choose new Password
					</h1>
					<p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
						Almost done. Enter your new password and you're all set.
					</p>

					<form onSubmit={handlerOnSubmit}>
						<label className="relative">
							<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
								New Password{" "}
								<sup className="text-pink-200">*</sup>
							</p>
							<input
								required
								type={showPassword ? "text" : "password"}
								name="password"
								value={password}
								onChange={handlerOnChange}
								placeholder="Enter Password"
								className="form-style w-full !pr-10"
							/>
							<span
								onClick={() => setShowPassword((prev) => !prev)}
								className="absolute right-3 top-[38px] z-[10] cursor-pointer">
								{showPassword ? (
									<AiFillEyeInvisible
										fontSize={24}
										fill="#AFB2BF"
									/>
								) : (
									<AiFillEye fontSize={24} fill="#AFB2BF" />
								)}
							</span>
						</label>

						<label className="relative mt-3 block">
							<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
								Confirm New Password{" "}
								<sup className="text-pink-200">*</sup>
							</p>
							<input
								required
								type={showConfirmPassword ? "text" : "password"}
								name="confirmPassword"
								value={confirmPassword}
								onChange={handlerOnChange}
								placeholder="Confirm Password"
								className="form-style w-full !pr-10"
							/>
							<span
								onClick={() =>
									setShowConfirmPassword((prev) => !prev)
								}
								className="absolute right-3 top-[38px] z-[10] cursor-pointer">
								{showConfirmPassword ? (
									<AiFillEyeInvisible
										fontSize={24}
										fill="#AFB2BF"
									/>
								) : (
									<AiFillEye fontSize={24} fill="#AFB2BF" />
								)}
							</span>
						</label>

						<button
							type="submit"
							className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
							Reset Password
						</button>
					</form>

					<div className="mt-6 flex items-center justify-between">
						<Link to="/login">
							<p className="flex items-center gap-x-2 text-richblack-5">
								<BiArrowBack /> Back To Login
							</p>
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default UpdatePassword;
