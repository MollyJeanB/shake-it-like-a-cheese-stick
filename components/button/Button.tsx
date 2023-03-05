import React, { ReactNode } from "react"
import { ButtonWrapper } from "./button.styles"

type PropsType = {
    children: ReactNode | string,
    onClick: Function,
}

export const Button: React.FC<PropsType> = ({ children, onClick }) => {
    return (
        <ButtonWrapper onClick={() => onClick()}>
            { children }
        </ButtonWrapper>
    )
}