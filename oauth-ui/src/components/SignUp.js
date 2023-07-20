import React,{useState} from 'react'
import authService from '../services/authService'
// import { useNavigate } from 'react-router'

const SignUp = () => {

  const [user,setUser] = useState({
    id:"",
    username:"",
    email:"",
    password:""
  })
  const [success,setSuccess] = useState(false)
  const [message,setMessage] = useState("")
  // const navigate = useNavigate()

  const handleChange = (e) =>{
    const value = e.target.value
    setUser({...user,[e.target.name]:value})
  }

  const registerUser = (e) =>{
    e.preventDefault();
    setMessage("")
    setSuccess(false)
    authService.register(user)
    .then((response)=>{
        console.log(response)
        setMessage(response.data.message)
        setSuccess(true)
    },
    (error)=>{
      const resMessage=(
        error.response && 
         error.response.data &&
           error.response.data.message) ||
        error.message ||
        error.toString();

        setMessage(resMessage)
        setSuccess(false)
      });
    }
  

 
  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              {!success && (
               <div>
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="px-4 block text-sm font-medium leading-6 text-gray-900">
                    UserName
                  </label>
                </div>
                <div className="">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={user.username}
                    onChange={ (e) => handleChange(e)}
                    autoComplete="username"
                    required
                    className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className='py-2'>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="px-4 block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                </div>
                <div  >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={ (e) => handleChange(e) }
                    autoComplete="email"
                    required
                    className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className='py-2'>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="px-4 block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value = {user.password}
                    onChange = { (e) => handleChange(e) }
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className='py-2'>
                <button
                  type="submit"
                  onClick={registerUser}
                  className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
              </div>
              )}
              {message &&(
                <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">{message}</span>
                </div>
              </div>
              )}
            </form>
          </div>
        </div>
      </>
    )
  }
  

export default SignUp