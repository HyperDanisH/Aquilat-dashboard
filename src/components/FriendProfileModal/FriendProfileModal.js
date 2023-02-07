import React from 'react'
import './FriendProfileModal.css'
// import Dummy from '../../assets/nav-assets/dummy/eren.png'
import Cross from '../../assets/FriendProfileModal/cross.svg'

//import context
import usefulContext from '../../context/useful/usefulContext'

const FriendProfileModal = () => {
  const usefulContextData = React.useContext(usefulContext)

  return <>
    {usefulContextData.isOpenFriendModal && <>
        <div className='dashboard-friend-profile-modal'>
          <img src={Cross} alt="" className='modal-cross' onClick={usefulContextData.toogleFriendModal}/>
          <div className="dashboard-friend-profile-image-container">
              <img src="https://i.imgur.com/itdOyqo.png" alt="" className='dashboard-friend-profile-image'/>
          </div>
          <div className="dashboard-friend-profile-content-container">
              <h2>Eren</h2>
              <p>Tell me, where should I go? To the left where nothing is right or to the right where nothing is left</p>
              <p className='dashboard-friend-profile-id'>5609584908392</p>
              <div className="btn-container">
                  <button className="dashboard-friend-profile-add-friend-btn">Add friend</button>
              </div>
          </div>
      </div>
    </>}
  </>
}

export default FriendProfileModal