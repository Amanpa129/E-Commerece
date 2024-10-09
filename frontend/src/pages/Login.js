import React , {useState} from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Login = () => {
    const [showPassword , setShowPassword] = useState(true);
  return (
    <section id = 'login' >
        <div className='mx-auto container p-4'>
    
           {/*Form for login and signin  */}
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
             
            {/* sign in image  */}
           <div className='w-20 h-20 mx-auto '>
             <img src={loginIcons} alt="Login icons" />
           </div>
              {/* actual form content */}
            <form >
                  
                  <div className='grid'>

                  {/* email part */}
                      <label>Email:</label>
                     <div className='bg-slate-100 p-2'>
                     <input type="email" placeholder='enter email' className= 'w-full h-full bg-transparent' />
                     </div>
                  </div>

                      {/* password part className='bg-slate-200' */}
                  <div>
                      <label>Password:</label>
                      <div className='bg-slate-100 p-2 flex'>
                      <input type={showPassword ? "text" : "password"} placeholder='enter password' className= 'w-full h-full bg-transparent' />
                       {/* eye  logo section */}
                      <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((prev)=>!prev)}>
                           <span>
                         {
                              showPassword ? (
                                <FaEyeSlash/>
                              ) 
                              :
                              (
                              <FaEye/>
                              )
                         }  
                         </span>
                      </div>
                      </div>
                      <Link to ={'forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                         Forgot Password
                      </Link>
                  </div>

                <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login </button>
            </form>


        </div>

    </div>
    </section>
  )
}

export default Login
