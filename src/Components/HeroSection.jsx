import React from 'react'
import video1 from '../Assests/video1.mp4'
import video2  from '../Assests/video2.mp4'
function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 text-transparent bg-clip-text">
                    {" "} for developers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className=" py-3 px-4 border mx-3 rounded-md">
                    Documentation
                </a>
            </div>
            <div className="flex  justify-center mt-10">
                <video 
                  autoPlay 
                  loop
                  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src ={video1} type = "video/mp4" />
                Your browser does not support the video
                </video>
                <video 
                  autoPlay 
                  loop
                  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src ={video2} type = "video/mp4" />
                Your browser does not support the video
                </video>
            </div>

        </div>
    )
}

export default HeroSection