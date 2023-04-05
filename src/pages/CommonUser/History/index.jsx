import { Container, MobileOrders, DesktopOrders } from "./styles";
import { Header } from "../../../components/CommonUser/header"
import { Footer } from "../../../components/footer"
import { MobileHist } from "../../../components/CommonUser/mobileHist";
import { DesktopHist } from "../../../components/CommonUser/desktopHist";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";

export function History(){

    const [ordersMade, setOrdersMade] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchOrders(){
            const response = await api.get("/orders")

            setOrdersMade(response.data)
            setLoading(false)
        }
        
        fetchOrders()
    }, [])

    const windowWidth = window.outerWidth

    return(
        <Container>
            <Header/>

            <h2>Histórico de pedidos</h2>

            {loading ? <h2>Carregando...</h2> : 
            (windowWidth>799) ?  
            <DesktopOrders>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhes</th>
                        <th>Data e hora</th>
                    </tr>
                </thead>

                <tbody>
                    {ordersMade.map(order => (
                        <DesktopHist data={order} key={order.id}/>
                    ))}
                </tbody>
            </DesktopOrders>
            :
            <MobileOrders>
                {ordersMade.map(order => (
                    <MobileHist data={order} key={order.id}/>
                ))}
            </MobileOrders>}

            <Footer/>
        </Container>
    )
}