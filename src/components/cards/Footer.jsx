import React from "react";

const Footer = () => {
    return (
        <footer className="bg-lightwhite text-white py-8 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold">Apna Restaurant</h2>
                        <p className="text-gray-400">Your Apna Restaurant here so Why go anywhere.</p>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="mb-4 md:mb-0 md:mr-10">
                            <h3 className="font-semibold mb-2">Links</h3>
                            <ul className="space-y-2 md:space-y-0 md:space-x-6 md:flex">
                                <li>
                                    <a href="/" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="/dishes" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                        Dishes
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Uncomment this section if you want to include social media links
                        <div>
                            <h3 className="font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition duration-300 ease-in-out">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        */}
                    </div>
                </div>

                <div className="text-center mt-6 border-t border-gray-700 pt-4">
                    <p className="text-sm text-black">
                        &copy; {new Date().getFullYear()} Apna Restaurant. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
