import { Container, InfoArea, Ingredients, InputWrapper, NewIngredient, DesktopWrapper, IngredientTag } from "./styles";
import { Header } from "../../../components/Admin/header"
import { Footer } from "../../../components/footer"
import { Link } from "react-router-dom";
import { appIcons } from "../../../assets/icons/appIcons";
import { Button } from "../../../components/button";
import { api } from "../../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NewDish(){    
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [avatarFile, setAvatarFile] = useState()
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() =>{
        async function fetchInfo(){
            const categoriesResponse = await api.get('/categories')

            setCategories(categoriesResponse.data)
            setCategory(categoriesResponse.data.find(category => category.id ? 1 : 0).id)
        }
        fetchInfo()
    }, [])

    async function handleCreate(){
        try {
            const newDishInfo = {
                name,
                category_id: category,
                ingredients: ingredients.join(", "),
                price,
                description
            }

            const response = await api.post("/dishes", newDishInfo)
            const [createdID] = response.data

            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("img", avatarFile)

                await api.patch(`/dishes/${createdID}/avatar`, fileUploadForm)
            }

            alert("Prato criado com sucesso!")
            navigate(`/dish_view/${response.data}`)

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Ocorreu um erro :(")
            }
        }
    }
    
    function handleFileUpload( event ){
        const uploadView = document.querySelector("#uploadText")

        uploadView.textContent = event.target.files[0].name

        const file = event.target.files[0]
        setAvatarFile(file)
    }

    function handleAddIngredient(){
        if (!newIngredient){
            alert("O ingrediente precisa ter um nome")
            return
        }
        
        if(ingredients.includes(newIngredient)){
            alert("Esse ingrediente já foi adicionado")
            return
        }
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemove(ingredient){
        setIngredients(prevState => prevState.filter(currentIngredient => currentIngredient !== ingredient))
    }

    function handlePrice(event){
        if(event){
            let intPrice = event.target.value.replace("R$ ", "")
            intPrice = parseInt(intPrice.replace(",", ""))

            isNaN(intPrice) ? setPrice("") : setPrice(intPrice)
        }
        
        if (price == ""){
            return ""
        }else{
            let displayPrice
            
            switch (price.toString().length) {
                case 1:
                    displayPrice = ("R$ 00,0" + price.toString())
                break;
                
                case 2:
                    displayPrice = ("R$ 00," + price.toString())
                break;
    
                case 3:
                    displayPrice = ("R$ 0" + price.toString().replace(/\B(?=(\d{2}$))/, ','))
                break;
    
                default:
                    displayPrice = ("R$ " + price.toString().replace(/\B(?=(\d{2}$))/, ','))
                break;
            }

            return displayPrice
        }
    }

    return(
        <Container>
            <Header/>

            <nav> <Link to={-1}> <img src={appIcons.arrowLeft} alt="Botao voltar" /> voltar </Link> </nav>

            <h2>Novo Prato</h2>

            <InfoArea>
                <DesktopWrapper>
                    <InputWrapper id="uploadWrapper">
                        <label htmlFor="uploadView">Imagem do prato</label>
                        <label htmlFor="imgUpload" id="uploadView">
                            <input type="file" id="imgUpload" onChange={handleFileUpload}/>
                            <img src={appIcons.upload} alt="Upload" />
                            <span id="uploadText">Selecione a imagem</span>
                        </label>
                    </InputWrapper>

                    <InputWrapper id="nameWrapper">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Ex.: Salada Ravanello"  value={name} onChange={e => setName(e.target.value)}/>
                    </InputWrapper>

                    <InputWrapper id="categoryWrapper">
                        <label htmlFor="category">Categoria</label>
                        
                        <label htmlFor="category" id="selectWrapper">
                            <div id="selectArrow">
                                <img src={appIcons.arrowRight} alt="Opções" />
                            </div>

                            <select id="category" onChange={e => setCategory(e.target.value)}>
                                {categories.map(category => (
                                    <option value={category.id} key={category.id} >{category.name}</option>
                                ))}
                            </select>
                        </label>
                    </InputWrapper>
                </DesktopWrapper>

                <DesktopWrapper>
                    <InputWrapper>
                        <label htmlFor="ingredients">Ingredientes</label>

                        <Ingredients>
                            {
                                ingredients.map((ingredient, index) => (
                                    <IngredientTag key={index}>
                                        {ingredient}
                                    
                                        <button type="button" onClick={() => handleRemove(ingredient)}>
                                            <img src={appIcons.cross}/>
                                        </button>
                                    </IngredientTag>
                                ))
                            }

                            <NewIngredient>
                                <input type="text" placeholder="Adicionar" value={newIngredient} onChange={ e => setNewIngredient(e.target.value)}/>

                                <button type="button">
                                    <img src={appIcons.plus} alt="Adicionar" onClick={handleAddIngredient}/>
                                </button>
                            </NewIngredient>
                        </Ingredients>
                    </InputWrapper>

                    <InputWrapper id="priceWrapper">
                        <label htmlFor="price">Preço</label>
                        <input type="text" id="price" placeholder="R$ 00,00" value={handlePrice()} onChange={e => handlePrice(e)}/>
                    </InputWrapper>
                </DesktopWrapper>

                <InputWrapper>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={`${description}`} onChange={e => setDescription(e.target.value)}></textarea>
                </InputWrapper>

                <div id="buttonWrapper">
                    <Button colorCode='TOMATO_400' type="button" onClick={handleCreate}>Criar prato</Button>
                </div>
            </InfoArea>

            <Footer/>
        </Container>
    )
}