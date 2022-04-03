import {
	ArrowForward,
	NotificationAddOutlined,
	UploadFileOutlined,
} from "@mui/icons-material";
import React from "react";

export default function Dashboard() {
	return (
		<div className="dashboardContainer flex flex-col w-full ">
			{/* Top Side */}
			<div className="dashboardTop flex flex-[1]">
				{/* Top Left */}
				<div className="dashboardTopLeft flex flex-[1] items-center justify-center">
					<img
						className="flex h-44"
						src={require("../images/dashboardImage.png")}
						alt=""
					/>
				</div>
				{/* Top Right */}
				<div className="dashboardTopRight flex flex-[4] flex-col justify-center gap-4">
					{/* Title */}
					<div className="flex flex-col gap-2">
						<p className="text-4xl font-semibold">Ciao, Lucille!</p>
						<p className="text-sm">
							Welcome Back! You have 5{" "}
							<a className="underline" href="">
								notifications.
							</a>
						</p>
					</div>
					{/* Button Container*/}
					<div className="flex gap-3">
						{/* Add Post Button */}
						<a
							href=""
							className="bg-white flex w-[25rem] p-3 rounded-md border-2 items-center justify-start gap-3"
						>
							<div className="buttonImage text-[#2F80ED] bg-sky-100 flex items-center justify-center h-12 w-12 rounded-full">
								<UploadFileOutlined />
							</div>
							<div className="buttonText mb-1">
								Add New Post
								<p className="text-xs">
									Start adding your post to inform another employee
								</p>
							</div>
						</a>
						{/* Add Reminder Button */}
						<a
							href=""
							className="bg-white flex w-[25rem] p-3 rounded-md border-2 items-center justify-start gap-3"
						>
							<div className="buttonImage text-[#2f7e1b] bg-green-100 flex items-center justify-center h-12 w-12 rounded-full">
								<NotificationAddOutlined />
							</div>
							<div className="buttonText mb-1">
								Add New Reminder
								<p className="text-xs">
									Start adding your reminder for daily reminder
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Side */}
			<div className="dashboardBottom flex flex-[3] p-3 gap-3">
				{/* Bottom Left */}
				<div className="bottomLeft flex flex-1 flex-col gap-2">
					{/* Bottom Left Title */}
					<div className="titleContainer flex items-center justify-between">
						<div className="title text-xl font-semibold">What's New</div>
						<a
							href=""
							className="viewAll flex items-center justify-center text-[#2F80ED]"
						>
							<div>View All (18)</div>
							<div>
								{" "}
								<ArrowForward className="text-md" />
							</div>
						</a>
					</div>

					{/* Bottom Left Content */}
					<div className="bottomLeftContent bg-white h-full rounded-md border-2"></div>
				</div>

				{/* Bottom Right */}
				<div className="bottomRight flex flex-1 flex-col gap-3">
					<div className="bottomRightTop flex flex-1 bg-yellow-400">
						Bottom Right Top
					</div>
					<div className="bottomRightDown flex flex-1 bg-purple-400">
						Bottom Right Down
					</div>
				</div>
			</div>
		</div>
	);
}
