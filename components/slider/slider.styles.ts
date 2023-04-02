import { COLORS } from "@/utils/css"
import styled from "styled-components"

export const SliderWrapper = styled.div`
	padding-bottom: 30px;
`

export const SliderInput = styled.input`
	max-width: 300px;
	display: block;
	margin: 0 auto;
	-webkit-appearance: none;
	width: 100%;
	height: 35px;
	background: ${COLORS.SUNSET};
	border-radius: 25px;
	transition: background 0.2s;

	&:focus {
		outline: 3px solid ${COLORS.AQUA};
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		cursor: pointer;
		width: 35px;
		height: 35px;
		border: 3px solid ${COLORS.YELLOW};
		border-radius: 100%;
		background: ${COLORS.AQUA};
		transition: background 0.2s;
	}

	&::-moz-range-thumb {
		width: 28px;
		height: 28px;
		cursor: pointer;
		border: 3px solid ${COLORS.YELLOW};
		border-radius: 100%;
		background: ${COLORS.AQUA};
		transition: background 0.2s;
	}

	&&& {
		&:disabled {
			background: ${COLORS.GRAY_3};

			&::-webkit-slider-thumb {
				border: 3px solid ${COLORS.GRAY_1};
				background: ${COLORS.GRAY_5};
			}

			&::-moz-range-thumb {
				border: 3px solid ${COLORS.GRAY_1};
				background: ${COLORS.GRAY_5};
			}
		}
	}
`

export const SliderLabel = styled.label`
	display: block;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	padding-top: 10px;
`
