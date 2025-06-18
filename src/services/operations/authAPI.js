import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { resetCart } from "../../slices/cartSlice";

const {
	SEND_OTP_API,
	SIGNUP_API,
	LOGIN_API,
	RESET_PASSWORD_TOKEN_API,
	RESET_PASSWORD_API,
} = endpoints;

// Function Send OTP
export function sendOtp(email, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", SEND_OTP_API, {
				email,
				checkUserPresent: true,
			});
			console.log("SEND OTP API RESPONSE: ", response);

			console.log(response.data.success);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("OTP Sent Successfully");
			navigate("/verify-email");
		} catch (error) {
			console.log("SEND OTP API ERROR: ", error);
			toast.error("Could Not Send OTP");
		}

		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

// Function Signup
export function signUP(
	accountType,
	firstName,
	lastName,
	email,
	password,
	confirmPassword,
	otp,
	navigate
) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", SIGNUP_API, {
				accountType,
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				otp,
			});
			console.log("SIGNUP API RESPONSE: ", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Signup Successfull");
			navigate("/login");
		} catch (error) {
			console.log("SIGNUP API ERROR: ", error);
			toast.error("Signup Failed");
			navigate("/signup");
		}

		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

// Function Login
export function login(email, password, navigate) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", LOGIN_API, {
				email,
				password,
			});
			console.log("LOGIN API RESPONSE: ", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Login Successfull");
			dispatch(setToken(response.data.user.token));

			const userImage = response.data?.user?.image
				? response.data.user.image
				: `https://api.dicebear.com/7.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;

			dispatch(setUser({ ...response.data.user, image: userImage }));

			localStorage.setItem(
				"token",
				JSON.stringify(response.data.user.token)
			);
			localStorage.setItem("user", JSON.stringify(response.data.user));

			navigate("/dashboard/my-profile");
		} catch (error) {
			console.log("LOGIN API ERROR: ", error.response.data);
			toast.error("Login Failed");
		}

		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

// Function Logout
export function logout(navigate) {
	return (dispatch) => {
		dispatch(setToken(null));
		dispatch(setUser(null));
		dispatch(resetCart());

		localStorage.removeItem("token");
		localStorage.removeItem("user");

		toast.success("Logged Out");
		navigate("/");
	};
}

// Function Get Reset Password Token
export function getPasswordResetToken(email, setEmailSent) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const response = await apiConnector(
				"POST",
				RESET_PASSWORD_TOKEN_API,
				{ email }
			);
			console.log("RESET PASSWORD TOKEN API RESPONSE: ", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Reset Email Sent");
			setEmailSent(true);
		} catch (error) {
			console.log("RESET PASSWORD TOKEN API ERROR: ", error);
			toast.error("Failed to sent email for resetting your password");
		}

		dispatch(setLoading(false));
	};
}

// Function Reset Password
export function resetPassword(password, confirmPassword, token, navigate) {
	return async (dispatch) => {
		dispatch(setLoading(true));

		try {
			const response = await apiConnector("POST", RESET_PASSWORD_API, {
				password,
				confirmPassword,
				token,
			});
			console.log("RESET PASSWORD RESPONSE: ", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

			toast.success("Password has been Reset Successfully");
			navigate("/login");
		} catch (error) {
			console.log("RESET PASSWORD ERROR: ", error.response.data);
			toast.error("Unable to reset password");
		}

		dispatch(setLoading(false));
	};
}
