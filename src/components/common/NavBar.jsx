import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { useLocation } from "react-router-dom";
import { navBarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { Link, matchPath } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { apiConnector } from "../../services/apiConnector";
import { catagoriesEndpoints } from "../../services/apis";
import ProfileDropDown from "../core/auth/ProfileDropDown";

// const subLinks = [
// 	{
// 		name: "Python",
// 		description: "/catalog/python",
// 	},
// 	{
// 		name: "Web Dev",
// 		description: "/catalog/web-development",
// 	},
// ];

const NavBar = () => {
	const { token } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.profile);
	const { totalItems } = useSelector((state) => state.cart);

	const location = useLocation();

	const [subLinks, setSubLinks] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchSubLinks = async () => {
		setLoading(true);
		try {
			const result = await apiConnector(
				"GET",
				catagoriesEndpoints.CATAGORIES_API
			);
			console.log("Printing SubLinks Data: ", result.data.data);

			setSubLinks(result.data.data);
		} catch (error) {
			console.log("Could not fetch the category list: ", error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchSubLinks();
	}, []);

	const matchRoute = (route) => {
		return matchPath({ path: route }, location.pathname);
	};
	return (
		<section
			className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
				location.pathname !== "/" ? "bg-richblack-800" : ""
			} transition-all duration-200`}>
			<nav className="flex w-11/12 max-w-maxContent items-center justify-between">
				{/* Logo  */}
				<Link to="/">
					<img
						src={Logo}
						alt=""
						width={160}
						height={42}
						loading="lazy"
					/>
				</Link>

				{/* NavLinks  */}
				<div className="hidden md:block">
					<ul className="flex gap-x-6 text-richblack-25">
						{navBarLinks.map((link, index) => {
							return (
								<li key={index}>
									{link.title === "Catalog" ? (
										<>
											<div
												className={`group relative flex cursor-pointer items-center gap-1 ${
													matchRoute(
														"/catalog/:catalogName"
													)
														? "text-yellow-25"
														: "text-richblack-25"
												}`}>
												<p>{link.title}</p>
												<BsChevronDown />
												<div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
													<div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

													{loading ? (
														<p className="text-center">
															Loading...
														</p>
													) : subLinks.length ? (
														<>
															{subLinks
																?.filter(
																	(sublink) =>
																		sublink
																			?.courses
																			?.length >
																		0
																)
																?.map(
																	(
																		sublink,
																		index
																	) => (
																		<Link
																			to={`/catalog/${sublink.name
																				.split(
																					" "
																				)
																				.join(
																					"-"
																				)
																				.toLowerCase()}`}
																			className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
																			key={
																				index
																			}>
																			<p>
																				{
																					sublink.name
																				}
																			</p>
																		</Link>
																	)
																)}
														</>
													) : (
														<p className="text-center">
															No Courses Found
														</p>
													)}
												</div>
											</div>
										</>
									) : (
										<Link to={link?.path}>
											<p
												className={`${
													matchRoute(link?.path)
														? "text-[#FFE83D]"
														: "text-[#DBDDEA]"
												}`}>
												{link.title}
											</p>
										</Link>
									)}
								</li>
							);
						})}
					</ul>
				</div>

				{/* Login / Signup / Dashboard  */}
				<div className="hidden items-center gap-x-4 md:flex">
					{user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
						<Link to="/dashboard/cart" className="relative">
							<AiOutlineShoppingCart className="text-2xl text-richblack-100" />
							{totalItems > 0 && (
								<span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
									{totalItems}
								</span>
							)}
						</Link>
					)}

					{token === null && (
						<Link to="/login">
							<button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
								Log in
							</button>
						</Link>
					)}

					{token === null && (
						<Link to="/signup">
							<button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
								Sign up
							</button>
						</Link>
					)}

					{token !== null && <ProfileDropDown />}
				</div>
				<button className="mr-4 md:hidden">
					<AiOutlineMenu fontSize={24} fill="#AFB2BF" />
				</button>
			</nav>
		</section>
	);
};

export default NavBar;
