import axios from 'axios'
import Image from 'next/image'
import React  from 'react'

const getTournaments = () => {
const searchTournament = async (e) => {
const tournaments = await axios.get("https://localhost:5000/getTournamentByKeyword" , {e})
}
const data = [
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
  {name : 'Titans war' , image:'/img-og-pubg.jpg' , organizer:'Rahul' , duration:'3hr' },
]
  return (
    <div className='p-3' >
      <div className="text-3xl font-bold mx-4 px-4 py-2 font-sans" > Populars</div> 
      <div className='flex-row flex flex-wrap justify-center' >
      {data.map((e) => {
return (
  <>
  <div className='backdrop-blur-md flex-col flex gap-3 m-4 rounded-md bg-gray-800 p-4' > 
  <Image src={e.image} width={300} height={300} className='rounded-md' ></Image>
  <div className='flex flex-row justify-between items-center' >
  <div className='text-lg font-semibold' > Pubg </div>
  <div>
  <div className='text-md text-gray-300 font-semibold' >
  Max prize : ₹12,000
  </div> 
  <div className='text-md text-gray-300 font-semibold' >
  No. of events : 12000
  </div> 
  </div>
  </div>
  <div className='flex-row flex gap-1 justify-between' >
  <div className='text-md text-gray-300 ' >
Next event :
  </div> 
  <div className='text-red-400 font-semibold text-md' >
 Tommorow , 04:15pm
  </div>
  </div>
    <div className='flex flex-row gap-2' >
  <div className='p-2 cursor-pointer rounded-md font-semibold text-center text-black bg-white/75 backdrop-blur-md'><img src="https://img.icons8.com/emoji/28/null/heart-suit.png"/></div>

  <div className='p-2 cursor-pointer w-full rounded-md font-semibold text-center text-black bg-white/75 backdrop-blur-md'>Join Event</div>
    </div>
  </div>
  </>
)
      })}
      </div>
      <div>
 
      </div>
    </div>
  )
}

export default getTournaments
