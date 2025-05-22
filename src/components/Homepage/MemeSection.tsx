import Image from 'next/image'
import React from 'react'

const MemeSection = () => {
  const memes = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/74/43/8e/74438e82194e6bd7007b8cc8e920e5c7.jpg"

    },
    {
      id: 2 ,
      url : "https://i.pinimg.com/736x/81/a6/88/81a688ebd474f6267e6b70aa0d10ba41.jpg"

    },
    {
      id:3 ,
      url :"https://i.pinimg.com/736x/d5/6f/1f/d56f1fcbade351d1f55a6c8e72325fa6.jpg"

    },
  ]
 return (
  <div className="py-3 px-4">
    <div className="text-white font-semibold text-xl mb-4 text-center md:text-start">
      LATEST MEMES
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      {memes.map((meme, index) => (
        <div
          key={`${meme.url}-${index}`}
          className="w-[90%] md:w-[95%] bg-gradient-to-r from-blue-600 to-purple-700 p-[2px] rounded-md shadow-lg"
        >
          <div className="bg-black rounded-md overflow-hidden">
            <Image
              src={meme.url.trimStart()}
              alt="meme"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);


}

export default MemeSection