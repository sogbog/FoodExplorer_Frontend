import { Container } from "./styles";

export function TextInput({label, isLogin, ...rest}){
    return(
        <Container isLogin={isLogin}>
            <label htmlFor={label}>{label}</label>
            <input id={label} {...rest}/>
        </Container>
    )
}