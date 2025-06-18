import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/common/NavBar";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import OpenRoute from "./components/core/auth/OpenRoute";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import VerifyEmail from "./pages/VerifyEmail";
import PrivateRoute from "./components/core/auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/dashboard/MyProfile";
import Settings from "./components/core/dashboard/Settings";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from "./components/core/dashboard/Cart";
import EnrolledCourses from "./components/core/dashboard/EnrolledCourses";
import { useSelector } from "react-redux";
import MyCourses from "./components/core/dashboard/MyCourses";
import AddCourse from "./components/core/dashboard/AddCourse";
import EditCourse from "./components/core/dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/viewCourse/VideoDetails";
import Instructor from "./components/core/dashboard/InstructorDashboard/Instructor";

const App = () => {
	const { user } = useSelector((state) => state.profile);
	return (
		<main className="w-full min-h-screen bg-[#000814] flex flex-col font-inter text-white">
			{/* NavBar  */}
			<NavBar />

			{/* All Routes */}
			<Routes>
				{/* Home  */}
				<Route path="/" element={<Home />} />

				{/* Catalog Pages  */}
				<Route path="/catalog/:catalogName" element={<Catalog />} />
				<Route path="/courses/:courseId" element={<CourseDetails />} />

				{/* Login  */}
				<Route
					path="/login"
					element={
						<OpenRoute>
							<Login />
						</OpenRoute>
					}
				/>

				{/* Sign up  */}
				<Route
					path="/signup"
					element={
						<OpenRoute>
							<Signup />
						</OpenRoute>
					}
				/>

				{/* Forgot Password  */}
				<Route
					path="/forgot-password"
					element={
						<OpenRoute>
							<ForgotPassword />
						</OpenRoute>
					}
				/>

				{/* Verify Email  */}
				<Route
					path="/verify-email"
					element={
						<OpenRoute>
							<VerifyEmail />
						</OpenRoute>
					}
				/>

				{/* Update Password  */}
				<Route
					path="/update-password/:id"
					element={
						<OpenRoute>
							<UpdatePassword />
						</OpenRoute>
					}
				/>

				{/* About */}
				<Route path="/about" element={<About />} />

				{/* Contact Us */}
				<Route path="/contact" element={<ContactUs />} />

				{/* Dashboard */}
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}>
					{/* My Profile  */}
					<Route path="my-profile" element={<MyProfile />} />

					{/* Setting  */}
					<Route path="settings" element={<Settings />} />

					{/* Only for Students (Cart, EnrolledCourses) */}
					{user?.accountType === ACCOUNT_TYPE.STUDENT && (
						<>
							{/* Cart  */}
							<Route path="cart" element={<Cart />} />
							{/* Enrolled Courses  */}
							<Route
								path="enrolled-courses"
								element={<EnrolledCourses />}
							/>
						</>
					)}

					{/* Only for Instructors (MyCourses) */}
					{user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
						<>
							{/* Instructor Dashboard  */}
							<Route path="instructor" element={<Instructor />} />
							{/* Add Course  */}
							<Route path="add-course" element={<AddCourse />} />
							{/* My Courses  */}
							<Route path="my-courses" element={<MyCourses />} />
							{/* Edit Course  */}
							<Route
								path="edit-course/:courseId"
								element={<EditCourse />}
							/>
						</>
					)}
				</Route>

				<Route
					element={
						<PrivateRoute>
							<ViewCourse />
						</PrivateRoute>
					}>
					{user?.accountType === ACCOUNT_TYPE.STUDENT && (
						<>
							<Route
								path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
								element={<VideoDetails />}
							/>
						</>
					)}
				</Route>

				{/* 404 Error */}
				<Route path="*" element={<Error />} />
			</Routes>
		</main>
	);
};

export default App;
