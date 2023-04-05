import { Container, Main, Banner, Content} from "./styles";
import { Header } from "../../../components/CommonUser/header"
import { Card } from "../../../components/CommonUser/card"
import { Footer } from "../../../components/footer";
import { Gallery } from "../../../components/gallery";
import macaronsSmall from "../../../assets/macaronsSmall.png"
import macarons from "../../../assets/macarons.png"
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

export function Home(){
    const { fetchFavorites } = useAuth()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories(){
            const response = await api.get('/categories')
            setCategories(response.data)
        }

        fetchCategories()
        fetchFavorites()
    }, [])

    const windowWidth = window.outerWidth

    return(
        <Container>
            <Header/>
            <Main>
                <Banner>
                    <img src={(windowWidth>799) ? macarons : macaronsSmall} alt="Macarons" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>

                <Content>
      
                    {
                        categories.map(category => (
                            <div className="elementWrapper" key={category.id}>
                                    <h2>{category.name}</h2>
                                <Gallery id={category.id}>
                                    {
                                        category.dishes ? (category.dishes.map(dish => (
                                            <Card key={dish.id} data={dish}/>
                                        ))) : <></>
                                    }
                                </Gallery>
                            </div>
                        ))
                    }
                    
                </Content>
            </Main>
            <Footer/>
        </Container>
    )
}