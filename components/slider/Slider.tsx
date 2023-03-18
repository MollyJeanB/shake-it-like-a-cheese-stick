import React from "react";
import { SliderInput, SliderLabel, SliderWrapper } from "./slider.styles";

export const Slider: React.FC = () => {
    return (
        <SliderWrapper>
            <SliderInput type="range" min="0" max="100" id="speed" />
            <SliderLabel>
                {'Speed'}
            </SliderLabel>
        </SliderWrapper>
    )
}