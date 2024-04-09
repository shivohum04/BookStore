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
          <input className='ibox' type='text' placeholder='Full Name'></input>
          <input className='ibox' type='text' placeholder='Mobile Number'></input>
        </div>
        <div className='customerdetails-address'>
            <div className='customerdetails-address-address'>
              Address
              <input className='add ibox' type='text'></input>
            </div>
            <div className='customerdetails-address-lower'>
              <div className='customerdetails-address-town'>
                City
                <input className='ibox' type='text' placeholder='city'></input>
              </div>
              <div className='customerdetails-address-state'>
                State
                <input className='ibox' type='text' placeholder='state'></input>

              </div>
            </div>
        </div>
        <div className='customerdetails-typeofaddress'>
          <div className='typeof-title'>Type</div>
          <div className='typeof-options'>
            <div className='home'><input type='checkbox'></input><span>Home</span></div>
            <div className='work'> <input type='checkbox'></input><span>Work</span></div>
            <div className='other'><input type='checkbox'></input><span>Other</span></div>
          </div>
    
        </div>
        <div className='cutomerdetails-lowerbutton'>
          <button className='customerdeatils-continue' onClick={handleContinueClick}>CONTINUE</button>
        </div>
      </div>
    </div>
  )
}
