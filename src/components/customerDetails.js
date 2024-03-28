import React from 'react'
import './cart.css'

export default function CustomerDetails({ handleContinueClick }) {
  return (
    <div>
      <div className='cutomerdetails-main'>
        <div className='customerdetails-title'>
          <div className='cutomerdetails-title-title'>Customer Details</div>
          <div className='customerdetails-title-button'>
            <button className='customerdetails-title-addnew'>Add New Address</button>
          </div>
        </div>
        <div className='customerdetails-personal'>
          <input type='text' placeholder='Full Name'></input>
          <input type='text' placeholder='Mobile Number'></input>
        </div>
        <div className='customerdetails-address'>
            <div className='customerdetails-address-address'>
              Address
              <input type='text' placeholder='text'></input>
            </div>
            <div className='customerdetails-address-lower'>
              <div className='customerdetails-address-town'>
                City
                <input type='text' placeholder='city'></input>
              </div>
              <div className='customerdetails-address-state'>
                State
                <input type='text' placeholder='state'></input>

              </div>
            </div>
            
        </div>
        <div className='customerdetails-typeofaddress'>
          <div className='typeof-title'>type</div>
          <div className='typeof-options'>
            <input type='checkbox'></input>Home  
            <input type='checkbox'></input>Work
            <input type='checkbox'></input>Other
          </div>

        </div>
        <div className='cutomerdetails-lowerbutton'>
          <button className='customerdeatils-continue' onClick={handleContinueClick}>CONTINUE</button>
        </div>
      </div>
    </div>
  )
}
