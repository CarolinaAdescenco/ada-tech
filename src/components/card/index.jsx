
import React from "react";
import { CardContainer } from "./styles";


const Card = ({ data }) => {

    return(
        <CardContainer>
            <h3>{data?.titulo}</h3>
            <p>{data?.conteudo}</p>
        </CardContainer>
    )
}

export default Card;