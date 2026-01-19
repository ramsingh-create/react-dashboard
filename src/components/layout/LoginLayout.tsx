import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { toggleMenu } from "../../store/screenSlice";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import { Outlet, useSearchParams } from "react-router-dom";
// import { login } from "../../store/authSlice";
// import { userInfo } from "../../store/userSlice";
import Footer from "./Footer";
import { setToken } from "../../store/authSlice";

export default function LoginLayout() {
    const dispatch = useDispatch<AppDispatch>();
    const { isMobile, isMenuOpen } = useSelector(
        (state: RootState) => state.screen,
    );
    const [searchParams] = useSearchParams();

    const [isOpen, setIsOpen] = useState(true);
    const [isHovered, setIsHovered] = useState(true);

    useEffect(() => {
        if (searchParams.get("token")) {
            const token = searchParams.get("token");
            if (token) {
                // dispatch(login(token));
                // dispatch(userInfo(token));
                setToken(token);
            }
        }
        else {
            const token = localStorage.getItem("token");
            if (token) {
                // dispatch(login(token));
                // dispatch(userInfo(token));
                setToken(token);
            }
        }
    }, [searchParams, dispatch]);

    return (
        <div className="bg-[#f8f8f8] relative min-h-screen flex dark:bg-black">
            {/* Desktop Sidebar */}
            <aside className=" hidden lg:flex layout-vertical-nav">
                <Sidebar
                    isOpen={isOpen}
                    isHovered={isHovered}
                    setIsOpen={setIsOpen}
                    setIsHovered={setIsHovered}
                />
            </aside>

            {/* Main Content Wrapper */}
            <div
                className={`layout-content-wrapper grow min-h-screen flex flex-col overflow-hidden layout-content-wrapper `}
                style={{
                    paddingInlineStart: !isMobile
                        ? isOpen || isHovered
                            ? ""
                            : "5rem"
                        : "",
                }}
            >
                {/* NavBar */}
                <header
                    style={{
                        marginLeft: !isMobile
                            ? isOpen || isHovered
                                ? "16rem"
                                : "5rem"
                            : "",
                    }}
                    className={`fixed ${isMobile ? "" : "p-4"} bg-lightGray top-0 right-0 left-0 z-10`}
                >
                    <NavBar onMenuClick={() => dispatch(toggleMenu())} />
                </header>

                {/* Mobile Sidebar Overlay */}
                {isMenuOpen && isMobile && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                        onClick={() => dispatch(toggleMenu())}
                    />
                )}

                {/* Mobile Sidebar */}
                <div
                    className={`
                    lg:hidden 
                    fixed 
                    left-0 
                    w-64 
                    bg-white 
                    h-[calc(100vh-4rem)] 
                    z-30
                    transform
                    transition-transform
                    duration-300
                    ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                >
                    <Sidebar
                        isOpen={isOpen}
                        isHovered={isHovered}
                        setIsOpen={setIsOpen}
                        setIsHovered={setIsHovered}
                    />
                </div>

                {/* Page Content */}
                <div className="rounded-md p-4 bg-lightGray flex-1 lg:mt-20 mt-12">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}
