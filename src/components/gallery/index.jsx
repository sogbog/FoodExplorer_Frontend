import { Container } from "./styles"
import { appIcons } from "../../assets/icons/appIcons";
import { useEffect } from "react";

export function Gallery({children, id}){

    useEffect(() => {
        if(window.outerWidth > 800){
            const overflow = document.getElementById(id).scrollWidth > document.getElementById(id).clientWidth
            if(overflow){document.getElementById(id + "_leftBtn").style.display = "block"; document.getElementById(id + "_rightBtn").style.display = "block"}
        }
    }, [])
    

    
    function ScrollRight(){
        document.getElementById(id).scrollLeft +=800
    }

    function ScrollLeft(){
        document.getElementById(id).scrollLeft -=800
    }

    return(
        <Container id={id}>
            <button className="left" id={id + "_leftBtn"} onClick={ScrollLeft}><img src={appIcons.arrowRight} alt="Botao para ir para a esquerda"/></button>
            <button className="right" id={id + "_rightBtn"} onClick={ScrollRight}><img src={appIcons.arrowRight} alt="Botao para ir para a direita"/></button>
            { }
            {children}
        </Container>
    )
}