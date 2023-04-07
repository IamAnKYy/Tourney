import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const register = () => {
//   useEffect(() => {
//     const user = Cookies.get("user")
//     console.log(user)
//     if(user) {
// router.back()
//     }
//   },[])
  const [user , setUser] = useState({
    username:'',
    email :'',
    password :''
  })
  const getUser = async () => {
    let fetchUser 
    try {
     fetchUser = await axios.post("http://localhost:5000/createUser" , {user})
    }
    catch(error){
toast(error)
    }
    console.log(fetchUser)
  }
  return (
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 h-screen bg-gray-200">
    <div class="w-full max-w-md space-y-8 bg-white shadow-lg rounded-md p-6">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up to your account</h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div class="-space-y-px rounded-md shadow-sm flex-col flex gap-3">
          <div className="grid grid-cols-2 gap-3">
          <label for="email-address" class="sr-only">Username</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='First Name'/>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Last Name'/>

          </div>
          {/* <div>
            <label for="email-address" class="sr-only">Username</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Username'/>
          </div> */}
          {/* <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
          </div> */}
          <div className='flex flex-col gap-3'>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Mobile no.'/>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Username'/>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative p-2 block w-full  bg-gray-300s text-white rounded-md border-0 py-1.5  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"/>
          </div>
        </div>
  
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
  
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
  
        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
    // <div className='border-blue-700 border-2' >
    //   <input type="text" className='p-2' value={user.username} onChange={(el) => setUser((e) => ({...e , username : el.target.value}))} />
    //   <input type="text" className='p-2' value={user.name} onChange={(el) => setUser((e) => ({...e , email : el.target.value}))} />
    //   <input type="text" value={user.password} onChange={(el) => setUser((e) => ({...e , password : el.target.value}))} />
    //   <button onClick={() => getUser()} > Save </button>
    //   <ToastContainer/>
    // </div>
  )
}

export default register
