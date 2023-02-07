import React from 'react'
import './App.css';
import { FriendProfileModal, Nav } from './components';

//importing context
import usefulContext from './context/useful/usefulContext';

//importing utils
import fetchUser from './utils/fetchUser';



const LoadingScreen = () => {
  return <>
    <div className="loader"></div>
  </>
}

function App() {
  //making context
  const { setUser, isUserLoading, setIsUserLoading } = React.useContext(usefulContext)

  //fetching logged in user's data on the first go i.e. when he first loads the page
  React.useEffect(() => {

    fetchUser(setUser, setIsUserLoading)

  }, [])


  return (
   <>
    <div className="app__container">
    {isUserLoading ? <LoadingScreen /> : <>
      <Nav />
      <FriendProfileModal />

    </>}
    </div>
   </>
  );
}

export default App;
