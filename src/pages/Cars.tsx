import React from 'react'
import Header from '../Components/Header'
import Featured_Vehicles from '../Components/Featured_Vehicles'
import Available_Cars from '../Components/Available_Cars'
import Footer from '../Components/Footer'

const Cars = () => {
  return (
    <>
    <Header/>
    <Available_Cars/>
    <Featured_Vehicles/>
    <Footer/>
    </>
  )
}

export default Cars