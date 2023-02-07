import React from 'react'
import './searchbarQueries.css'

import UserAvtar from '../../UserAvtarIfUserProfileIsNotPresent/UserAvtar'

//importing context
import usefulContext from '../../../context/useful/usefulContext'

const SearchbarQueries = () => {

  const { fetchedOtherUsersBySearch } = React.useContext(usefulContext)

  return <>
    {fetchedOtherUsersBySearch && <>
      <div className="searchbar__queries-contianer">
      <div className="search-account-container">
          <div className="search-lhs-container">
          {/* <img src={ErenDummy} alt="" className='search__message-dp'/> */}

          <UserAvtar width={48} height={48} backgroundColor="#05141c" fontSize={12}/>

          <div className="nav__message-texts">
              <p className='nav__message-sender-name'>Eren</p>
              <p className='nav__message-description'>Those shall know...</p>
          </div>
          </div>
          <div className="nav__message-answer-btns">
              <button className='search-account-btn' style={{marginRight: 12}}
                  // onClick={usefulContextData.toogleFriendModal}
              >
                  Visit Profile
              </button>
          </div>
          </div>
        
    </div>
    </>}
  </>
}

export default SearchbarQueries