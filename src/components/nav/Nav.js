import React from 'react'
import './nav.css'
// all the images 
import Notification from '../../assets/nav-assets/notifications-bell.svg'
import Accounts from '../../assets/nav-assets/people.svg'
import Live from '../../assets/nav-assets/live-streaming.svg'
import GoBtn from '../../assets/nav-assets/go-btn.svg'
import Mikasa from '../../assets/nav-assets/dummy/Mikasa.png'
import { VoiceJoinNotification, TextMessageNotification } from '../nav-sub_components/message/Message'
import Friend_list from '../nav-sub_components/friend_list_component/Friend-list'

const Nav = () => {

  const [notificationsState, setNotificationsState] = React.useState(false)
  const [accountState, setAccountState] = React.useState(false)


  const toggleNotification = () => {
    setAccountState(false)
    setNotificationsState(!notificationsState)
  }
  const toggleAccounts = () => {
    setNotificationsState(false)
    setAccountState(!accountState)
  }

  return (
    <nav className="main-dashboard__nav">
        {/* Navbar is divided into 2 parts */}
        <div className="dashboard-nav__left-area">

          <div className="dashboard-nav__notification-container">
            <img src={Notification} alt="" className='dashboard-nav__icons dashboard-nav__notification-bell'
              onClick={toggleNotification}
            />

            {notificationsState && <>
              <div className="dashboard-nav__notification-box">
                <h1>Notifications</h1>
                <VoiceJoinNotification />
                <TextMessageNotification />
                <VoiceJoinNotification />
                <TextMessageNotification />
              </div>
            </>}
          </div>

          <div className="dashboard-nav__accounts-container">
            <img src={Accounts} alt="" className='dashboard-nav__icons dashboard-nav__accounts'onClick={toggleAccounts}/>

            {accountState && <>
              <div className="dashboard-nav__notification-box">
                <h1>Your friends</h1>
                <Friend_list />
              </div>
            </>}
          </div>

          <div className="dashboard-nav__live-feed-container">
            <img src={Live} alt="" className='dashboard-nav__icons dashboard-nav__notification-bell'/>

          </div>
        </div>
        <div className="dashboard-nav__right-area">
            <div className="dashboard-nav__search-container">
            <form className='dashboard-nav__search-form'>
              <input type="search" className='dashboard-nav__search-bar'
                placeholder='Search'
              />
              <button type='submit' className='dashboard-nav__search-go-button'>Go
              <img src={GoBtn} alt="" className='dashboard-nav__search-go-img'/>
              </button>
            </form>
            </div>
            <div className="dashboard-nav__personal-account-section">
              <img src={Mikasa} alt="" className='dashboard-nav__account-btn'/>
              <div className="dashboard-nav__active-status-indicator"></div>
            </div>
        </div>
    </nav>
  )
}

export default Nav