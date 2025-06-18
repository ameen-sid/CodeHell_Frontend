import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerSectionOne, footerSectionTwo } from "../../data/footer-data";
import Logo from "../../assets/Logo/Logo-Full-Light.png";

const Footer = () => {
	return (
		<footer className="text-[#6E727F] bg-[#161D29] pt-16 w-full">
			<div className="flex flex-col justify-between w-full mx-auto pb-8 lg:flex-row xl:w-[1190px]">
				<aside className="flex flex-row px-6 flex-wrap w-full sm:gap-4 sm:w-[640px] mx-auto lg:w-full lg:flex-nowrap lg:gap-1">
					<div>
						<img
							src={Logo}
							alt="Logo"
							className="w-[50%] lg:w-[75%]"
						/>
						<div className="flex flex-col gap-2 mt-4">
							<h6 className="text-[#C5C7D4] text-[17px] font-semibold">
								Company
							</h6>
							<div className="flex flex-col gap-2">
								<Link to="/about">
									<p className="text-[15px] hover:text-[#C5C7D4]">
										About
									</p>
								</Link>
								<Link to="/careers">
									<p className="text-[15px] hover:text-[#C5C7D4]">
										Careers
									</p>
								</Link>
								<Link to="/affiliates">
									<p className="text-[15px] hover:text-[#C5C7D4]">
										Affiliates
									</p>
								</Link>
								<div className="flex mt-2 gap-3">
									<FaFacebook />
									<FaGoogle />
									<FaTwitter />
									<FaYoutube />
								</div>
							</div>
						</div>
					</div>

					{footerSectionOne.map((elem, i) => (
						<div key={i} className="flex flex-col gap-8 w-[30%]">
							{elem.map((element, index) => (
								<div
									key={index}
									className="flex flex-col gap-2">
									<h6 className="text-[#C5C7D4] text-[17px] font-semibold">
										{element.title}
									</h6>
									{element.links.map((e, i) => (
										<Link key={i} to={e.link}>
											<p className="text-[15px] hover:text-[#C5C7D4]">
												{e.title}
											</p>
										</Link>
									))}
								</div>
							))}
						</div>
					))}
				</aside>

				<div className="lg:h-[525px] h-[1px] w-[90%] mx-auto mt-8 lg:w-[1px] bg-[#36373a]"></div>

				<aside className="flex flex-row flex-wrap px-6 gap-16 mt-10 sm:w-[640px] mx-auto sm:gap-24 lg:w-full lg:flex-nowrap lg:mt-0 lg:gap-10">
					{footerSectionTwo.map((elem, i) => {
						return (
							<div key={i} className="flex flex-col gap-2">
								<h6 className="text-[#C5C7D4] text-[17px] font-semibold">
									{elem.title}
								</h6>
								{elem.links.map((element, index) => {
									return (
										<Link to={element.link} key={index}>
											<p className="text-[15px] hover:text-[#C5C7D4]">
												{element.title}
											</p>
										</Link>
									);
								})}
							</div>
						);
					})}
				</aside>
			</div>

			<div className="xl:w-[1120px] w-[90%] mx-auto h-[1px] bg-[#36373a] mt-4"></div>

			<div className="flex flex-col lg:flex-row gap-4 xl:w-[1173px] w-full text-sm mx-auto items-center justify-between p-12">
				<div className="flex gap-3 -mt-2">
					<Link to="/privacy-policy">
						<p>Privacy Policy</p>
					</Link>
					<div className="w-[1px] h-[90%] bg-[#36373a] "></div>
					<Link to="/cookie-policy">
						<p>Cookie Policy</p>
					</Link>
					<div className="w-[1px] h-[90%] bg-[#36373a] "></div>
					<Link to="/terms">
						<p>Terms</p>
					</Link>
				</div>
				<div>
					<p>Made with ❤️ CodeHell @ 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
