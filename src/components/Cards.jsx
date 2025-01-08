import React from 'react';

function Cards() {
    return (
        <div className='w-full px-14 pb-40 flex gap-3'>
            <div className='left relative w-1/2 bg-[#004D43] h-[55vh] rounded-xl'>
                <div className='image flex flex-col items-center justify-center h-full'>
                    <img className='w-40 mx-auto' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-8 bottom-7 px-4 py-1 text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-full'>
                        &copy; 2019-2022
                    </button>
                </div>
            </div>
            <div className='w-1/2 flex gap-3'>
                <div className='relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center'>
                    <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-10 bottom-8 px-4 py-1 text-white border-[1px] border-white rounded-full uppercase'>rating 5.0 on clutch</button>
                </div>
                <div className='relative  w-1/2 h-[55vh] rounded-xl bg-[#212121] flex items-center justify-center'>
                    <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-10 bottom-8 px-4 py-1 text-white border-[1px] border-white rounded-full uppercase'>business bootcamp alumni</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;
