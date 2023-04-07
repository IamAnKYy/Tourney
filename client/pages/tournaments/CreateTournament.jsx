import axios from 'axios'
import Cookies from 'js-cookie'
import { Cookie } from 'next/font/google'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const CreateTournament = () => {
    const router = useRouter()
    const [tournament , setTournament] = useState({
        curr_game_name:'',
        curr_tournament_name:'',
        start_date:'',
        end_date:'',
        prize:'',
        currency:'',
        maximumMembers :'',
        maximumTeams :'',
        registrationDuration:'',
    })
    const saveTournament = async () => {
        // const userName = Cookies.get("user").userName
const tournamentModel = {...tournament  }
let getTournament
try {
     getTournament = await axios.post("http://localhost:5000/createTournament" , {  tournamentModel})
}
 catch (error) {
    console.log(error)
}
// router.push(`tournaments/tournament/${getTournament.id}`)
    }
  return (
    <div className='flex-col flex gap-4' >
      <input type="text" onChange={(el) => setTournament((e) => ({...e , curr_game_name : el.target.value}))} />
      <input type="text" onChange={(el) => setTournament((e) => ({...e , curr_tournament_name : el.target.value}))} />
      <input type="text" onChange={(el) => setTournament((e) => ({...e , start_date : el.target.value}))} />
      <input type="text" onChange={(el) => setTournament((e) => ({...e , end_date : el.target.value}))} />
      <input type="text"  onChange={(el) => setTournament((e) => ({...e , prize : el.target.value}))}/>
      <input type="text"  onChange={(el) => setTournament((e) => ({...e , currency : el.target.value}))}/>
      <input type="text" onChange={(el) => setTournament((e) => ({...e , maximumMembers : el.target.value}))}/>
      <input type="text" onChange={(el) => setTournament((e) => ({...e , maximumTeams : el.target.value}))}/>
      <input type="text" onChange={(el) => setTournament((e) => ({...e , registrationDuration : el.target.value}))}/>
      <button onClick={() => saveTournament()} > Save </button>
    </div>
  )
}

export default CreateTournament
