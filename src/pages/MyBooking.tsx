
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Login from '../Components/Login'

const MyBooking = () => {
  return (
    <div className='flex flex-col '>
      <Login/>
      <Header/>
      <div className='flex flex-col justify-center items-center pt-10 pb-50 sm:items-start sm:px-60'>
        <p className='text-[36px] font-semibold '>My Bookings</p>
        <p className='text-gray-500 text-[14px]'>View and manage your all car bookings</p>
      </div>
      <Footer/>
    </div>
  )
}

export default MyBooking