import {
	CalendarMonthOutlined,
	DashboardOutlined,
	FlightLandOutlined,
	FlightTakeoffOutlined,
	GroupOutlined,
	InsertDriveFileOutlined,
	List,
} from "@mui/icons-material";
import React from "react";

export default function Sidebar() {
	const sideBarListItem =
		"flex items-center px-6 py-2 my-2 gap-2 hover:text-[#2F80ED] hover:bg-sky-50";

	const sideBarListTitle =
		"flex items-center px-6 py-3 my-2 gap-2 text-gray-700";
	// h-[calc(100vh_-_64px)]
	return (
		<div className="sidebar flex w-full h-[calc(100vh_-_64px)] text-gray-500">
			<div className="sidebarWrapper w-full my-2">
				<ul className="sidebarList text-sm">
					<a href="" className={sideBarListItem + " text-[#2F80ED] bg-sky-100"}>
						<DashboardOutlined />
						<p>Dashboard</p>
					</a>
					{/* Applicants */}
					<li className={sideBarListTitle}>APPLICANTS</li>
					<a href="" className={sideBarListItem}>
						<List />
						<p>List</p>
					</a>
					<a href="" className={sideBarListItem}>
						<CalendarMonthOutlined />
						<p>Interview Schedule</p>
					</a>
					<a href="" className={sideBarListItem}>
						<InsertDriveFileOutlined />
						<p>Documents</p>
					</a>
					<a href="" className={sideBarListItem}>
						<FlightLandOutlined />
						<p>Arrival</p>
					</a>
					{/* Interns */}
					<li className={sideBarListTitle}>INTERNS</li>
					<a href="" className={sideBarListItem}>
						<List />
						<p>List</p>
					</a>
					<a href="" className={sideBarListItem}>
						<InsertDriveFileOutlined />
						<p>Documents</p>
					</a>
					<a href="" className={sideBarListItem}>
						<GroupOutlined />
						<p>Profile</p>
					</a>
					{/* End Internship */}
					<li className={sideBarListTitle}>END INTERNSHIP</li>
					<a href="" className={sideBarListItem}>
						<List />
						<p>List</p>
					</a>
					<a href="" className={sideBarListItem}>
						<InsertDriveFileOutlined />
						<p>Documents</p>
					</a>
					<a href="" className={sideBarListItem}>
						<FlightTakeoffOutlined />
						<p>Departure</p>
					</a>
				</ul>
			</div>
		</div>
	);
}
