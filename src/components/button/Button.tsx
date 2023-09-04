import React from "react";
import { styled } from "@linaria/react";

const Button = styled.button<{color: string }>`
    border: 1px solid #333333;
    color: white;
    background-color: ${({color}) => color};
`