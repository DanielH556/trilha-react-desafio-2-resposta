import React from "react";
import { ButtonContainer } from "./styles";

export function Button({ value, onClick })
{
    return (
        <ButtonContainer onClick={onClick}>
            {value}
        </ButtonContainer>
    )
}