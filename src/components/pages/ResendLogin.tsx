import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import illustrationSendEmail from "../../assets/images/Illustration_SendEmail.png";
import { useNavigate } from "react-router-dom";

export const ResendLogin: React.FC = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    const handleSendOtp = () => {
        if (!email) {
            setEmailError(true);
            return;
        }
        // Add OTP send logic here
    };


    const backToLogin = () => {
        //navigation logic to go back to login page
        navigate("/SupermoneyLogin2");
    }

    return (
        <div id="page-login" className="grid grid-cols-1 md:grid-cols-12 min-h-screen ">
            {/* Left Side (Image + Logo) */}
            <div className="hidden md:flex md:col-span-8 flex-col bg-[#f8f8f8]">
                {/* Logo */}
                <div className="w-full p-6">
                    <img src={logo} alt="logo" className="h-10" />
                </div>

                {/* Illustration */}
                <div className="flex flex-1 items-center justify-center">
                    <img
                        src={illustrationSendEmail}
                        alt="illustration"
                        className="max-w-2xl w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Right Side (Forgot Password Form) */}
            <div className="col-span-12 md:col-span-4 flex items-center justify-center px-6 py-10 bg-white">
                <div className="w-full max-w-sm text-[#6e6b7b]">
                    {/* Heading */}
                    <h1 className="text-2xl font-bold ">Forgot Password</h1>
                    <p className="text-sm  mt-2">
                        Please enter your email address and we'll send you a 6-digit OTP to reset.
                    </p>

                    {/* Email Input */}
                    <div className="mt-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium "
                        >
                            Email
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your email"
                            />
                            <i className="absolute right-3 top-2.5 text-gray-400 feather icon-user"></i>
                        </div>
                        {emailError && (
                            <span className="text-xs text-red-500 block text-center mt-1">
                                Email is required
                            </span>
                        )}
                    </div>

                    {/* Send OTP Button */}
                    <div className="mt-6">
                        <button
                            onClick={handleSendOtp}
                            type="button"
                            className="w-full py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Send OTP
                        </button>
                    </div>

                    {/* Back to Login */}
                    <div className="mt-4 flex justify-center">
                        <button
                            type="button"
                            className="text-sm text-indigo-600 hover:underline"
                            onClick={backToLogin}
                        >
                            Back To Login
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};