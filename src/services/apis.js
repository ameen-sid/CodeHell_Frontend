// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:4000/api/v1";

// Auth Endpoints
export const endpoints = {
	SEND_OTP_API: BASE_URL + "/auth/sendotp",
	SIGNUP_API: BASE_URL + "/auth/signup",
	LOGIN_API: BASE_URL + "/auth/login",
	RESET_PASSWORD_TOKEN_API: BASE_URL + "/auth/reset-password-token",
	RESET_PASSWORD_API: BASE_URL + "/auth/reset-password",
};

// Profile Endpoints
export const profileEndpoints = {
	GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
	GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
	GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
};

// Student Endpoints
export const studentEndpoints = {
	COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
	COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
	SEND_PAYMENT_SUCCESS_EMAIL_API:
		BASE_URL + "/payment/sendPaymentSuccessEmail",
};

// Course Endpoints
export const courseEndpoints = {
	GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
	COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
	EDIT_COURSE_API: BASE_URL + "/course/editCourse",
	COURSE_CATAGORIES_API: BASE_URL + "/course/showAllCategories",
	CREATE_COURSE_API: BASE_URL + "/course/createCourse",
	CREATE_SECTION_API: BASE_URL + "/course/addSection",
	CREATE_SUB_SECTION_API: BASE_URL + "/course/addSubSection",
	UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
	UPDATE_SUB_SECTION_API: BASE_URL + "/course/updateSubSection",
	GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
	DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
	DELETE_SUB_SECTION_API: BASE_URL + "/course/deleteSubSection",
	DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
	GET_FULL_COURSE_DETAILS_AUTHENTICATED:
		BASE_URL + "/course/getFullCourseDetails",
	LECTURE_COMPLETION_API: BASE_URL + "/course/UpdateCourseProgress",
	CREATE_RATING_API: BASE_URL + "/course/createRating",
};

// Rating And Reviews Endpoints
export const ratingEndpoints = {
	REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
};

// Catagories Endpoints
export const catagoriesEndpoints = {
	CATAGORIES_API: BASE_URL + "/course/showAllCategories",
};

// Catalog Page Data Endpoints
export const catalogDataEndpoints = {
	CATALOG_PAGE_DATA_API: BASE_URL + "/course/getCategoryPageDetails",
};

// Contact Us Endpoints
export const contactUsEndpoints = {
	CONTACT_US_API: BASE_URL + "/reach/contact",
};

// Setting Endpoints
export const settingEndpoints = {
	UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
	UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
	CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
	DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};
