import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Package from '../Components/Packages'
import Mumbai from '../Components/Mumbai'
import Singapore from '../Components/Singapore'
import Mountains from '../Components/Mountains'
import Road from '../Components/Road'
import Forum from '../Components/Forum'
import PublicTrips from '../Components/PublicTrips'
import Singlepackagepage from '../Components/SinglePage'
import Login from '../Components/Login'
import Blog from '../Components/Blog'
import Homepage from '../Components/Home'









const Mainroutes = () => {
  return (
   <Routes>
  <Route path='/' element={<Homepage/>}></Route>
  <Route path='/package' element={<Package/>}></Route>
  <Route path='/packages/:id' element={<Singlepackagepage/>}></Route>
  <Route path='/mumbai' element={<Mumbai/>}></Route>
  <Route path='/singapore' element={<Singapore/>}></Route>
  <Route path='/mountains' element={<Mountains/>}></Route>
  <Route path='/road' element={<Road/>}></Route>
  <Route path='/forum' element={<Forum/>}></Route>
  <Route path='/public' element={<PublicTrips/>}></Route>
  <Route path='/import' element={<Blog/>}></Route>
  <Route path='/signup' element={<Login/>}></Route>
  {/* <Route path='/uploadimg' element={<Upload/>}></Route> */}
  <Route path='*'>Page is not found</Route>
   </Routes>
  )
}

export default Mainroutes