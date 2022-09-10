import React from "react";

const About = () => {
    return (

        <div className="w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">Trusted by Developers and heros across the world</h2>
                    <p className="text-2xl py-6 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nulla autem aliquid nihil quidem, dolore impedit distinctio ipsa quae eum error sed praesentium ipsum voluptates eaque, eveniet fugit commodi! Blanditiis.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                    <div className="border py-8 rounded-xl shadow-xl"> 
                        <p className="text-6xl font-bold text-indigo-600">100%</p>
                        <p className="text-1xl text-gray-400 my-4">completion</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-indigo-600">24/7</p>
                        <p className="text-1xl text-gray-400 my-4">Support</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-indigo-600">100K</p>
                        <p className="text-1xl text-gray-400 my-4 ">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About