import { Container, Dish, Info, Description, Ingredients} from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../../components/Admin/header"
import { Footer } from "../../../components/footer"
import { IngredientCard } from "../../../components/ingredientCard"
import { appIcons } from "../../../assets/icons/appIcons"
import { Button } from "../../../components/button"
import { api } from "../../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function DishView(){

    const [dish, setDish] = useState("")
    const [ingredients, setIngredients] = useState([])
    const params = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes/${params.id}`)

            setDish(response.data)
            setIngredients(response.data.ingredients.split(", "))
            setLoading(false)
        }
        
        fetchDish()
    }, [params.id])

    const avatarUrl = dish.avatar? `${api.defaults.baseURL}/files/${dish.avatar}`: appIcons.silverware

    return(
        <Container>
            <Header/>
        
            <nav> <Link to="/"> <img src={appIcons.arrowLeft} alt="Botao voltar" /> voltar </Link> </nav>
            
            {loading ? <h2>Carregando...</h2> :
            <Dish>
                <img src={avatarUrl} alt="Imagem do prato" className={dish.avatar ? "" : "defaultImg"}/>
                
                <Info>
                    <Description>
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                    </Description>

                    <Ingredients>
                        {
                            ingredients.map((ingredient, index) => (
                                <IngredientCard key={index} ingredient={ingredient}/>
                            ))
                        }
                    </Ingredients>

                    <div id="ButtonWrapper">
                        <Link to={`/edit_dish/${params.id}`}>
                            <Button colorCode="TOMATO_100">
                                Editar prato
                            </Button>
                        </Link>
                    </div>
                </Info>
            </Dish>}

            <Footer/>
        </Container>
    )
}