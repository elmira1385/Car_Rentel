import React from 'react'
import Header from '../Components/Header'
import Luxury_cars_on_Rent from '../Components/Luxury_cars_on_Rent'

const Home = () => {
  return (
   <div className='flex flex-col gap-4'>
   <Header/>
   <Luxury_cars_on_Rent/>
   </div>
  )
}

export default Home