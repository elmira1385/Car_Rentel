
import searchs from "../images/search.svg"
import ghiff from "../images/ghif.svg"
import { useSearch } from '../store/useSearch'
const Available_Cars = () => {
   const {search,setSearch}= useSearch()
  return (
    <div className='flex flex-col gap-4 justify-center items-center bg-[#f1f5f9] py-18'>
          <p className='text-[36px] font-semibold'>Available Cars</p>
          <p className='text-[14px] text-gray-500 text-center'>Browse our selection of premium vehicles available for your next adventure</p>
          <div className='flex gap-2 justify-center px-4 py-3 shadow-md bg-white rounded-full'>
           <img src={searchs} alt="" />
           <input value={search} onChange={(e)=>{
            setSearch(e.target.value)
           }} className='placeholder:text-gray-400 w-80 outline-0' placeholder='Search by make, model, or features' type="text" />
           <img src={ghiff} alt="" />
          </div>
    </div>
  )
}

export default Available_Cars