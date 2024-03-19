import React from 'react'

const ResFooter = () => {
  return (
    <div className='flex justify-evenly '>
    <div className='w-1/2'>
     <p className='text-lg text-red-500 p-4'>Address</p>
     <p className='text-xs '>Cafe Plot No. 45, Street No.14 Marol MIDC Industry Estate, Andheri East,Mumbai-400093</p>
    </div>
    <div classs='mt-10'>
      <p className='text-xs'>About us</p>
      <p className='text-xs'>Terms of use</p>
      <p className='text-xs'>Services</p>
      <p className='text-xs'>Policies</p>  
    </div>
    </div>
  )
}

export default ResFooter
