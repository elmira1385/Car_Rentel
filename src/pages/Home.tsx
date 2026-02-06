
import Header from '../Components/Header'
import Luxury_cars_on_Rent from '../Components/Luxury_cars_on_Rent'
import Banner from '../Components/Banner'
import What_Our_Customers_Say from '../Components/What_Our_Customers_Say'
import News from '../Components/News'
import Footer from '../Components/Footer'
import Featured_Vehicles_Slice from '../Components/Featured_Vehicles_Slice'
import Login from '../Components/Login'

const Home = () => {
  return (
   <div >
   <Header/>
    <Login/>
   <Luxury_cars_on_Rent/>
   <Featured_Vehicles_Slice/>
   <Banner/>
   <What_Our_Customers_Say/>
   <News/>
   <Footer/>
   </div>
  )
}

export default Home