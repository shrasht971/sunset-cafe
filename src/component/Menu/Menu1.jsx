import React from 'react'
import Menu1first from '../../assets/image/menu1first.png'
const Menu1 = () => {
  return (
    <div className='bg-menu1 lg:h-dvh'>
    <div className=' relative top-28 w-full'>
      <div><img src={Menu1first} className='h-96  w-full object-cover' /></div>
      <div className='flex w-full'>
        <div className='bg-white px-2 w-32 h-px border-0  mt-8'></div>
        <div className='text-2xl text-white m-4  '>WHAT’S ON YOUR MIND?</div>
        <div className='bg-white px-2 w-32 h-px border-0 mt-8'></div>
      </div>
    </div>
      
    </div>
  )
}

export default Menu1
