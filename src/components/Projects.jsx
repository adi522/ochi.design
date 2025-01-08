import { motion, useAnimation } from "framer-motion";
import React from "react";

function Projects() {
    const cards = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className="w-full py-20">
            <div className="w-full px-[4.5vw] border-b-[1px] border-zinc-700 pb-10">
                <h1 className="text-[4vw] tracking-tighter">Featured Projects</h1>
            </div>
            <div className='flex justify-start px-14 mt-10'>
                <div className='w-1/2 flex items-center gap-2 mb-4'>
                    <div className='w-2.5 h-2.5 rounded-full bg-black'></div>
                    <h1 className='uppercase '>Cardboard Spaceship</h1>
                </div>
                <div className='w-1/2 flex items-center gap-2 mb-4 pl-7'>
                    <div className='w-2.5 h-2.5 rounded-full bg-black'></div>
                    <h1 className='uppercase '>AH2 & Matt Horn</h1>
                </div>
            </div>

            <div className="cards w-full flex gap-[0.4vw] px-[4.5vw] pb-10">
                <motion.div
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"Cardboard Spaceship".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>Branded Template</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>sales deck</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>social media template</button>
                    </div>
                </motion.div>


                <motion.div
                    onHoverStart={() => handleHover(1)}
                    onHoverEnd={() => handleHoverEnd(1)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"AH2 & Matt Horn".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>pitch deck</button>
                    </div>
                </motion.div>
            </div>


            <div className="cards w-full flex gap-[0.4vw] pt-[6vw] px-[4.5vw] pb-10">
                <motion.div
                    onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute uppercase flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"FYDE".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[2]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>audit</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>copywriting</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>sales deck</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>slides design</button>
                    </div>

                </motion.div>


                <motion.div
                    onHoverStart={() => handleHover(3)}
                    onHoverEnd={() => handleHoverEnd(3)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute uppercase flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"VISE".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[3]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>agency</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>company presentation</button>
                    </div>
                </motion.div>
            </div>

            <div className="cards w-full flex gap-[0.4vw] pt-[6vw] px-[4.5vw]">
                <motion.div
                    onHoverStart={() => handleHover(2)}
                    onHoverEnd={() => handleHoverEnd(2)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute uppercase flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"TRAWA".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[2]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>Branded Template</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>sales deck</button>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>social media template</button>
                    </div>

                </motion.div>


                <motion.div
                    onHoverStart={() => handleHover(3)}
                    onHoverEnd={() => handleHoverEnd(3)}
                    className="card relative w-1/2 h-[78vh]"
                >
                    <h1 className="absolute uppercase flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
                        {"PREMIUM BLEND".split("").map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%" }}
                                animate={cards[3]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                                className="inline-block"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <img
                        className="rounded-lg overflow-hidden"
                        src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                        alt=""
                    />
                    <div className='flex gap-3 mt-5'>
                        <button className='uppercase rounded-full border-[1px] border-zinc-600 px-3 py-1'>Branded Template</button>
                    </div>
                </motion.div>
            </div>


            <div className="grid place-items-center mt-[25vh]">
                <button className="group flex gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-800 rounded-full text-white hover:bg-black">
                    View All Case Studies
                    <div className="group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-white"></div>
                </button>
            </div>






        </div>
    );
}

export default Projects;



