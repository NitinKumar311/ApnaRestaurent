// import React from "react";
// import { useForm } from "react-hook-form";

const ContactPage = () => {
    const onCall = () => {
        const phoneNumber = "919568174302"; // Number without the plus sign for tel links
        window.open(`tel:${phoneNumber}`);
    };

    const onWhatsApp = () => {
        const phoneNumber = "91***********"; // Number for WhatsApp links
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2020/03/28/14/53/fried-chicken-4977369_1280.jpg')"
            }}
        >
            <div className="max-w-lg w-full bg-transparent opacity-900  rounded-lg p-8 md:p-16 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r 
      from-red-400 via-yellow-400 to-white bg-clip-text text-transparent">
                    Connect with Us
                </h2>


                <p className="text-center text-white mb-12">
                    Choose an option to reach us:
                </p>

                {/* Contact Options */}
                <div className="space-y-6">
                    {/* Call Button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={onCall}
                            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-teal-700 hover:shadow-lg focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 transform hover:scale-105"
                        >
                            Call Us: +91-95********
                        </button>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={onWhatsApp}
                            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-teal-700 hover:shadow-lg focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 transform hover:scale-105"
                        >
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
