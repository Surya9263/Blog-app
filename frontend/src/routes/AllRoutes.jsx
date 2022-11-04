import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SinglePost from '../components/singlepost/SinglePost'
import HomePage from '../pages/homepage/HomePage'
import Login from '../pages/loginPage/Login'
import Resister from '../pages/resisterPage/Resister'
import Setting from '../pages/settingPage/Setting'
import Write from '../pages/writePage/Write'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/resister' element={<Resister/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/write' element={<Write/>} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='/post/:postId' element={<SinglePost/>} />
    </Routes>
  )
}

export default AllRoutes