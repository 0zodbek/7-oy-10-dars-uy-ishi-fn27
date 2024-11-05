import React from 'react'

import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
function MainLayout({children}) {
  return (
    <div className='flex'>
        <div className='w-[20vw]'><LeftBar></LeftBar></div>
        <div className='w-[60vw]' >{children}</div>
        <div className='w-[20vw]'><RightBar></RightBar></div>
    </div>
  )
}

export default MainLayout