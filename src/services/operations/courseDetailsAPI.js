import { toast } from "react-hot-toast";
import { courseEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
	COURSE_CATAGORIES_API,

	CREATE_COURSE_API,
	EDIT_COURSE_API,
	COURSE_DETAILS_API,
	GET_ALL_COURSE_API,
	GET_FULL_COURSE_DETAILS_AUTHENTICATED,
	GET_ALL_INSTRUCTOR_COURSES_API,
	DELETE_COURSE_API,

	CREATE_SECTION_API,
	UPDATE_SECTION_API,
	DELETE_SECTION_API,

	CREATE_SUB_SECTION_API,
	UPDATE_SUB_SECTION_API,
	DELETE_SUB_SECTION_API,

	CREATE_RATING_API,

	LECTURE_COMPLETION_API,
} = courseEndpoints;

// COURSE_CATAGORIES_API (fetching the available course categories)
export const fetchCourseCategories = async () => {
	let result = [];

	try {
		const response = await apiConnector("GET", COURSE_CATAGORIES_API);
		console.log("COURSE CATAGORIES API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Fetch Course Categories");
		}

		result = response?.data?.data;
	} catch (error) {
		console.log("COURSE CATAGORIES API ERROR: ", error.response.data);
		toast.error(error.message);
	}

	return result;
};

// CREATE_COURSE_API (add the course details)
export const addCourseDetails = async (data, token) => {
	const toastId = toast.loading("Loading...");
	let result = null;

	try {
		const response = await apiConnector("POST", CREATE_COURSE_API, data, {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`,
		});
		console.log("CREATE COURSE API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Add Course Details");
		}

		toast.success("Course Details Added Successfully");
		result = response?.data?.data;
	} catch (error) {
		console.log("CREATE COURSE API ERROR: ", error.response.data);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// EDIT_COURSE_API (edit the course details)
export const editCourseDetails = async (data, token) => {
	const toastId = toast.loading("Loading...");
	let result = null;

	try {
		const response = await apiConnector("POST", EDIT_COURSE_API, data, {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`,
		});
		console.log("EDIT COURSE API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Update Course Details");
		}

		toast.success("Course Details Updated Successfully");
		result = response?.data?.data;
	} catch (error) {
		console.log("EDIT COURSE API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// COURSE_DETAILS_API (fetch course details)
export const fetchCourseDetails = async (courseId) => {
	const toastId = toast.loading("Loading...");
	//   dispatch(setLoading(true));
	let result = null;

	try {
		const response = await apiConnector("POST", COURSE_DETAILS_API, {
			courseId,
		});
		console.log("COURSE_DETAILS_API API RESPONSE: ", response);

		if (!response.data.success) {
			throw new Error(response.data.message);
		}

		result = response.data;
	} catch (error) {
		console.log("COURSE_DETAILS_API API ERROR: ", error);
		result = error.response.data;
		// toast.error(error.response.data.message);
	}

	toast.dismiss(toastId);
	//   dispatch(setLoading(false));
	return result;
};

// GET_ALL_COURSE_API
export const getAllCourses = async () => {
	const toastId = toast.loading("Loading...");
	let result = [];

	try {
		const response = await apiConnector("GET", GET_ALL_COURSE_API);
		console.log("GET ALL COURSE API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Fetch Course Categories");
		}

		result = response?.data?.data;
	} catch (error) {
		console.log("GET ALL COURSE API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// GET_FULL_COURSE_DETAILS_AUTHENTICATED (get full details of a course)
export const getFullDetailsOfCourse = async (courseId, token) => {
	const toastId = toast.loading("Loading...");
	//   dispatch(setLoading(true));
	let result = null;

	try {
		const response = await apiConnector(
			"POST",
			GET_FULL_COURSE_DETAILS_AUTHENTICATED,
			{
				courseId,
			},
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("COURSE FULL DETAILS API RESPONSE: ", response);

		if (!response.data.success) {
			throw new Error(response.data.message);
		}

		result = response?.data?.data;
	} catch (error) {
		console.log("COURSE FULL DETAILS API ERROR: ", error);
		result = error.response.data;
		// toast.error(error.response.data.message);
	}

	toast.dismiss(toastId);
	//   dispatch(setLoading(false));
	return result;
};

// GET_ALL_INSTRUCTOR_COURSES_API (fetching all courses under a specific instructor)
export const fetchInstructorCourses = async (token) => {
	let result = [];
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector(
			"GET",
			GET_ALL_INSTRUCTOR_COURSES_API,
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("INSTRUCTOR COURSES API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Fetch Instructor Courses");
		}

		result = response?.data?.data;
	} catch (error) {
		console.log("INSTRUCTOR COURSES API ERROR: ", error.response.data);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// DELETE_COURSE_API (delete a course)
export const deleteCourse = async (data, token) => {
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
			Authorization: `Bearer ${token}`,
		});
		console.log("DELETE COURSE API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Delete Course");
		}

		toast.success("Course Deleted");
	} catch (error) {
		console.log("DELETE COURSE API ERROR: ", error.response.data);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
};

// CREATE_SECTION_API (create a section)
export const createSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector("POST", CREATE_SECTION_API, data, {
			Authorization: `Bearer ${token}`,
		});
		console.log("CREATE SECTION API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Create Section");
		}

		toast.success("Course Section Created");
		result = response?.data?.data;
	} catch (error) {
		console.log("CREATE SECTION API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// UPDATE_SECTION_API (update a section)
export const updateSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
			Authorization: `Bearer ${token}`,
		});
		console.log("UPDATE SECTION API RESPONSE: ", response.data);

		if (!response?.data?.success) {
			throw new Error("Could Not Update Section");
		}

		toast.success("Course Section Updated");
		result = response?.data?.data;
	} catch (error) {
		console.log("UPDATE SECTION API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// DELETE_SECTION_API (delete a section)
export const deleteSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector("POST", DELETE_SECTION_API, data, {
			Authorization: `Bearer ${token}`,
		});
		console.log("DELETE SECTION API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Delete Section");
		}

		toast.success("Course Section Deleted");
		result = response?.data?.data;
	} catch (error) {
		console.log("DELETE SECTION API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// CREATE_SUB_SECTION_API (create a subsection)
export const createSubSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector(
			"POST",
			CREATE_SUB_SECTION_API,
			data,
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("CREATE SUB-SECTION API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Add Lecture");
		}

		toast.success("Lecture Added");
		result = response?.data?.data;
	} catch (error) {
		console.log("CREATE SUB-SECTION API ERROR: ", error.response.data);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// UPDATE_SUB_SECTION_API (update a subsection)
export const updateSubSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector(
			"POST",
			UPDATE_SUB_SECTION_API,
			data,
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("UPDATE SUB-SECTION API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Update Lecture");
		}

		toast.success("Lecture Updated");
		result = response?.data?.data;
	} catch (error) {
		console.log("UPDATE SUB-SECTION API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// DELETE_SUB_SECTION_API (delete a subsection)
export const deleteSubSection = async (data, token) => {
	let result = null;
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector(
			"POST",
			DELETE_SUB_SECTION_API,
			data,
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("DELETE SUB-SECTION API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Delete Lecture");
		}

		toast.success("Lecture Deleted");
		result = response?.data?.data;
	} catch (error) {
		console.log("DELETE SUB-SECTION API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return result;
};

// CREATE_RATING_API (create a rating for course)
export const createRating = async (data, token) => {
	const toastId = toast.loading("Loading...");
	let success = false;

	try {
		const response = await apiConnector("POST", CREATE_RATING_API, data, {
			Authorization: `Bearer ${token}`,
		});
		console.log("CREATE RATING API RESPONSE: ", response);

		if (!response?.data?.success) {
			throw new Error("Could Not Create Rating");
		}

		toast.success("Rating Created");
		success = true;
	} catch (error) {
		success = false;
		console.log("CREATE RATING API ERROR: ", error);
		toast.error(error.message);
	}

	toast.dismiss(toastId);
	return success;
};

// LECTURE_COMPLETION_API (mark a lecture as complete)
export const markLectureAsComplete = async (data, token) => {
	let result = null;
	// console.log("mark complete data", data);
	const toastId = toast.loading("Loading...");

	try {
		const response = await apiConnector(
			"POST",
			LECTURE_COMPLETION_API,
			data,
			{
				Authorization: `Bearer ${token}`,
			}
		);
		console.log("MARK LECTURE AS COMPLETE API RESPONSE: ", response);

		if (!response.data.message) {
			throw new Error(response.data.error);
		}

		toast.success("Lecture Completed");
		result = true;
	} catch (error) {
		console.log("MARK LECTURE AS COMPLETE API ERROR: ", error);
		toast.error(error.message);
		result = false;
	}

	toast.dismiss(toastId);
	return result;
};
