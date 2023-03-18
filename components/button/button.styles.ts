import { COLORS } from '@/utils/css'
import styled from 'styled-components'

export const ButtonWrapper = styled.button`
display: block;
margin: 0 auto;
background-color: ${COLORS.AQUA};
padding: 15px;
border-radius: 25px;
font: unset;
color: ${COLORS.WHITE};
border: 3px solid ${COLORS.YELLOW};

&&& {
    font-size: 20px;
    font-weight: 600;
}

&:HOVER {
    background-color: ${COLORS.SUNSET};
}
`