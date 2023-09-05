import React from 'react'

import LoadingAnimation from './LoadingAnimation'
const LoadingPageAnimation = () => {
  return (
    <div className='bg-[#121212] w-full h-[100vh] fixed z-[100000] flex justify-center items-center flex-col gap-4'>
     
       <div>
       <LoadingAnimation/>
       </div>
    </div>
  )
}

export default LoadingPageAnimation