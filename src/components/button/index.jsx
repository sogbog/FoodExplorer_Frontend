import { Container } from "./styles";

export function Button({text, children, orders, ...rest}){
    return(
        <Container {...rest}>
            {children}
            &nbsp;
            {orders && ("(" + orders + ")")}
        </Container>
    )
}