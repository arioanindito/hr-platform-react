import Topbar from "../src/Components/Topbar";
import Sidebar from "../src/Components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div>
			<Topbar />
			{/* Main Container */}
			<div className="flex text-[#4F4F4F]">
				{/* Left Side */}
				<div className="flex flex-[1] bg-white drop-shadow-xl">
					<Sidebar />
				</div>
				{/* Right Side */}
				<div className="flex flex-[5] bg-[url('../src/images/dashboardBackground.png')] p-4">
					<Dashboard />
				</div>
			</div>
		</div>
	);
}

export default App;
