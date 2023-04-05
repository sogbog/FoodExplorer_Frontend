import { Container, Description, Text } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { appIcons } from "../../assets/icons/appIcons";

export function SmallCard({data, isOrder, isFav}){
    const {favorites, setFavorites, setOrders} = useAuth()
    
    const avatarUrl = data.avatar? `${api.defaults.baseURL}/files/${data.avatar}`: appIcons.silverware
    
    async function handleRemoveFav(){
        const fav = favorites.find(fav => fav.dish_id == data.id)
        api.delete(`/favorites/${fav.id}`)
        setFavorites(prevState => prevState.filter(favorite => favorite.dish_id != data.id))
    }

    function handleRemoveOrder(){
        setOrders(prevState => prevState.filter(dish => dish.id != data.id))
    }

    function displayPrice(){
        let displayPrice

        switch (data.price.toString().length) {
            case 1:
                displayPrice = ("R$ 00,0" + data.price.toString())
            break;
            
            case 2:
                displayPrice = ("R$ 00," + data.price.toString())
            break;

            case 3:
                displayPrice = ("R$ 0" + data.price.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;

            default:
                displayPrice = ("R$ " + data.price.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;
        }
        return displayPrice
    }


    return(
        <Container>
            <Link to={`/dish_view/${data.id}`}> <img src={avatarUrl} alt="Imagem do prato" className={data.avatar ? "" : "defaultImg"}/> </Link>

            <Text>
                <Description>
                    <Link to={`/dish_view/${data.id}`}> <h3>{isOrder ? `${data.quantity} X ${data.name}` : data.name}</h3> </Link>
                    {data.price && <p>{displayPrice()}</p>}
                </Description>

                {isOrder && <button type="button" onClick={() => handleRemoveOrder()}>Excluir</button>}

                {isFav && <button onClick={() => handleRemoveFav()}>Remover dos favoritos</button>}
            </Text>
        </Container>
    )
}