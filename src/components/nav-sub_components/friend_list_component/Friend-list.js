import React from 'react'
//designs are copy pasted from message.css
import './friend_list.css'

// images 
import ErenDummy from '../../../assets/nav-assets/dummy/eren.png'
import VoiceNotif from '../../../assets/nav-assets/snd-voice-notif.svg'
import Account from '../../../assets/nav-assets/Account.svg'

//importing context
import usefulContext from '../../../context/useful/usefulContext'

//message area was desided as a feature but would have
// complicated the project 

// const Message_area = () => {
//     return (
//         <>
//             <div className="nav__message-chat-contianer"></div>
//         </>
//     )
// }

const FriendList = () => {
  const usefulContextData = React.useContext(usefulContext)

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
            <button className='nav__message-message-btn' style={{marginRight: 12}}
                onClick={usefulContextData.toogleFriendModal}
            >
                <img src={Account} alt="" />
            </button>
            <button className='nav__message-message-btn'>
                <img src={VoiceNotif} alt="" />
            </button>
        </div>
        </div>
    </>
  )
}


export default FriendList