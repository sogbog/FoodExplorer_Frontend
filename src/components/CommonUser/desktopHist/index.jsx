import { Container } from "./styles";

export function DesktopHist({data}){
    return(
        <Container>
            <td> <div className={'status ' + data.status}> <p>{data.status}</p> </div></td>
            <td>{data.id}</td>
            <td>{data.details}</td>
            <td>{data.created_at}</td>
        </Container>
    )
}