import { appIcons } from "../../assets/icons/appIcons"
import { Container, Title, LoginArea, Form, CreateAccount } from "./styles"
import { TextInput } from "../../components/textInput"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"


export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    const { signIn } = useAuth()
    
    function handleSignIn(){
        signIn({email, password})
    }

    return(
        <Container>
            <Title>
                <img src={appIcons.explorer_logo} alt="Explorer logo" />
                <h1>food explorer</h1>
            </Title>

            <LoginArea>
                <h1>Faça login</h1>

                <Form>
                    <TextInput type="email" label="Email" placeholder ="Digite seu email" isLogin onChange={e => setEmail(e.target.value)}/>
                    <TextInput type="password" label="Senha" placeholder ="Digite sua senha" isLogin onChange={e => setPassword(e.target.value)}/>
                    <Button  colorCode='TOMATO_100' type="button" onClick={handleSignIn}>Entrar</Button>
                </Form>

                <CreateAccount>
                    <Link to="/SignUp">Criar uma conta</Link>
                </CreateAccount>
            </LoginArea>
        </Container>
    )
}