import { useState, useEffect } from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userName, setuserName] = useState("")
    const [userPhoto, setUserPhoto] = useState("")
    const [user, setUser] = useState("")
    const [isbus_driver, setIsbus_driver] = useState(false)
    const [isinspector, setIsinspector] = useState(false)
    const [istransport_manager, setIstransport_manager] = useState(false)
    const [isn_passanger,setIsn_passanger]  = useState(false)
    const [isf_passanger,setIsf_passanger]= useState(false)

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
                    } else if(res.data.role === 'transport_manager'){
                        setIstransport_manager(true)
                    } else {
                        setIsAdmin(false)
                        setIsbus_driver(false)
                        setIsinspector(false)
                        setIsn_passanger(false)
                        setIsf_passanger(false)
                        setIstransport_manager(false)
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
        userPhoto: [userPhoto, setUserPhoto],
        userDetails: [user, setUser],
        istransport_manager:[istransport_manager, setIstransport_manager]
    }
}

export default UserAPI