import React, {useState} from 'react'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
    const Navbar = () => {
        const [nav, setNav] = useState(false)
        const handleClick = () => setNav(!nav)

        return (
            <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      
                <div className="flex items-center justify-around  h-full px-2   w-full">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-light mr-[120px] sm:text-4xl text-indigo-900 ">Coudlberi</h1>
                        <ul className="hidden md:flex">
                            <li>Home</li>
                            <li>About</li>
                            <li>Support</li>
                            <li>platforms</li>   
                            <li>pricing</li>                                
                        </ul>
                    </div>
                    <div className="hidden md:flex pr-6">
                        <button className="bg-transparent text-indigo-900">Sign In</button>
                        <button>Sign Up</button>

                    </div>

                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <Bars3Icon className="w-6 m-2"/> : <XMarkIcon className="w-6 m-2"/>}
                        
                    </div>
                </div>
             
                <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                    <li className="border-b-2 border-zinc-300 w-full">Home</li>
                    <li className="border-b-2 border-zinc-300 w-full">About</li>
                    <li className="border-b-2 border-zinc-300 w-full">Support</li>
                    <li className="border-b-2 border-zinc-300 w-full">platforms</li>   
                    <li className="border-b-2 border-zinc-300 w-full">pricing</li>
                    <div className="flex justify-end">
                        <button className="bg-transparent text-indigo-900">Sign In</button>
                        <button>Sign Up</button>
                    </div>
               
                </ul>
                
            </div>
           
           
        )
    }
    

    

    export default Navbar