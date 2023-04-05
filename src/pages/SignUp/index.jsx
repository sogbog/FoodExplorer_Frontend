import { useState } from "react"
import { appIcons } from "../../assets/icons/appIcons"
import { Container, Title, LoginArea, Form, CreateAccount } from "./styles"
import { TextInput } from "../../components/textInput"
import { Button } from "../../components/button"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"


export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Todos os campos são obrigatórios!")
        }

        api.post("/users", {name, email, password}).then(() => 
            {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível cadastrar")
                }
            })
    }
    
    return(
        <Container>
            <Title>
                <img src={appIcons.explorer_logo} alt="Explorer logo" />
                <h1>food explorer</h1>
            </Title>

            <LoginArea>
                <h1>Crie sua conta</h1>

                <Form>
                    <TextInput type="text" label="Seu nome" placeholder ="Digite seu nome" isLogin onChange={e => setName(e.target.value)}/>
                    <TextInput type="email" label="Email" placeholder ="Digite seu email" isLogin onChange={e => setEmail(e.target.value)}/>
                    <TextInput type="password" label="Senha" placeholder ="Digite sua senha" isLogin onChange={e => setPassword(e.target.value)}/>
                    <Button  colorCode='TOMATO_100' type="button" onClick={handleSignUp}>Criar conta</Button>
                </Form>

                <CreateAccount>
                    <Link to="/">Já tenho uma conta</Link>
                </CreateAccount>
            </LoginArea>
        </Container>
    )
}