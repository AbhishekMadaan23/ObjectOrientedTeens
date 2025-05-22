import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="py-3 px-4 mb-8">
      <div className='flex justify-between'>
        {/* left side  */}
        <div className=''>
          <h1 className='text-pink-800 text-bold text-4xl tracking-wide'>Made by teen who know their semicolons</h1>
          <div className='flex gap-2 text-pink-800 mt-4'>
            <div className='border-2 border-pink-800 rounded-full p-2'>

            <Instagram />
            </div>
           <div className='border-2 border-pink-800 rounded-full p-2'>

            <Facebook />
            </div>
            <div className='border-2 border-pink-800 rounded-full p-2'>

            <Twitter />
            </div>
          </div>


        </div>
        {/* right side  */}
        <div>
          <button className='px-4 py-2 border-cyan-400 border-2 rounded-3xl cursor-pointer bg-cyan-700/20 backdrop-blur-xl shadow-lg  hover:shadow-cyan-500/60 transition-all duration-300'>
            Sign up
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Footer