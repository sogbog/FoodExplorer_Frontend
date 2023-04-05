import { appIcons } from "../../../assets/icons/appIcons"
import { Container, NavBar, Title, SearchBar, Orders } from "./styles"
import { Button } from "../../button"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"

export function Header(){
    const { signOut, orders, setOrders } = useAuth()
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchOrders(){
            try {
                const response = await api.get("/orders")

                setOrders(response.data)  
            } catch (error) {
                if(error.response){
                    alert("Ocorreu um erro ao resgatar as informções. Seu token de autenticação pode ter expirado, tente fazer Login novamente")
                }else{
                    alert("Ocorreu um erro D:")
                }
            }
        }
        
        fetchOrders()
    }, [])

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?search=${search}`)
            setDishes(response.data)
        }

        fetchDishes()
    }, [search])

    function countOrders(){
        let undeliveredOrders = 0
        
        orders.map(order => {
            order.status != "Entregue" ? undeliveredOrders ++ : ""
        })

        return undeliveredOrders.toString()
    }

    function handlesignOut(){
        signOut()

        navigate("/")
    }

    return(
        <Container>
            <NavBar>
                <button>
                    <Link to="/menu"> <img src={appIcons.menu} alt="Menu" /> </Link>
                </button>
                <Link to="/" id="Title">
                    <Title>
                        <img src= {appIcons.small_explorer_logo} alt="Explorer logo" />
                        <h1>food explorer</h1>
                    </Title>

                    <span>admin</span>
                </Link>

                <SearchBar>
                    <img src={appIcons.search} alt="" />
                    <input type="text" placeholder="Busque por pratos ou ingredientes" value={search} onChange={e => setSearch(e.target.value)}/>
                    {
                        (search && dishes[0]) &&  <div id="dropDown">
                            {dishes.map(dish => (
                                <Link key={dish.id} to={`/dish_view/${dish.id}`}>{dish.name}</Link>
                                // <button type="button" key={dish.id} onClick={useNavigate(`/dish_view/${dish.id}`)}>{dish.name}</button>
                            ))}
                        </div>
                    }
                </SearchBar>

                <Link className="NavLink" to="/favorites">
                    Meus favoritos
                </Link>

                <Link className="NavLink" to="/new_dish">
                    Novo prato
                </Link>

                <Orders>
                    <Link to="/orders">
                        <button id="Mobile">
                            <span>{countOrders()}</span>
                            <img src={appIcons.receipt} alt="Menu" />
                        </button>
                    </Link>

                    <Link to="/orders">
                        <Button id="Desktop" colorCode="TOMATO_100" orders={countOrders()}>
                            <img src={appIcons.receipt} alt="Menu" />
                            Pedidos
                        </Button>
                    </Link>
                </Orders>

                <button id="Logout" onClick={() =>handlesignOut()}> <img src={appIcons.logout} alt="Logout"/> </button>
            </NavBar>
        </Container>
    )
}