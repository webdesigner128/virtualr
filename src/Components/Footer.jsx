import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants/index.jsx';
const Footer = () => {
    return (
        <footer className="mt-20 border-t border-neutral-800 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {
                            resourcesLinks.map((resources, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className="text-neutral-500 hover:text-white"
                                            href={resources.href}
                                        >
                                            {resources.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Community
                    </h3>
                    <ul className="space-y-2">
                        {
                            communityLinks.map((resources, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className="text-neutral-500 hover:text-white"
                                            href={resources.href}
                                        >
                                            {resources.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">
                      Platform
                    </h3>
                    <ul className="space-y-2">
                        {
                            platformLinks.map((resources, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className="text-neutral-500 hover:text-white"
                                            href={resources.href}
                                        >
                                            {resources.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer