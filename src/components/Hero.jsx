import React from 'react';
import {
    CloudIcon,
    CircleStackIcon,
    PaperAirplaneIcon,
    ServerStackIcon
} from '@heroicons/react/24/outline'
import CloudImg from '../assets/cloud.png'

const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl pb-3'>Unique Sequencing & Production</p>
                    <h1 className='pb-3 text-4xl sm:text-7xl md:text-7xl  font-bold'>Cloud management</h1>
                    <p className='text-2xl pb-3'>This is our Cloud hosting</p>
                    <button className='pb-3 px-6 sm:w-[60%]'>Get started</button>
                </div>

                <div>
                    <img className='w-full sm:mb-11' src={CloudImg} alt=""/>
                </div>

          
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] 
                                 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
                                 border border-slate-300 
                                 rounded-xl text-center shadow-xl sm:max-w-[200px]'>
                    <p className='mb-4'>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-[5%] py-2 text-slate-600'><CloudIcon className='h-6 text-indigo-700'/> App Security</p>
                        <p className='flex px-[5%] py-2 text-slate-600'><CircleStackIcon className='h-6 text-indigo-700'/> Dashboard Design</p>
                        <p className='flex px-[5%] py-2 text-slate-600'><PaperAirplaneIcon className='h-6 text-indigo-700'/> Cloud Data</p>
                        <p className='flex px-[5%] py-2 text-slate-600 '><ServerStackIcon className='h-6 text-indigo-700'/> API </p>
                    </div>
                </div>
           
            </div>           
        </div>

    );
}


export default Hero