import { Container, Favs } from "./styles";
import { Header } from "../../../components/CommonUser/header"
import { Footer } from "../../../components/footer"
import { SmallCard } from "../../../components/smallCard";
import { useAuth } from "../../../hooks/auth";
import { useEffect } from "react";

export function Favorites(){
    const {favorites, fetchFavorites} = useAuth()

    useEffect(() => {fetchFavorites()}, [])

    return(
        <Container>
            <Header/>

            <h2>Meus favoritos</h2>
            
            <Favs>
                 {favorites.map(favorite => (
                    <SmallCard data={favorite.dish} isFav key={favorite.id}/>
                ))}
            </Favs>

            <Footer/>
        </Container>
    )
}