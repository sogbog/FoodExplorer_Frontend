import { Container, Main, Banner, Content, NewCategory} from "./styles";
import { Header } from "../../../components/Admin/header"
import { Card } from "../../../components/Admin/card"
import { Footer } from "../../../components/footer";
import { Gallery } from "../../../components/gallery";
import macaronsSmall from "../../../assets/macaronsSmall.png"
import macarons from "../../../assets/macarons.png"
import { appIcons } from "../../../assets/icons/appIcons";
import { Button } from "../../../components/button"
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

export function Home(){

    const { fetchFavorites } = useAuth()

    const [categories, setCategories] = useState([])
    const [newCategory, setnewCategory] = useState("")

    useEffect(() => {
        async function fetchCategories(){
            const response = await api.get('/categories')
            setCategories(response.data)
        }

        fetchCategories()
        fetchFavorites()
    }, [])

    async function handleCreate(){
        const response = await api.post("/categories", {name: newCategory})
        const [newCat] = response.data
        
        setCategories(prevState => [...prevState, newCat])
        document.querySelector("#newCategory").value = ""
        setnewCategory("")
        alert("Categoria criada!")
    }
    
    async function handleDelete(id){
        const confirm = window.confirm("Tem certeza que desja deletar essa categoria? Isso excluirá todos os pratos associados à ela")

        if(confirm){
            await api.delete(`/categories/${id}`)

            setCategories(prevState => prevState.filter(category => category.id != id))
        }
    }
    
    const windowWidth = window.outerWidth

    return(
        <Container>
            <Header/>
            <Main>
                <Banner>
                    <img src={(windowWidth>799) ? macarons : macaronsSmall} alt="Macarons"/>
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>

                <NewCategory>
                    <h2>Criar nova categoria</h2>
                    <div className="wrapper">
                        <input type="text" name="Criar categoria" placeholder="Nova categoria" id="newCategory" onChange={e => setnewCategory(e.target.value)}/>
                        <Button colorCode="TOMATO_100" onClick={() => handleCreate()}>Criar</Button>
                    </div>
                </NewCategory>

                <Content>
                    {
                        categories.map(category => (
                            <div className="elementWrapper" key={category.id}>
                                <div className="nameWrapper">
                                    <h2>{category.name}</h2>
                                    <button onClick={() => handleDelete(category.id)}><img src={appIcons.trashCan} alt="Deletar" /></button>
                                </div>
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