import React from 'react'
import p6 from "../images/p6.jpg"
import p7 from "../images/p7.png"

import p4 from "../images/p4.webp"
import p5 from "../images/p5.webp"
import p10 from "../images/p10.png"
import p11 from "../images/p11.png"
import p12 from "../images/p12.png"
import p13 from "../images/p13.png"
import p14 from "../images/p14.png"
import p15 from "../images/p15.png"
import p16 from "../images/p16.png"
import p17 from "../images/p17.png"
import p18 from "../images/p18.png"
import Calenderview from './Calenderview'
import Code from "./Code"
export default function Content({ value, val }) {
    const colors = ['bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600'];

    return (
        <div className='bg-gray-100'>
            <div className='border-t-2 pb-24 flex px-6 mt-2'>
                <div className='mt-4 space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <i class="text-xl text-gray-400 fa-solid fa-house"></i>
                        <h1 className='font-semibold text-gray-400 text-2xl'>Home</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img src={ p10 } />
                        <h1 className='font-semibold text-gray-400 text-2xl'>Explore</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img src={ p11 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>learn</h1>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img src={ p12 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Achieve</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p18 } />

                        <h1 className='font-semibold text-violet-600 text-2xl'>Practice</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p13 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Projects</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p14 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Career</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p15 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Mentorship</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p16 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Blogs</h1>
                    </div >
                    <div className='flex items-center space-x-2'>
                        <img src={ p17 } />

                        <h1 className='font-semibold text-gray-400 text-2xl'>Community</h1>
                    </div >
                    <div className='bg-violet-500 boredr rounded-xl h-24 w-40'>
                    </div>
                    <div className='bg-gray-200 h-20 w-44'>
                        <h1 className=' mt-2 text-center text-lg font-bold'>Connect With us</h1>
                        <div className=' px-2 space-x-2'>
                            <i class=" text-green-500 text-2xl fa-brands fa-whatsapp"></i>
                            <i class=" text-2xl text-blue-500 fa-brands fa-linkedin"></i>
                            <i class=" text-2xl text-red-500 fa-brands fa-instagram"></i>
                            <i class=" text-2xl text-indigo-400 fa-brands fa-discord"></i>

                            <i class="text-2xl text-red-500 fa-brands fa-youtube"></i>

                        </div>

                    </div>
                </div>
                <div className='mx-6'>




                    <div className='flex space-x-96 items-center text-center'>

                        <h1 className='mt-4 text-xl font-bold'>All Assesments</h1>
                        <h1 className='font-bold text-violet-500 text-xl'>See All</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='flex border bg-white rounded-lg h-40 w-2/4  mt-2 space-x-2'>
                            <div className='mt-4 ml-2'>
                                <h1 className='font-bold text-xl'>Quizzes</h1>
                                <button className='border mt-16 text-white font-bold rounded-3xl bg-violet-600 h-10 w-32'>Start</button>
                            </div>
                            <img className='h-32 mt-8' src={ p5 } />
                        </div>
                        <div className='flex border-2 rounded-lg h-40 w-2/4 bg-white mt-2 space-x-2'>
                            <div className='mt-4 ml-2'>
                                <h1 className='font-bold text-xl'>Coding</h1>
                                <button className='border mt-16 text-white font-bold rounded-3xl bg-violet-600 h-10 w-32'>Start</button>

                            </div>
                            <img className='h-32 mt-8' src={ p4 } />
                        </div>
                    </div>
                    <Code />

                    <div className='flex space-x-2'>
                        <div className='flex border bg-white rounded-lg h-40 w-2/4  mt-2 space-x-2'>
                            <div className='mt-4 ml-2'>
                                <h1 className='font-bold text-xl'>Case<br />Study</h1>
                                <button className='border mt-8 text-white font-bold rounded-3xl bg-violet-600 h-10 w-32'>Practice</button>
                            </div>
                            <img className='h-32 mt-8' src={ p6 } />
                        </div>
                        <div className='flex border-2 rounded-lg h-40 w-2/4 bg-white mt-2 space-x-2'>
                            <div className='mt-4 ml-2'>
                                <h1 className='font-bold text-xl'>Produce<br />teardown</h1>
                                <button className='border mt-8 text-white font-bold rounded-3xl bg-violet-600 h-10 w-32'>Practice</button>

                            </div>
                            <img className='h-32 mt-8' src={ p7 } />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white border mt-4 rounded-xl h-96 w-full'>
                        <div className='flex mt-10 px-20 space-x-24'>
                            <div class="relative size-40">
                                <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                                    <g class="origin-center -rotate-90 transform">
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
                                    </g>
                                </svg>
                                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <p class="text-center text-2xl font-bold text-gray-800 dark:text-white">{ value }</p>

                                    <p class="text-center text-xl font-bold text-gray-800 dark:text-white">Assesment</p>
                                    <p class="text-center text-xl font-bold text-gray-800 dark:text-white">Taken</p>

                                </div>
                            </div>
                            <div class="relative size-40">
                                <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                                    <g class="origin-center -rotate-90 transform">
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
                                    </g>
                                </svg>
                                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <p class="text-center text-2xl font-bold text-gray-800 dark:text-white">{ val }</p>

                                    <p class="text-center text-xl font-bold text-gray-800 dark:text-white">Questions</p>
                                    <p class="text-center text-xl font-bold text-gray-800 dark:text-white">Solved</p>

                                </div>
                            </div>
                        </div>
                        <h1 className='border-t-2 mx-10 mt-4'></h1>
                        <div className='mx-14 mt-4 flex space-x-60'>
                            <h1 className='text-xl font-bold'>Badges</h1>
                            <h1 className='text-xl font-bold'>Focused area</h1>

                        </div>

                    </div>
                    <div className='flex '>

                        <h2 className="text-xl font-bold mt-6 mb-2">Apr 2024 - Jun 2024 <i class="ml-2 fa-solid fa-caret-down"></i></h2>
                        <i class="fa-solid ml-56 text-black border-2 border-gray-300 p-2 rounded-2xl h-8 w-10 fa-less-than mt-6"></i>

                        <i class="fa-solid text-gray-500  border-2 border-gray-300 p-2 rounded-2xl h-8 w-10  mt-6 mx-2 fa-greater-than"></i>
                    </div>
                    <div className='flex space-x-6 justify-center'>
                        <Calenderview />
                        <Calenderview />
                        <Calenderview />

                    </div>
                    <div className="flex items-center">
                        <div className="flex  mt-4">
                            <div className="flex items-center mr-4">
                                { colors.map((color, i) => (
                                    <div
                                        key={ i }
                                        className={ `w-6 h-8 rounded-lg ${color} mr-1` }
                                        style={ { filter: 'brightness(80%)' } }
                                    ></div>
                                )) }
                                <span className="ml-2">Questions</span>
                            </div>

                        </div>

                        <div className="w-4 h-4 rounded-lg bg-yellow-400 mr-1"></div>
                        <span>POTD question</span>
                    </div>
                    <div className="mt-2">
                        <span>Current Streak: 0</span>
                        <span className="ml-4">Max Streak: 0</span>
                        <span className="ml-4">Global Max Streak: 45</span>
                    </div>
                </div>
            </div >

        </div>
    )
} 
