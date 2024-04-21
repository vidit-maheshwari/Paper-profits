import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '@clerk/clerk-react';
import Lottie from 'lottie-react'
import animationData from "../Home/Paper Profits animations.json"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Signup from '../SignUp/Signup'


function Home() {

  const [text] = useTypewriter({
    words:["Hi There!!","I am Paper Profits"],
    loop:{},
    typeSpeed:120,
  })

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard if user is signed in
    }
  }, [user, navigate]);


  return (
    <>
      <div className='bg-white min-h-svh'>
        <div className='flex'>
          <div className='flex-col mt-20 w-3/5 h-2/5'>
            <h1 className='text-5xl font-bold font-mono ml-72 px-1 py-4 text-blue-600 flex justify-centre '>{text}<Cursor/></h1>
            <Signup/>
                
          </div>
          
          <div className=' w-2/5 h-2/5 float-right mt-30 px-1 py-5 ml-3 mr-36'>
          <Lottie animationData={animationData}/>
          </div>
          
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home
