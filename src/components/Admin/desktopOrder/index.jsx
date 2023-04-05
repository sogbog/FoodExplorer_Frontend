import { Container, Status } from "./styles";
import theme from "../../../styles/theme";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function DesktopOrder({data}){

    useEffect(() => {
        const display = document.querySelector("#statusDisplay" + data.id)  
        
        switch(data.status){
            case "Pendente": display.style.backgroundColor = theme.COLORS.TOMATO_300; break
            case "Preparando": display.style.backgroundColor = theme.COLORS.CARROT; break
            case "Entregue": display.style.backgroundColor = theme.COLORS.MINT; break
        }
    }, [])

    async function setDefaultCategory(status){
        const display = document.querySelector("#statusDisplay" + data.id)        

        await api.put("/orders", {id: data.id, status})
        
        switch(status){
            case "Pendente": display.style.backgroundColor = theme.COLORS.TOMATO_300; break
            case "Preparando": display.style.backgroundColor = theme.COLORS.CARROT; break
            case "Entregue": display.style.backgroundColor = theme.COLORS.MINT; break
        }
    }
    
    return(
        <Container>
            <td>
                <Status>
                <div id={"statusDisplay" + data.id}></div>

                <select name="status_select" id={"status_select" + data.id} defaultValue={data.status} onChange={e => setDefaultCategory(e.target.value)}>
                    <option value="Pendente" id="pending">Pendente</option>
                    <option value="Preparando" id="preparing">Preparando</option>
                    <option value="Entregue" id="delivered">Entregue</option>
                </select>
                </Status>
            </td>
            <td>{data.id}</td>
            <td>
                {data.details}
            </td>
            <td>{data.created_at}</td>
        </Container>
    )
}