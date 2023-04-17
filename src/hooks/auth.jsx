import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})
    const [favorites, setFavorites] = useState([])
    const [orders, setOrders] = useState([])
    const [orderStatus, setOrderStatus] = useState("Waiting")

    async function signIn({email, password}){
        try {
            const response = await api.post("/session", {email, password})
            const {user, token} = response.data

            localStorage.setItem("@FoodExplorer:user", JSON.stringify(user))
            localStorage.setItem("@FoodExplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user})
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível fazer login")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@FoodExplorer:token")
        localStorage.removeItem("@FoodExplorer:user")

        setOrders([])
        setFavorites([])
        setData({})
    }

    async function fetchFavorites(){
        const response = await api.get("/favorites")
        
        setFavorites(response.data)
    }

    useEffect(()=> {
        const token = localStorage.getItem("@FoodExplorer:token")
        const user = localStorage.getItem("@FoodExplorer:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user: JSON.parse(user)})
        }
    }, [])

    return(
        <AuthContext.Provider value={ {signIn, signOut, 
        user: data.user, 
        favorites, setFavorites, fetchFavorites,
        orders, setOrders, orderStatus, setOrderStatus,
        test}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }
