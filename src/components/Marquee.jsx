import React from "react";
import { motion } from "framer-motion";

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full bg-[#004D43] rounded-t-2xl mt-28">
            <div className="w-full py-28">
                <div className="w-full border-t-2 border-b-2 border-zinc-500 flex flex-shrink-0 overflow-hidden">
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 3, repeatType: "loop" }}
                        className="text-white text-[18vw] font-bold whitespace-nowrap ml-5 uppercase pr-10">
                        We are ochi
                    </motion.h1>
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 3, repeatType: "loop" }}
                        className="text-white text-[18vw] font-bold whitespace-nowrap ml-5 uppercase pr-10">
                        We are ochi
                    </motion.h1>

                </div>
            </div>
        </div>
    );
}

export default Marquee;
