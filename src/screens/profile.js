import React from 'react'
import Signup from '../AuthComponents/signup'
import CustomerDetails from '../components/customerDetails'
import './profile.css'

export default function Profile() {
  return (
    <div>
        <div className='profile-main'>
            <div className='profile-signup'><h3>Personal Details</h3><Signup/></div>
            <div className='profile-customerdetails'> <CustomerDetails/></div>
        </div>
    </div>
  )
}
