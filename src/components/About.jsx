import React from 'react';

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full min-h-screen bg-[#CDEA68] rounded-3xl'>
            <div className='mx-auto max-w-screen-2xl'>
                <div className='text-[4vw] px-14 py-20 leading-none tracking-tighter'>
                    <p>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
                </div>
            </div>

            <div className='flex border-t-[1px] border-b-[1px] border-[#b4c671]'>
                <div className='flex px-14 mt-7 gap-[13vw] w-1/3'>
                    <h2 className='mr-[12vh]'>What you can expect:</h2>
                </div>
                <div className='flex flex-col mx-auto max-w-screen-2xl w-1/6 mt-7 gap-8'>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                    </p>
                    <p>
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </div>
                <div className='flex flex-col mt-[7vw] w-1/6 mb-[8vw]'>
                    <h1 className='mb-8'>S:</h1>
                    <h1>Instagram</h1>
                    <h1>Behance</h1>
                    <h1>Facebook</h1>
                    <h1>LinkedIn</h1>
                </div>
            </div>

            <div className=' flex gap-10 px-14 mt-10'>
                <div className='w-1/2'>
                    <h1 className='font-semibold w-1/2 text-[3vw] text-[#212121] whitespace-nowrap'>Our approach:</h1>
                    <button className='flex gap-8 items-center px-7 py-4 bg-[#222222] text-white rounded-full uppercase mt-5'>Read More
                        <div className='w-2 h-2 rounded-full bg-zinc-50'></div>
                    </button>
                </div>
                <div className='h-[72vh] w-1/2 rounded-md overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default About;
