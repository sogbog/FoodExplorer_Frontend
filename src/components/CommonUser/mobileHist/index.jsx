import { Container, Info, Dishes } from "./styles";

export function MobileHist({data}){
    return(
        <Container>
            <Info>
                <p>{data.id}</p>

                <div className={'status ' + data.status} >
                    <p>{data.status}</p>
                </div>

                <p>{data.created_at}</p>
            </Info>

            <Dishes>
                {data.details}
            </Dishes>
        </Container>
    )
}