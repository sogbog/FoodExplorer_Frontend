import { Container, View } from "./styles";
import { appIcons } from "../../../assets/icons/appIcons";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

export function Card({data}){
    const avatarUrl = data.avatar? `${api.defaults.baseURL}/files/${data.avatar}`: appIcons.silverware
    
    const {favorites, setFavorites} = useAuth()

    async function handleFav(){
        if(favorites.find(fav => fav.dish_id == data.id)){
            const fav = favorites.find(fav => fav.dish_id == data.id)
            api.delete(`/favorites/${fav.id}`)
            setFavorites(prevState => prevState.filter(favorite => favorite.dish_id != data.id))
        }else{
            const response = await api.post("favorites", {dish_id: data.id})
            const newFav = response.data
            setFavorites(prevState => [...prevState, newFav])
        }
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
            <button id="likeButton" onClick={() => handleFav()}>
                <img src={
                    (favorites.find(favorite => favorite.dish_id == data.id)) ? appIcons.filledLike : appIcons.like
                    } alt="Botao de like" />
            </button>
            
            <Link id="editButton" to={`/edit_dish/${data.id}`}>
                <button>
                    <img src={appIcons.pencil} alt="Botao de editar" />
                </button>
            </Link>
            
            <View to={`/dish_view/${data.id}`}>
                <img src={avatarUrl} alt="Imagem do prato" className={data.avatar ? "" : "defaultImg"}/>
                <h3>{data.name} &gt;</h3>
            </View> 

            <p id="description">{data.description}</p>

            <p id="price">
                {displayPrice()}
            </p>
        </Container>
    )
}