import React from 'react'
import Logo from '../assets/image2.png';

const Header = () => {
  return (
    <header className=' py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header;