import axios from 'axios'


const fetchUser = async(next, isUserLoading) => {
    //setting a base url for axios 
    axios.defaults.baseURL = "http://localhost:8080/"

    try {

        isUserLoading(true)

        const user = await axios.get("api/v1/user/loggeduser", {withCredentials: true})
        next(user.data.user)

        isUserLoading(false)

    } catch (error) {
        console.log(error)
    }
    
}

export default fetchUser