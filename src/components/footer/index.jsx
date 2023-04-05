import { Container } from "./styles";
import { appIcons } from "../../assets/icons/appIcons";

export function Footer(){
    return(
        <Container>
            <div id="logo">
                <img src={appIcons.footerLogo} alt="" />
                <h2>food explorer</h2>
            </div>
            
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}