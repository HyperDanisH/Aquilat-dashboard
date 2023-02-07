import React from 'react'
import UsefulContext from './usefulContext'

const UsefulState = (props) => {
    //for opening Friend Profile Modal and closing it
    const [ isOpenFriendModal, setIsOpenFriendModal ] = React.useState(false)

    //for storing current user on the dashboard
    const [user, setUser] = React.useState(null)

    const [fetchedOtherUsersBySearch, setFetchedOtherUsersBySearch] = React.useState(null)

    //for storing weather the api reqest has been finished or not
    const [isUserLoading, setIsUserLoading] = React.useState(false)


    const toogleFriendModal = () => setIsOpenFriendModal(!isOpenFriendModal)
    const state = {
        //for opening and colosing FriendProfileModal
        isOpenFriendModal, toogleFriendModal,

        //for storing user
        user, setUser,

        //for api call status
        isUserLoading, setIsUserLoading,

        //for Search results
        fetchedOtherUsersBySearch, setFetchedOtherUsersBySearch
    }
    return (
        <UsefulContext.Provider value={state}>
            {props.children}
        </UsefulContext.Provider>
    )
}

export default UsefulState