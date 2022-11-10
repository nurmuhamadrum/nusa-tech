import React from 'react';
import './style.css';

import Header from '../../Components/Header';
import { imageBanner } from '../../Assets'

import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { fontWeight, height } from '@mui/system';

export default function HomeScreen() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFF'),
    backgroundColor: 'linear-gradient(135deg, #02C3BD 0%, #4062BB 100%);',
    '&:hover': {
      backgroundColor: 'linear-gradient(135deg, #02C3BD 0%, #4062BB 100%);',
    },
    marginTop: 24,
    width: 390,
    height: 49,
    color: '#FFF',
    fontWeight: 600
  }));

  return (
    <div className='home-screen-container'>
      {/** Header */}
      <Header />
      {/** Content */}
      <div className='content-container'>
        <img src={imageBanner} className='image-rocket' />
        <div className='content-right'>
          <div className='content-right-field'>
            <div className='content-login'>
              <p className='title-login'>Already have an account? <span className='login-title'>Login</span></p>
            </div>
            <div>
              <p className='sign-up-title'>Sign Up</p>
              <p className='sign-up-subtitle'>Use Your OpenID to Sign up</p>
              <div className='container-title-login'>
                <p className='title-login'><span className='login-title'>Email</span> | Phone Number</p>
              </div>

              {['Email', 'Password', 'Confirm Password'].map((value) => {
                return (
                  <div className='field-container'>
                    <p className='title-login'>{value}</p>
                    <input className='text-field' type="text" name="name" />
                  </div>
                )
              })}

              <div className='referral-container'>
                <p className='title'>Referral ID (Optional)</p>
              </div>

              <div className='checkbox-container'>
                <div className='checkbox'>
                  <Checkbox {...label} defaultChecked />
                </div>
                <p className='title'>By signing up I agree that I’m 18 years of age or older, to the User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.</p>
              </div>

              <ColorButton variant="contained">Sign Up</ColorButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
