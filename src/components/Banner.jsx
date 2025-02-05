import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'

export default function Banner({addStaticValue}) {

  const addTodoToast = () =>{
    toast('Credit added To your Account',{
      // position: "bottom-right",
      autoClose: 2000, 
      // hideProgressBar: true,
      closeOnClick: true, 
      // pauseOnHover: true, 
      draggable: true, 
      // progress: undefined, 
      className: 'custom-toast', 
    })
  }

  return (
    <div className='md:container mx-auto bg-cover bg-black bg-no-repeat rounded-xl opacity-90' style={{
      backgroundImage : 'url(/bg-shadow.png)',}}>
        <div className='w-9/12 mx-auto flex flex-col justify-center items-center py-10 text-white'>
        <img style={{width :"200px"}} src="/banner-main.png" alt="" />
        <h2 className='md:text-4xl font-semibold py-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className='text-sm font-xm py-2'>Beyond Boundaries Beyond Limits</p>
        <div className='border border-[#E7FE29] px-1 py-1 rounded-xl'>
        <button onClick={() =>{addStaticValue();addTodoToast()}} className='btn  bg-[#E7FE29] px-4 font-bold'>Claim Free Credit</button>
        </div>
        </div>
    </div>
  )
}
