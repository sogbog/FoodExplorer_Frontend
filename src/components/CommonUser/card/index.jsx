import { Container, View, Quantity, DesktopSection } from "./styles";
import { appIcons } from "../../../assets/icons/appIcons";
import { Button } from "../../button";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { useState, useEffect } from "react";

export function Card({data}){
    const avatarUrl = data.avatar? `${api.defaults.baseURL}/files/${data.avatar}`: appIcons.silverware
    
    const {favorites, setFavorites, setOrders, orders, orderStatus, setOrderStatus} = useAuth()

    const [quantity, setQuantity] = useState(1)    
    
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

    function handleAddToOrder(){
        if(orderStatus == "Waiting"){
            let added = false

            orders.map(dish => {
                if(dish.id == data.id) {
                    dish.quantity += quantity
                    added = true
                }
            })
            
            if(!added){
                data.quantity = quantity
                setOrders(prevState => [...prevState, data])
            }
        } else{
            setOrders([])
            setOrderStatus("Waiting")

            data.quantity = quantity
            setOrders([data])
        }
    }

    return(
        <Container>
            <button id="likeButton" onClick={() => handleFav()}>
                <img src={
                    (favorites.find(favorite => favorite.dish_id == data.id)) ? appIcons.filledLike : appIcons.like
                    } alt="Botao de like" />
            </button>
            
            <View to={`/dish_view/${data.id}`}>
                <img src={avatarUrl} alt="Imagem do prato" className={data.avatar ? "" : "defaultImg"}/>
                <h3>{data.name} &gt;</h3>
            </View>  

            <p id="description">{data.description}</p>

            <p id="price">
                {displayPrice()}
            </p>

            <DesktopSection>
                <Quantity>
                    <button> <img src={appIcons.minus} alt="Diminuir" onClick={() => setQuantity(prevState => prevState > 1 ? prevState - 1 : 1)}/> </button>
                    <p>{quantity}</p>
                    <button> <img src={appIcons.plus} alt="Aumentar" onClick={() => setQuantity(prevState => prevState + 1)}/> </button>
                </Quantity>

                <Button colorCode="TOMATO_100" type="button" onClick={() => handleAddToOrder()}>Incluir</Button>
            </DesktopSection>
        </Container>
    )
}