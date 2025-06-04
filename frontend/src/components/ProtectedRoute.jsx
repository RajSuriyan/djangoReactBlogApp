import { HttpStatusCode } from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


function protected_route({children}){
    const [isAuthorized,setAuthorized] = useState(null);
    useEffect(() => 
        {
        auth().catch(
        () => {setAuthorized(false)})
        }, []
    )
    
    const refresh_token = async () => {
        const refresh_token = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api.post( "api/token/refresh/", {
                refresh : refresh_token
            })
            if (res.status == HttpStatusCode.Ok){
                localStorage.setItem(ACCESS_TOKEN , res.data.access)
                setAuthorized(true)
            }else{
                setAuthorized(false)
            }
        }catch(error){
            console.error(error)
            setAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if(!token){
            setAuthorized(false)
            return null
        }
        const decoded = jwtDecode(ACCESS_TOKEN)
        const exp_date = decoded.exp
        const day = Date.now()/1000
        if (exp_date<day){
            await refresh_token()
        }else{
            setAuthorized(true)
        }

    }

    if (isAuthorized===null){
        return <div>Loading ...</div>
    }
    
    return (isAuthorized)?children : <Navigate to="/login" />

}

export default protected_route;