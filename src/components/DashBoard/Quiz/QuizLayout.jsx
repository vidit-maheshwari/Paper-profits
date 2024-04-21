
import {Outlet, Navigate}  from 'react-router-dom'
import {SignedIn, SignedOut} from '@clerk/clerk-react'
const QuizLayout = () => {
  return (
    <>
      <div>
        <SignedIn>
        <Outlet />
        </SignedIn>
        <SignedOut>
        <Navigate to="/" replace={true} />
        </SignedOut>
      
      </div>
    </>
  )
}

export default QuizLayout
