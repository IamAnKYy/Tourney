import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
const id = ({data}) => {
  return (
    <div>
      
    </div>
  )
}

export default id
export async function getServerSideProps(context) {
  let tournament
  try {
     tournament = await axios.get('localhost:3000/getTournament/' , {id:context.params.id})
  } catch (error) {
    console.log(error)
  }
    return {
      props: {data:tournament}, // will be passed to the page component as props
    }
  }
