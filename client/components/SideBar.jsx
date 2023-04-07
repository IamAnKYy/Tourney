import Image from 'next/image'
import React from 'react'

const SideBar = () => {
    const data = {

    }
    return (
        <div className='bg-gray-800 backdrop-blur-md h-screen p-3' >
            <input className='bg-white/30 focus:outline-none rounded-md w-full p-2 my-3' placeholder='Search Games' ></input>
            <div className='flex-col flex gap-2' >
            <div className='bg-white/75 backdrop-blur-md rounded-md  p-2 flex flex-row gap-2 items-center' > <img src='/img-og-pubg.jpg' className='w-10 h-10 rounded-full ' ></img>  <div>
                <div className="font-semibold text-md text-black">
                    Player unknown battle grounds
                </div>
                <div className="font-medium text-sm text-black">
                    Active events : 12
                </div>
            </div>
            </div>
            <div className='bg-white/75 backdrop-blur-md rounded-md  p-2 flex flex-row gap-2 items-center' > <img src='/img-og-pubg.jpg' className='w-10 h-10 rounded-full ' ></img>  <div>
                <div className="font-semibold text-md text-black">
                    Player unknown battle grounds
                </div>
                <div className="font-medium text-sm text-black">
                    Active events : 12
                </div>
            </div>
            </div>
            <div className='bg-white/75 backdrop-blur-md rounded-md  p-2 flex flex-row gap-2 items-center' > <img src='/img-og-pubg.jpg' className='w-10 h-10 rounded-full ' ></img>  <div>
                <div className="font-semibold text-md text-black">
                    Player unknown battle grounds
                </div>
                <div className="font-medium text-sm text-black">
                    Active events : 12
                </div>
            </div>
            </div>
            <div className='bg-white/75 backdrop-blur-md rounded-md  p-2 flex flex-row gap-2 items-center' > <img src='/img-og-pubg.jpg' className='w-10 h-10 rounded-full ' ></img>  <div>
                <div className="font-semibold text-md text-black">
                    Player unknown battle grounds
                </div>
                <div className="font-medium text-sm text-black">
                    Active events : 12
                </div>
            </div>
            </div>
             </div>
        </div>
    )
}

export default SideBar
