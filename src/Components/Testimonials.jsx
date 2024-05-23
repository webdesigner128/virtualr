import React from 'react'
import { testimonials } from '../constants/index.jsx';
import { data } from 'autoprefixer';
const Testimonials = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide text-neutral-100 my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((data, index) => {
          return (
            <div key={index} className="px-4 py-2 w-full sm:w-1/2 lg:w-1/3">
              <div className=" font-thin p-6 bg-neutral  border border-neutral-800 rounded-md text-md ">
                <p>{data.text}</p>
                <div className="flex mt-8 items-start">
                  <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={data.image}
                    alt={data.user}
                  />

                  <div >
                    <h6> {data.user}</h6>
                    <span className="italic text-neutral-600 text-sm font-normal">
                      {data.company}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Testimonials;