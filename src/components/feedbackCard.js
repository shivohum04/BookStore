import React from 'react'
import './feedbackcard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function FeedbackCard() {
  return (
    <div className='feedback-main'>
        <div className='feedback-user'>
            <div className='feedback-user-icon'>
                <AccountCircleIcon/>
            </div>
        </div>
        <div className='feedback-details'>
            <div className='feedback-name'>name</div>
            <div className='feedback-comment'>this is my commment</div>
        </div>
      
    </div>
  )
}
