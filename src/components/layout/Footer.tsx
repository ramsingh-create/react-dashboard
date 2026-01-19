import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

export default function Footer() {
    return (
        <footer className="bg-white px-4 pt-4 bg-lightGray dark:bg-black ">
            <div className="bg-white border-b shadow-md py-3 px-6 rounded-t-lg dark:bg-gray-300">
                <div className="font-bold text-gray-500 lg:grid grid-cols-2 gap-4">
                    <div className="p-2 lg:p-0">
                        <span className="">COPYRIGHT © {new Date().getFullYear()} </span>
                    </div>
                    <div className="p-1 lg:p-0 lg:flex gap-6 justify-end" style={{ color: '#4B465C' }}>
                        <div className="p-1 lg:p-0 flex gap-2">
                            <img src={linkedin} alt="Logo" className="h-4 inline-block" />
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className="p-1 lg:p-0 flex gap-2">
                            <img src={twitter} alt="Logo" className="h-4 inline-block" />
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Twitter
                            </a>
                        </div>
                        <div className="p-1 lg:p-0 flex gap-2">
                            <img src={facebook} alt="Logo" className="h-4 inline-block" />
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2 font-bold text-gray-500 lg:grid grid-cols-2 gap-4">
                    <div className="p-2 lg:p-0">
                        <span className="" style={{ color: '#674AF5' }}>Supermoney (GetClarity Fintech Services Pvt Ltd)</span>
                        <span className="ml-4">All rights reserved.</span>
                    </div>
                    <div className="p-1 lg:p-0 lg:flex gap-6 justify-end" style={{ color: '#674AF5' }}>
                        <div className="p-1 lg:p-0">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div className="p-1 lg:p-0">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Disclaimer
                            </a>
                        </div>
                        <div className="p-1 lg:p-0">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
