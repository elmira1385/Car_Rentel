import React from 'react'
import Header from '../Components/Header'
import Luxury_cars_on_Rent from '../Components/Luxury_cars_on_Rent'
import Featured_Vehicles from '../Components/Featured_Vehicles'
import Banner from '../Components/Banner'
import What_Our_Customers_Say from '../Components/What_Our_Customers_Say'
import News from '../Components/News'
import Footer from '../Components/Footer'

const Home = () => {
  return (
   <div className='flex flex-col '>
   <Header/>
   <Luxury_cars_on_Rent/>
   <Featured_Vehicles/>
   <Banner/>
   <What_Our_Customers_Say/>
   <News/>
   <Footer/>
   </div>
  )
}

export default Home