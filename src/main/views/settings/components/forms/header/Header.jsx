import React from 'react'
import './header.scss'
const Header = ({ title , tougle_button = false }) => {
  return (
    <div className='header'>
      <div className="title flex">
        <h1 className='font-[500] text-[24px]'>
          {title}
        </h1>
      </div>
      <hr className='h-[4px] w-[100%] mt-[24px] mb-[58px]' />


    </div>
  )
}

export default Header