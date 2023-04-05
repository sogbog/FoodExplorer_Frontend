import { Container } from "./styles";
import { appIcons } from "../../../assets/icons/appIcons";
import { useAuth } from "../../../hooks/auth";

export function IngredientTag({ingredient}){
    const {setIngredients, ingredients} = useAuth()


    return(
        <Container>
                {ingredient}
            
                <button type="button" onClick={handleRemove}>
                    <img src={appIcons.cross}/>
                </button>
        </Container>
    )
}