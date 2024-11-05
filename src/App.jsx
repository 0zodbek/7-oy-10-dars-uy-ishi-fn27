import React, {useEffect,useState} from 'react'
import MainLayout from './Layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Like from "./pages/Like"
import Home from "./pages/Home"
import Details from "./pages/Details"
import http from './axois'
function App() {  
  const [music , setMusic] = useState([])
  useEffect(() => {
  http.get('featured-playlists')
  .then(response => {
    setMusic(response.data.playlists.items);
    console.log(response);
    
  })
  .catch(err => {
    console.log(err);
  })
}, [])
  
  return (
    <div className='w-full'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home data={music}></Home>}></Route>
          <Route path='/like' element={<Like></Like>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App