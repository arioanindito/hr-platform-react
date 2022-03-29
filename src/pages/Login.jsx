import React from "react";

export default function Login() {
	return (
		<div className=" h-screen py-20 px-[200px] text-gray-600">
			{/* Container */}
			<div className=" h-full flex">
				{/* Left Side */}
				<div className=" w-1/2 flex items-center justify-center">
					<img
						className="w-[400px]"
						src={require("../images/loginImage.png")}
						alt="loginImg"
					/>
				</div>

				{/* Right Side */}
				<div className=" w-1/2 flex flex-col items-center justify-center gap-12 pb-[60px]">
					<div className="w-full flex flex-col gap-5">
						{/* Image */}
						<div className="w-full flex justify-center">
							<img
								className="w-[200px]"
								src={require("../images/extramusLogo.png")}
								alt="loginImg"
							/>
						</div>
						{/* Title and Sub Title */}
						<div className="w-full flex flex-col items-center gap-1 mb-2">
							<p className="text-4xl">HR Platform Log In</p>
							<p>
								Log in with the data that you entered during your registration
							</p>
						</div>
					</div>

					{/* Input */}
					<div className="w-full flex flex-col items-center gap-4">
						<input
							class="p-3 border-[1px] bg-[#E4EBF7] rounded-md w-80"
							placeholder="Email"
						/>
						<div className="flex flex-col gap-2">
							<input
								type="password"
								class="p-3 border-[1px] bg-[#E4EBF7] rounded-md w-80"
								placeholder="Password"
							/>
							<a href="#" class="text-[#0070ba]">
								Forgot password?
							</a>
						</div>
					</div>

					{/* Submit Button */}
					<div className="w-full flex flex-col items-center gap-1">
						<button class=" w-60 bg-[#597EF7] rounded-xl p-3 text-white transition duration-200 hover:bg-[#003087]">
							Log In
						</button>
						<p class="">
							Don't have an account?{" "}
							<a href="#" className="text-[#0070ba]">
								Sign Up
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
