import React from 'react'
import Header from '../Components/Header'
import Featured_Vehicles from '../Components/Featured_Vehicles'
import Available_Cars from '../Components/Available_Cars'
import Footer from '../Components/Footer'
import Login from '../Components/Login'

const Cars = () => {
  return (
    <div className='flex flex-col '>
    <Header/>
    <Login/>
    <Available_Cars/>
    <Featured_Vehicles/>
    <Footer/>
    </div>
  )
}

export default Cars