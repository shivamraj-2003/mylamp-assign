import React from 'react'
import p8 from "../images/p8.png"
export default function Navbar() {
    return (
        <div className='px-8 flex mt-4 justify-between items-center'>
            <div className='flex space-x-2'>
                <img src={ p8 } />
                <h1 className='front-bold text-5xl text-violet-800 '>wiZ<span className='font-bold text-black text-5xl'>e</span></h1>
            </div>
            <div className='flex items-center space-x-6 px-10 justify-end'>
                <i class="text-4xl border-indigo-600 text-indigo-600 border-2 rounded-3xl p-2 w-14 h-14 fa-regular fa-bell"></i>
                <div className='flex border-2 rounded-3xl border-gray-400 p-4 h-12 w-36 items-center space-x-4'>
                    <h1 className='font-semibold'>Account</h1>
                    <i class="text-indigo-600 border-2 border-indigo-600 rounded-3xl p-2 w-20 h-10  text-xl fa-regular fa-user"></i>
                </div>
                <div className='flex border-2 rounded-3xl border-gray-400 p-4 h-12 w-36 items-center space-x-10'>

                    <h1 className=' font-semibold '>Menu</h1>
                    <i class="text-3xl text-indigo-700 fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
