import React from 'react'
import { Link } from "react-router-dom";
import error404 from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Error404 = () => {
        
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const backToHomeClick = () => {
        navigate("/");
    };
  return (
    <>
    <div className="h-screen flex w-full bg-img">
      <div className="flex flex-col items-center justify-center text-center sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto">
        <img
          src={error404}
          alt="graphic-404"
          className="mx-auto mb-4 max-w-full"
        />
        <h1 className="mx-4 sm:mx-0 mb-12 text-5xl d-theme-heading-color">
          404 - Page Not Found!
        </h1>
        <button
        //   to="/"
          onClick={backToHomeClick}
          className="px-6 py-3 text-white bg-[#43660a] hover:bg-blue-700  text-lg font-medium transition"
        >
          Back to Home
        </button>
        {/* <Link
          to="/"
          className="px-6 py-3 text-white bg-[#43660a] hover:bg-blue-700 rounded-lg text-lg font-medium transition"
        >
          Back to Home
        </Link> */}
      </div>
    </div>

    </>
  )
}
