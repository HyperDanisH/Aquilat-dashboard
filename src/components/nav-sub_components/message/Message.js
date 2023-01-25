import React from 'react'
import './message.css'
// images 
import ErenDummy from '../../../assets/nav-assets/dummy/eren.png'
import Cross from '../../../assets/nav-assets/cross.svg'
import Reply from '../../../assets/nav-assets/reply.svg'

function VoiceJoinNotification() {
  return (
    <>
    <div className="nav__message-container">
        <div className="nav-lhs-container">
        <img src={ErenDummy} alt="" className='nav__message-dp'/>
        <div className="nav__message-texts">
            <p className='nav__message-sender-name'>Eren</p>
            <p className='nav__message-description'>Wanna join?</p>
        </div>
        </div>
        <div className="nav__message-answer-btns">
            <button className='nav__message-accept-btn'>Accept</button>
            <button className='nav__message-reject-btn'>
                <img src={Cross} alt="" />
            </button>
        </div>
    </div>
    </>
  )
}

function TextMessageNotification() {
  return (
    <>
    {/* some css is same as that in VoiceJoinNotification component  */}
    <div className="nav__message-container">
        <div className="nav-lhs-container">
        <img src={ErenDummy} alt="" className='nav__message-dp'/>
        <div className="nav__message-texts">
            <p className='nav__message-sender-name'>Eren</p>
            <p className='nav__message-description'>Wanna join?</p>
        </div>
        </div>
        <button className='nav__message-reply-btn'>
          <img src={Reply} alt=""/>
        </button>
    </div>
    </>
  )
}

export { VoiceJoinNotification, TextMessageNotification }