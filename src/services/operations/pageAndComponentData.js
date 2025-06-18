import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { catalogDataEndpoints } from "../apis";

export const getCatalogPageData = async (categoryId) => {
	const toastId = toast.loading("Loading...");
	let result = [];

	try {
		const response = await apiConnector(
			"POST",
			catalogDataEndpoints.CATALOG_PAGE_DATA_API,
			{ categoryId: categoryId }
		);
		console.log("CATALOG PAGE DATA API RESPONSE: ", response);

		if (!response?.data?.success)
			throw new Error("Could not Fetch Category page data");

		result = response?.data;
	} catch (error) {
		console.log("CATALOG PAGE DATA API ERROR: ", error);
		toast.error(error.message);
		result = error.response?.data;
	}

	toast.dismiss(toastId);
	return result;
};
