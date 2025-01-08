import { motion } from 'framer-motion';
import React from 'react'
import { IoArrowUpSharp } from "react-icons/io5";

function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='overflow-hidden'>
            <div className='textstructure mt-36 px-12'>
                {["we create", "eye opening", "presentations"].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-center'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "9vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className='w-[9vw] h-[5vw] bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] rounded-md -top-[1.2vw] mr-2'>
                                </motion.div>)}
                            <h1 className='uppercase text-[15vh] tracking-tighter leading-[7vw] font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-24 border-t-[1px] border-zinc-400 '>
                <div className='flex justify-between mt-5'>
                    {["For public and private companies", "From the first pitch to IPO"].map((elem, index) => (
                        <h2 key={index} className='px-12'>{elem}</h2>
                    ))}
                    <div className='flex items-center gap-1'>
                        <button className='uppercase border-2 border-zinc-600 px-4 py-1 rounded-full '>start the project</button>
                        <div className='w-8 h-8 mr-12 rounded-full border-2 border-zinc-600 flex items-center justify-center'>
                            <span className='rotate-[45deg]'>
                                <IoArrowUpSharp />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage