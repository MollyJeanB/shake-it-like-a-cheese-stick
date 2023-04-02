import React from "react";
import { SliderInput, SliderLabel, SliderWrapper } from "./slider.styles";

type PropsType = {
    onChange: Function,
    speed: number,
}

export const Slider: React.FC<PropsType> = ({onChange, speed}) => {
    const onInputChange = ( value: number ) => {
        onChange(value)
    }

    return (
        <SliderWrapper>
            <SliderInput
                type="range"
                min="0"
                max="4500"
                id="speed"
                onChange={event => onInputChange(parseInt(event.target.value, 10))}
                value={speed}
            />
            <SliderLabel>
                {'Dance command speed'}
            </SliderLabel>
        </SliderWrapper>
    )
}