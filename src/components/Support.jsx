import React from "react";

import { PhoneIcon, ArrowSmallRightIcon} from '@heroicons/react/24/outline';
import { CpuChipIcon, LifebuoyIcon} from '@heroicons/react/24/outline';

import supportImg from '../assets/support.png'

const Support = () => {
    return (
        <div className="w-full  mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="support" />
            </div>
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="text-1xl pt-8 text-slate-300 uppercase text-center">Support</h2>
                    <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
                    <p className="py-4 text-2xl text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, culpa dolores. Deleniti facilis rerum voluptas harum expedita labore fugiat deserunt! Omnis libero veritatis debitis tempora rerum voluptatum adipisci cumque repellat.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3  relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 lg:mx-[10%] md:mx-[8%]">
                <div className="bg-white rounded-xl shadow-2xl ">
                    <div className="p-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-60px]"/>
                        <h3 className="font-bold text-2xl my-6">Sales</h3>
                        <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis ipsum magni molestiae vero accusantium sequi quisquam adipisci ab ipsam.</p>
                    </div>
                    <div className="bg-slate-100 px-8 py-4">
                        <p className="flex item-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2" /></p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl ">
                    <div className="p-8">
                        <LifebuoyIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-60px]"/>
                        <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                        <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis ipsum magni molestiae vero accusantium sequi quisquam adipisci ab ipsam.</p>
                    </div>
                    <div className="bg-slate-100 px-8 py-4">
                        <p className="flex item-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2" /></p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl ">
                    <div className="p-8">
                        <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-60px]"/>
                        <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
                        <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis ipsum magni molestiae vero accusantium sequi quisquam adipisci ab ipsam.</p>
                    </div>
                    <div className="bg-slate-100 px-8 py-4">
                        <p className="flex item-center text-indigo-600">Contact Us <ArrowSmallRightIcon className="w-5 ml-2" /></p>
                    </div>
                </div>
            </div>
            

        </div>

    )
}

export default Support