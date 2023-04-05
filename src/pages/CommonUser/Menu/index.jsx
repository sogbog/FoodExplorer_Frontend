import { Container, Header, SearchBar, Options, Results } from "./styles"
import { Footer } from "../../../components/footer"
import { Link } from "react-router-dom"
import { appIcons } from "../../../assets/icons/appIcons"
import { useAuth } from "../../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"

export function Menu(){
    const { signOut } = useAuth()
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
            <Header> <Link to={-1}><img src={appIcons.cross} alt="Fechar o menu" /></Link> Menu </Header>

            <SearchBar>
                <img src={appIcons.search} alt="" />
                <input type="text" placeholder="Busque por pratos ou ingredientes" value={search} onChange={e => setSearch(e.target.value)}/>
            </SearchBar>
            
            <Options>
                <Link to="/favorites">Meus Favoritos</Link>
                <Link to="/history">Histórico de pedidos</Link>
                <button onClick={() => handlesignOut()}>Sair</button>
            </Options>

            <Results>
            {search && <Results>
                        {dishes.map(dish => (
                            <li key={dish.id}><Link to={`/dish_view/${dish.id}`}>{dish.name}</Link></li>
                        ))}
                    </Results>}
            </Results>

            <Footer/>
        </Container>
    )
}