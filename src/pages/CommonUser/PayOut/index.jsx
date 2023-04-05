import { Button } from "../../../components/button";
import { Header } from "../../../components/CommonUser/header"
import { Footer } from "../../../components/footer"
import { SmallCard } from "../../../components/smallCard";
import { Container, Content, Orders, Dishes, ButtonArea, PayArea, PayForm } from "./styles";
import { appIcons } from "../../../assets/icons/appIcons";
import QR from "../../../assets/QR_code.png"
import { useState, useEffect } from "react"
import { TextInput } from "../../../components/textInput";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

export function PayOut(){

    const {orders, setOrders, orderStatus, setOrderStatus} = useAuth()
    const [payMethod, setpayMethod] = useState("PIX")

    useEffect(() => {
        let payTimer
        let deliverTimer
        let confirmTimer
        let orderID

        const windowWidth = window.outerWidth

        if (windowWidth > 799){
            async function deliverTimeout(delay){
                deliverTimer = setTimeout(async () => {
                    try {
                        [orderID] = orderID
                        await api.put("/orders", {status: "Entregue", id: orderID})
                        setOrderStatus("Delivered")
                    } catch (error) {
                        if(error.response){
                            alert(error.response.data.message)
                        }else{
                            alert("Ocorreu um erro com seu pedido :(")
                        }
                    }
                }, delay)
            }
            
            async function payTimeout(delay){
                payTimer = setTimeout(async () => {
                    let details = ""
                    orders.map(dish => {
                        details ? details = `${details}, ${dish.quantity} x ${dish.name}`
                        :
                        details = `${dish.quantity} x ${dish.name}`
                    })

                    try {
                        const response = await api.post("/orders", {details})
                        orderID = response.data
                    } catch (error) {
                        if(error.response){
                            alert(error.response.data.message)
                        }else{
                            alert("Ocorreu um erro com seu pedido :(")
                        }
                    }

                    setpayMethod("Payed")
                    setOrderStatus("Ordered")
                    deliverTimeout(20000)
                }, delay)
            }

            function confirmTimeout(delay){
                confirmTimer = setTimeout(async () => {
                    let details = ""
                    orders.map(dish => {
                        details ? details = `${details}, ${dish.quantity} x ${dish.name}`
                        :
                        details = `${dish.quantity} x ${dish.name}`
                    })

                    try {
                        const response = await api.post("/orders", {details})
                        orderID = response.data
                    } catch (error) {
                        if(error.response){
                            alert(error.response.data.message)
                        }else{
                            alert("Ocorreu um erro com seu pedido :(")
                        }
                    }

                    setpayMethod("Payed")
                    setOrderStatus("Ordered")
                    deliverTimeout(20000)
                }, delay)
            }
    
            if(orders[0]){
                if((payMethod == "PIX" || payMethod == "Cash") && orderStatus == "Waiting"){
                    payTimeout(20000)
                }
    
                if(payMethod == "Waiting" && orderStatus == "Waiting"){
                    setOrderStatus("Confirming")

                    confirmTimeout(5000)
                }
            }
        }

        return() => {
            clearTimeout(payTimer)
        }
    }, [payMethod])

    function renderPayArea(){

        if(orderStatus == "Waiting"){
            if(payMethod == "PIX"){           
                return(<img src={QR} alt="Codigo QR" id="PIXDisplay"/>)
            }
    
            if(payMethod == "Credit"){          
                return(
                    <PayForm id="creditDisplay">
                        <TextInput type="text" label="Número do Cartão" placeholder ="0000 0000 0000 0000"/>
    
                        <div id="smallInputWrapper">
                            <TextInput type="text" label="Validade" placeholder ="mm/aa"/> 
    
                            <TextInput type="text" label="CVC" placeholder ="000"/>
                        </div>
    
                        <button onClick={() => setpayMethod("Waiting")}>
                            <img src={appIcons.receipt} alt="Menu" />
                            Finalizar pagamento
                        </button>
                    </PayForm>
                )
            }
    
            if(payMethod == "Cash"){
                return(
                    <PayForm id="cashDisplay">
                        <img src={appIcons.clock} alt="Relogio" className="PaymentStepsImg"/>
                        <p className="PaymentStepsText">Aguardando pagamento no caixa</p>
                    </PayForm>
                )
            }
        }


        if(orderStatus == "Confirming"){
            return(
                <PayForm>
                    <img src={appIcons.clock} alt="Relogio" className="PaymentStepsImg"/>
                    <p className="PaymentStepsText">Aguardando confirmação do pagamento</p>
                </PayForm>
            )
        }



        if(orderStatus == "Ordered"){
            return(
                <PayForm>
                    <img src={appIcons.approved} alt="Aprovado" className="PaymentStepsImg"/>
                    <p className="PaymentStepsText">Pagamento aprovado!</p>
                </PayForm>
            )
        }

        if(orderStatus == "Delivered"){
            return(
                <PayForm>
                    <img src={appIcons.silverware} alt="Talheres" className="PaymentStepsImg"/>
                    <p className="PaymentStepsText">Pedido entregue!</p>
                </PayForm>
            )
        }
    }

    function handleStyling(payMethod){
        const pixButton = document.querySelector("#PIX")
        const creditButton = document.querySelector("#Credit")
        const cashButton = document.querySelector("#Cash")

        if(payMethod == "PIX"){
            pixButton.classList.add("Selected")
            creditButton.classList.remove("Selected")
            cashButton.classList.remove("Selected")

            setpayMethod("PIX")
        }

        if(payMethod == "Credit"){
            creditButton.classList.add("Selected")
            pixButton.classList.remove("Selected")
            cashButton.classList.remove("Selected")

            setpayMethod("Credit")
        }

        if(payMethod == "Cash"){
            cashButton.classList.add("Selected")
            creditButton.classList.remove("Selected")
            pixButton.classList.remove("Selected")

            setpayMethod("Cash")
        }
    }

    function displayPrice(){
        let displayPrice
        let total = 0
        
        orders.map(dish =>  total += (dish.quantity*dish.price))

        switch (total.toString().length) {
            case 1:
                displayPrice = ("Total: R$ 00,0" + total.toString())
            break;
            
            case 2:
                displayPrice = ("Total: R$ 00," + total.toString())
            break;

            case 3:
                displayPrice = ("Total: R$ 0" + total.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;

            default:
                displayPrice = ("Total: R$ " + total.toString().replace(/\B(?=(\d{2}$))/, ','))
            break;
        }
        return displayPrice
    }
    
    return(
        <Container>
            <Header/>

            <Content>
                <Orders>
                    <h2>Meu pedido</h2>

                    { orders[0] ? 
                        <Dishes>
                           { orders.map(dish => (
                                <li key={dish.id}><SmallCard data={dish} isOrder={orderStatus == "Waiting" ? true : false}/></li>
                           ))}
                        </Dishes>
                        :
                        <p id="no_orders">Não há nenhum prato em seu pedido. Para fazer um pedido, adicione um prato e volte à essa página :D</p>
                    }

                    {orders[0] && <p>{displayPrice()}</p>}
                </Orders>

                {orders[0] && <PayArea>
                    <h2>Pagamento</h2>

                    {(orderStatus == "Waiting") && <div id="payMethods">
                        <button id="PIX" onClick={() => handleStyling("PIX")} className="Selected"><img src={appIcons.PIX} alt="PIX"/>PIX</button>
                        <button id="Cash" onClick={() => handleStyling("Cash")}><img src={appIcons.dollar} alt="PIX"/>Dinheiro</button>
                        <button id="Credit" onClick={() => handleStyling("Credit")}><img src={appIcons.credit} alt="Cartão de crédito"/>Crédito</button>
                    </div> }

                    <div id="display" className={orderStatus != "Waiting" ? "ordered" : ""}>
                        { renderPayArea() } 
                    </div>
                </PayArea>}
            </Content>

            {orders[0] && <ButtonArea to="/payout_mbl">
                <Button colorCode='TOMATO_100'>Avançar</Button>
            </ButtonArea>}

            <Footer/>
        </Container>
    )
} 