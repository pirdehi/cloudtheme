import React from "react";

import {
    FaTelegram,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'



const Footer = () => {
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-2">Marketing</li>
                        <li className="py-2">Analytics</li>
                        <li className="py-2">Commerce</li>
                        <li className="py-2">Data</li>
                        <li className="py-2">Cloud</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-2">Documentation</li>
                        <li className="py-2">Guides</li>
                        <li className="py-2">Api Doc</li>
                        <li className="py-2">Communities</li>
                        <li className="py-2">Events</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Pricing</h6>
                    <ul>
                        
                        <li className="py-2">For Startups</li>
                        <li className="py-2">Standard</li>
                        <li className="py-2">Premium</li>
                        <li className="py-2">Enterprise</li>
                        
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-2">About</li>
                        <li className="py-2">Blog</li>
                        <li className="py-2">Work with us</li>
                        <li className="py-2">Our team</li>
                        <li className="py-2">Partners</li>
                    </ul>
                </div>

                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletter</p>
                    <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row ">
                        <input className="w-fill p-2 mr-4 rounded-md mb-4" type="email" /> 
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex max-w-[1240px] m-auto justify-between items-center sm:flex-row text-center text-gray-500">
            <p>2022 Omid Pirdehi, MIT license</p>
                <div className="flex justify-between  sm:w-[300px] pt-4 text-2xl">
                    <FaTelegram />
                    <FaInstagram />
                    <FaGithub />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}


export default Footer;