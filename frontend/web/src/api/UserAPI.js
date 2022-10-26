import { useState, useEffect } from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userName, setuserName] = useState("")
    const [userPhoto,setUserPhoto] = useState("")
    const [user,setUser] = useState("")


    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/api/auth/infor', {
                        headers: { Authorization: token }
                    })


                    setIsLogged(true)
                    if (res.data.role === 'admin') {
                        setIsAdmin(true)
                    }else{
                        setIsAdmin(false)
                    }

                        setuserName(res.data.name)
                        setUserPhoto(res.data.logo)
                        setUser(res.data)
                } catch (err) {
                    console.log("🚀 ~ file: UserAPI.js ~ line 37 ~ getUser ~ err", err)
                    window.sessionStorage.clear();
                    localStorage.clear();
                    setIsAdmin(false);
                    setIsLogged(false);
                }
            }

            getUser()

        }
    }, [token])





    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        user: [userName, setuserName],
        userPhoto:[userPhoto,setUserPhoto],
        userDetails:[user,setUser]
    }
}

export default UserAPI