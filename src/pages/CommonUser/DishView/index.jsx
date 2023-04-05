import { Container, Dish, Info, Description, Ingredients, Quantity, Order } from "./styles"
import { Link } from "react-router-dom"
import { Header } from "../../../components/CommonUser/header"
import { Footer } from "../../../components/footer"
import { IngredientCard } from "../../../components/ingredientCard"
import { appIcons } from "../../../assets/icons/appIcons"
import { Button } from "../../../components/button"
import { api } from "../../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../../hooks/auth";


export function DishView(){

    const { orders, setOrders } = useAuth()

    const [loading, setLoading] = useState(true)
    const [dish, setDish] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [quantity, setQuantity] = useState(1)
    const params = useParams()

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

    function displayPrice(){
        let displayPrice

        switch (dish.price.toString().length) {
            case 1:
                displayPrice = ("R$ 00,0" + dish.price.toString())
            break;
            
            case 2:
                displayPrice = ("R$ 00," + dish.price.toString())
            break;

            case 3:
                displayPrice = ("R$ 0" + dish.price.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;

            default:
                displayPrice = ("R$ " + dish.price.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;
        }

        return displayPrice
    }

    function handleAddToOrder(){
        let added = false

        orders.map(orderDish => {
            if(dish.id == orderDish.id) {
                orderDish.quantity += quantity
                added = true
            }
        })
        
        if(!added){
            dish.quantity = quantity
            setOrders(prevState => [...prevState, dish])
        }
    }

    return(
        <Container>
            <Header/>
            
            <nav> <Link to={"/"}> <img src={appIcons.arrowLeft} alt="Botao voltar" /> voltar </Link> </nav>
            
            
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

                    <Order>
                        <Quantity>
                        <button> <img src={appIcons.minus} alt="Diminuir" onClick={() => setQuantity(prevState => prevState > 1 ? prevState - 1 : 1)}/> </button>
                        <p>{quantity}</p>
                        <button> <img src={appIcons.plus} alt="Aumentar" onClick={() => setQuantity(prevState => prevState + 1)}/> </button>
                        </Quantity>

                        <Button colorCode="TOMATO_100" id="Mobile" type="button" onClick={() => handleAddToOrder()}>
                            <img src={appIcons.receipt} alt="Botao pedir" />
                            pedir ∙ {displayPrice()}
                        </Button>

                        <Button colorCode="TOMATO_100" id="Desktop" type="button" onClick={() => handleAddToOrder()}>
                            incluir ∙ {displayPrice()}
                        </Button>
                    </Order>
                </Info>
            </Dish>}

            <Footer/>
        </Container>
    )
}