import React from 'react'

import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
function MainLayout({children}) {
  return (
    <div className='flex'>
        <div className='w-[20vw] fixed h-[100vh] left-0'><LeftBar></LeftBar></div>
        <div className='w-[60vw] mx-auto' >{children}</div>
        <div className='w-[20vw] fixed h-[100vh] right-0'><RightBar></RightBar></div>
    </div>
  )
}

export default MainLayout