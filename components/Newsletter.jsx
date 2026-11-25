import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <div className='mx-5 sm:mx-8 my-24 rounded-[2rem] border border-emerald-100 bg-emerald-50/60 px-5 py-16 text-center sm:mx-auto sm:max-w-7xl'>
            <div className='flex flex-col items-center'>
            <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
            <div className='flex bg-white text-sm p-1.5 rounded-full w-full max-w-xl mt-8 border border-slate-200 shadow-sm'>
                <input className='flex-1 min-w-0 pl-5 outline-none' type="text" placeholder='Enter your email address' />
                <button className='font-semibold bg-slate-950 text-white px-5 sm:px-7 py-3 rounded-full hover:bg-emerald-700 active:scale-95 transition'>Get Updates</button>
            </div>
            </div>
        </div>
    )
}

export default Newsletter