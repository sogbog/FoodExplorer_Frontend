import { appIcons } from "../../../assets/icons/appIcons"
import { Container, NavBar, Title, SearchBar, Orders } from "./styles"
import { Button } from "../../button"
import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"


export function Header(){
    const { signOut, orders } = useAuth()
    const [search, setSearch] = useState("")
    const [dishes, setDishes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?search=${search}`)
            setDishes(response.data)
        }

        fetchDishes()
    }, [search])

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
                <Link to="/">
                    <Title>
                        <img src= {appIcons.small_explorer_logo} alt="Explorer logo" />
                        <h1>food explorer</h1>
                    </Title>
                </Link>

                <SearchBar>
                <img src={appIcons.search} alt="" />
                    <input type="text" placeholder="Busque por pratos ou ingredientes" value={search} onChange={e => setSearch(e.target.value)}/>
                    {
                        (search && dishes[0]) && <div id="dropDown">
                            {dishes.map(dish => (
                                <Link key={dish.id} to={`/dish_view/${dish.id}`}>{dish.name}</Link>
                            ))}
                        </div>
                    }
                </SearchBar>

                <Link className="NavLink" to="/favorites">
                    Meus favoritos
                </Link>

                <Link className="NavLink" to="/history">
                    Histórico de pedidos
                </Link>

                <Orders>
                    <Link to="/payout">
                        <button id="Mobile">
                            <span>{orders[0] ? "1" : "0"}</span>
                            <img src={appIcons.receipt} alt="Menu" />
                        </button>
                    </Link>

                    <Link to="/payout">
                        <Button id="Desktop" colorCode="TOMATO_100" orders = {orders[0] ? "1" : "0"}>
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