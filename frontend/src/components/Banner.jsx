import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Inject Zapier chatbot script
        const script = document.createElement('script');
        script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
        script.async = true;
        script.type = 'module';
        document.body.appendChild(script);
    }, []);

    return (
        <div className='flex flex-col bg-[#FF7F7F] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ------- Top Section: Heading ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </div>
            </div>

            {/* ------- Middle Section: Chatbot & Image ------- */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">

                {/* Chatbot Section */}
                <div className="flex-1 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
                    <h3 className="text-lg font-semibold text-[#595959] mb-2">Need Help? Chat with Us! 💬</h3>
                    <zapier-interfaces-chatbot-embed 
                        is-popup="false" 
                        chatbot-id="cm8y9bnzs000n4dehbgi8l1ss" 
                        height="400px" 
                        width="100%">
                    </zapier-interfaces-chatbot-embed>
                </div>

                {/* Image beside the chatbot */}
                <div className="flex-1 hidden md:block">
                    <img className="w-full h-auto rounded-lg" src={assets.appointment_img} alt="Doctor Appointment" />
                </div>

            </div>

            {/* ------- Bottom Section: Blood Donation Form ------- */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
                <h2 className="text-xl font-bold text-red-600 mb-4">❤️ Be a Lifesaver! Donate Blood Today! ❤️</h2>
                <p className="text-gray-600 mb-4">
                    "Your blood donation can give someone a second chance at life. Join the community of heroes!"
                </p>

                {/* Form */}
                <form action="https://formsubmit.co/sivabhargav738@gmail.com" method="POST">
                    {/* Name */}
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" required 
                        className="w-full border border-gray-300 p-2 rounded-md mb-3"
                    />

                    {/* Age */}
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" name="age" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3"
                    />

                    {/* Blood Group */}
                    <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                    <select name="bloodGroup" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3">
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>

                    {/* Phone */}
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3"
                    />

                    {/* Email */}
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3"
                    />

                    {/* Are you a donor? */}
                    <label className="block text-sm font-medium text-gray-700">Are you a Blood Donor?(If You Want Blood Select No)</label>
                    <select name="donor" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3">
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    {/* Location */}
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" name="location" required
                        className="w-full border border-gray-300 p-2 rounded-md mb-3"
                    />

                    {/* Submit Button */}
                    <button type="submit" 
                        className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition-all">
                        Submit Details 🚑
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Banner;
