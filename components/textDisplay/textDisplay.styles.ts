import { COLORS } from "@/utils/css"
import styled from "styled-components"

export const TextDisplayWrapper = styled.div`
	margin: 50px 20px;
`

export const TextDisplayHeader = styled.h1`
	margin: 0 auto;
	min-height: 125px;
	max-width: 1200px;
	padding: 25px;
	border: 3px dashed ${COLORS.YELLOW};
	border-radius: 25px;
	text-align: center;
	font-size: 50px;
`
