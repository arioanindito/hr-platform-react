import { ArrowDropDown, NotificationsNoneOutlined } from "@mui/icons-material";
import React from "react";

export default function Navbar() {
	return (
		<div className="topbar flex h-16 bg-[#0B3768] justify-between py-3 px-4">
			{/* Extramus Logo White*/}
			<div className="topbarLeft flex items-center">
				<img
					className="h-full ml-16"
					src={require("../images/extramusLogoWhite.png")}
					alt="loginImg"
				/>
			</div>
			{/* Right Side */}
			<div className="topbarRight flex items-center justify-between text-white gap-3">
				<p>01 September 2020 </p>
				<p className="text-2xl"> │ </p>
				<div className="notificationContainer cursor-pointer relative">
					<NotificationsNoneOutlined />
					<span className="absolute rounded-full bg-red-600 w-[15px] h-[15px] top-[-1px] right-[-1px] flex items-center justify-center text-xs">
						2
					</span>
				</div>
				<p>Lucille Nawa</p>
				<ArrowDropDown className="cursor-pointer text-4xl" />
			</div>
		</div>
	);
}
