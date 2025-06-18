import { useEffect } from "react";

// This hook detects clicks outside of the specified component and cells the provided handler function.
export default function useOnClickOutside(ref, handler) {
	useEffect(() => {
		// Define the listner function to be called on click/touch events
		const listner = (event) => {
			// If the click/touch event originated inside the ref element, do nothing
			if (!ref.current || ref.current.contains(event.targer)) {
				return;
			}

			// Otherwise, call the provided handler function
			handler(event);
		};

		// Add event listners for mousedown and touchstart events on the document
		document.addEventListener("mousedown", listner);
		document.addEventListener("touchstart", listner);

		// Cleanup function to remove the event listners when the component unmounts or when the ref/handler dependencies change
		return () => {
			document.addEventListener("mousedown", listner);
			document.addEventListener("touchstart", listner);
		};
	}, [ref, handler]); // Only run this effect when the ref or handler function changes
}
