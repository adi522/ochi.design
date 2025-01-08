import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='w-full h-full overflow-hidden'>
            <div data-scroll data-scroll-speed="-0.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='flex gap-10 absolute left-[52%] top-[35%] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative'>
                            <h1 className='absolute left-1/2 top-1/2 text-white text-xl uppercase translate-x-[-50%] translate-y-[-50%]'>Play</h1>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[40%]'>
                                <div className='w-5 h-5 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative'>
                            <h1 className='absolute left-1/2 top-1/2 text-white text-xl uppercase translate-x-[-50%] translate-y-[-50%]'>Play</h1>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[40%]'>
                                <div className='w-5 h-5 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
