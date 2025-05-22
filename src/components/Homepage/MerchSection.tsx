import Image from 'next/image'
import React from 'react'

const MerchSection = () => {
  return (
  <div className="py-3 px-4">
  <div className="px-4 sm:px-8 py-8 bg-[#0a0a23] text-white">
    <h2 className="text-lg sm:text-xl font-bold mb-6">COOL STUFF / MERCH</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* T-shirt */}
      <div className="bg-[#111827] hover:scale-105 transition-transform rounded-lg p-4 flex flex-col items-center shadow-lg border border-transparent hover:border-indigo-500">
        <Image
          src="/tshirt.png"
          alt="T-shirt"
          width={300}
          height={300}
          className="object-contain mb-4"
        />
        <span className="font-medium text-white">T-shirt</span>
      </div>

      {/* Sticker */}
      <div className="bg-[#111827] hover:scale-105 transition-transform rounded-lg p-4 flex flex-col items-center shadow-lg border border-transparent hover:border-purple-500">
        <Image
          src="/mug.png"
          alt="Sticker"
          width={200}
          height={200}
          className="object-cover mb-4"
        />
        <span className="font-medium text-white">Mugs</span>
      </div>

      {/* Digital Products */}
      <div className="bg-[#111827] hover:scale-105 transition-transform rounded-lg p-4 flex flex-col items-center shadow-lg border border-transparent hover:border-pink-500">
         <Image
          src="/tshirt.png"
          alt="T-shirt"
          width={300}
          height={300}
          className="object-contain mb-4"
        />
        <span className="font-medium text-white">Digital Products</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default MerchSection