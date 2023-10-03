import React from 'react'
import { Link } from 'react-router-dom'

const Filters = ({setActive,active}) => {
  return (
    <div className='flex gap-5 mt-7'>
      <Link className={`tracking-wider font-bold py-2 px-4 rounded-full ${active==="New York" ? "bg-blue-600 hover:bg-blue-700 text-white":"bg-[#98a8dd5e] text-black"}`} onClick={()=>setActive("New York")}>New York</Link>
      <Link className={`tracking-wider font-bold py-2 px-4 rounded-full ${active==="Mumbai" ? "bg-blue-600 hover:bg-blue-700 text-white":"bg-[#98a8dd5e] text-black"}`}  onClick={()=>setActive("Mumbai")}>Mumbai</Link>
      <Link className={`tracking-wider font-bold py-2 px-4 rounded-full ${active==="Paris" ? "bg-blue-600 hover:bg-blue-700 text-white":"bg-[#98a8dd5e] text-black"}`} onClick={()=>setActive("Paris")}>Paris</Link>
      <Link className={`tracking-wider font-bold py-2 px-4 rounded-full ${active==="London" ? "bg-blue-600 hover:bg-blue-700 text-white":"bg-[#98a8dd5e] text-black"}`} onClick={()=>setActive("London")}>London</Link>
    </div>
  )
}

export default Filters
