import React from "react";
import { styled } from "@linaria/react";
import { Theme, lightTheme, tm } from "~/theme";

export const Button = styled.button<{color: keyof Theme['colors'] }>`
    border: 1px solid #333333;
    color: ${tm((t) => t.colors.accent200)};
    background-color: ${({ color }) => lightTheme.colors[color]};
`

export default Button