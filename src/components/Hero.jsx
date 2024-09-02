import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO</p>
                <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'><span className='text-blue-400'>Revolutionize</span></h1>
                <h2>YOURSELF!!</h2>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably Jacked</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text="Accept & Begin"></Button>
        </div>
    )
}
