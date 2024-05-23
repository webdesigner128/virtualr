import React from 'react'
import { features, pricingOptions } from '../constants/index.jsx';
import { CheckCircle2 } from 'lucide-react';
const Price = () => {
    return (
        <div className="mt-20">
            <div className="flex text-3xl sm:text-5xl lg:text-6xl text-center justify-center tracking-wide">
                <h2 className="text-neutral-100"> Pricing </h2>
            </div>
            <div className="flex flex-wrap mt-5 p-2 ">
                {
                    pricingOptions.map((pricing, index) => {
                        return (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                <div className="border border-neutral-700 rounded-xl p-10">

                                    <p className="text-4xl mb-8">
                                        {pricing.title}
                                        {pricing.title == "Pro" &&
                                            (
                                                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                                    (Most Popular)
                                                </span>
                                            )}

                                    </p>
                                    <p className="mb-8 ">
                                        <span className="text-3xl text-neutral-200">{pricing.price}</span>
                                        <span>/Month</span>
                                    </p>
                                    <ul>
                                        {pricing.features.map((features, index) => {
                                            return (
                                                <li key={index} className="mt-8 flex items-center">
                                                    <CheckCircle2 />
                                                    <span className="ml-2"> {features}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <a href="#"
                                        className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 text-xl tracking-tight hover:bg-orange-900 border border-orange-900 transition duration-200 rounded-3xl"
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Price