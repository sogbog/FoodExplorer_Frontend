import { Container, MobileOrders, DesktopOrders } from "./styles";
import { Header } from "../../../components/Admin/header"
import { Footer } from "../../../components/footer"
import { MobileOrder } from "../../../components/Admin/mobileOrder";
import { DesktopOrder } from "../../../components/Admin/desktopOrder";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";

export function Orders(){
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function fetchOrders(){
            const response = await api.get("/orders")

            setOrders(response.data)
            setLoading(false)
        }
        
        fetchOrders()
    }, [])

    const windowWidth = window.outerWidth

    return(
        <Container>
            <Header/>

            <h2>Pedidos</h2>
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
                    {orders.map(order => (
                        <DesktopOrder data={order} key={order.id}/>
                    ))}
                </tbody>
            </DesktopOrders>
            :
            <MobileOrders>
                {orders.map(order => (
                    <MobileOrder data={order} key={order.id}/>
                ))}
            </MobileOrders>}
            <Footer/>
        </Container>
    )
}