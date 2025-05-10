import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center min-h-[60vh] md:h-[70vh] bg-[#08090f] overflow-hidden'>
      {/* Gradient background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
        <div className='absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl'></div>
        <div className='absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl'></div>
      </div>

      {/* Left side - content */}
      <div className='flex flex-col gap-4 md:gap- z-10 w-full md:w-1/2 px-4 md:pl-12 py-12'>
        <h1 className='text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight'>
          Code Hard.
        </h1>
        <h1 className='text-5xl sm:text-6xl font-bold text-white leading-tight'>
          Meme Harder.
        </h1>
        
        <p className='text-lg sm:text-xl text-gray-400 max-w-lg'>
          Tech, Memes & Merch for Budding Coders
        </p>
        
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <button className='relative bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-3 rounded-lg text-md font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]'>
            Explore the Codeverse
            <span className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-md'></span>
          </button>
          
          <button className='px-6 py-3 rounded-lg border border-gray-700 text-md font-medium text-white hover:bg-gray-800/50 transition-all duration-300 shadow hover:scale-[1.02]'>
            Meme Gallery
          </button>
        </div>

        {/* Stats or social proof */}
        <div className='flex gap-6 mt-6 text-gray-400'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></div>
            <span>10k+ Happy Coders</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-purple-400 animate-pulse'></div>
            <span>1M+ Memes Shared</span>
          </div>
        </div>
      </div>

      {/* Right side - image */}
      <div className='relative z-10 w-full md:w-1/2 h-full flex justify-center md:justify-end items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]'>
          <Image
            src='/objectOrientedHeroImage.png'
            alt='hero image'
            fill
            className='object-contain drop-shadow-2xl'
            priority
          />
          {/* Glow effect */}
          <div className='absolute inset-0 bg-blue-500/10 rounded-full blur-2xl -z-10'></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection