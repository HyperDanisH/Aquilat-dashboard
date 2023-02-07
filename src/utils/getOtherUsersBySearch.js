import axios from "axios"

const getOtherUsersBySearch = async(e, setState) => {
    //setting a base url for axios 
    axios.defaults.baseURL = "http://localhost:8080/"

    try {

        if (e.target.value !== "") {

            const searchedUsers = await axios.get(
                `api/v1/userActivity/findUsers/${e.target.value}`,
                {withCredentials: true}
            )
            
            if (searchedUsers.data.status == 0) {
                setState(null)
            }else {
                setState(searchedUsers.data.data)
            }
        }
        else {
          setState(null)  
        }


    } catch (error) {
        console.log(error)
    }
}

export default getOtherUsersBySearch