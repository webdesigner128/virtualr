import React from 'react'
import { checklistItems } from '../constants/index.jsx';
import { CheckCircle2 } from 'lucide-react';
import codeImg from '../Assests/code.jpg'
const Workflow = () => {
    return (
        <div className="mt-10">
            <div className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                <h2>
                    Accelerate Your {" "}
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        coding workflow .
                    </span>
                </h2>
            </div>
            <div className = "flex flex-wrap justify-center">
                <div className=" p-2 w-full  lg:w-1/2">
                  <img src={codeImg} alt="Code" />
                </div>
                <div className="flex flex-col p-2 w-full  lg:w-1/2">
                    {checklistItems.map((list, index) => {
                        return (
                            <div key={index} className="flex  mb-12">
                            <div className=" text-green-400  p-3 w-10 h-10 justify-center items-center rounded-full mx-6 bg-neutral-900">
                            <CheckCircle2 />
                            </div>
                            <div >
                                <h5 className="text-xl mt-1 mb-2">{list.title}</h5>
                                <p className="text-neutral-500 pt-2 justify-center ">
                                    {list.description}
                                </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Workflow