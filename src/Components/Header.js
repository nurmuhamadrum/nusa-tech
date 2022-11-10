import React from 'react'
import { logo } from '../Assets'

import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  return (
    <div className='header-container'>
        <img src={logo} className='logo-image' />
        <div className='header-side-container'>
            <p className='title-usd'>EN/USD | </p>
            <DarkModeIcon sx={{ color: '#fff', marginLeft: 2 }} />
        </div>
    </div>
  )
}
