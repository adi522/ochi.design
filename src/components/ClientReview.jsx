import React from 'react'

function ClientReview() {
    return (

        <div className='w-full pb-28 '>
            <div className='px-14 w-full border-b-[1px] border-zinc-400 pb-10'>
                <h1 className='text-[3.5vw] '>Clients' reviews</h1>
            </div>
            <div className='px-14 flex justify-between mt-5'>
                <div className='left w-1/3 flex justify-between '>
                    <h1 className=''>Karman Ventures</h1>
                    <div>
                        <h1>Services:</h1>
                        <div className='flex flex-col mt-10 gap-3'>
                            <button className='rounded-full border-[2px] border-zinc-500 px-2 uppercase tracking-tight py-1'>Investor Deck</button>
                            <button className='rounded-full border-[2px] border-zinc-500 px-2 uppercase tracking-tight py-1'>Sales Deck</button>
                        </div>
                    </div>
                </div>
                <div className='right w-1/2 flex justify-between'>
                    <div className=''>
                        <h1 className=''>William Barnes</h1>
                        <div className='w-[14vh] h-[14vh] rounded-2xl mt-10 bg-slate-300'></div>
                        <div className='w-[75%]'>
                            <p className='text-lg mt-5'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='uppercase'>Read</h1>
                    </div>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-t-2 border-zinc-300 mt-10 flex justify-between items-center '>
                <h1>Planetly</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Nina Walloch</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Workiz Easy</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Tomer Levy</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Premium Blend</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Ellen Kim</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Hypercare Systems</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Brendan Goss</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Officevibe</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Raff Labrie</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Orderlion</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Stefan Strohmer</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Black Book</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>Jaci Smith</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>

            <div className='p-3 px-14 text-[1.2vw] border-b-2 border-zinc-300 flex justify-between items-center'>
                <h1>Trawa Energy</h1>
                <div className='w-1/2 flex justify-between'>
                    <h1 className='w-1/4'>David Budde</h1>
                    <h1 className='uppercase'>Read</h1>
                </div>
            </div>


        </div>

    )
}

export default ClientReview
