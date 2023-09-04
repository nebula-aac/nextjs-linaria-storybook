import { createTheming } from "@callstack/react-theme-provider";
import { PropsWithChildren } from "react";

const lightTheme = {
    colors: {
        accent100: "#F1A9A7",
        accent200: "#E4534E",
        accent300: "#B1201B",
        white: "#FFFFFF",
        black: "#333333"
    }
};

export const theming = createTheming(lightTheme)

export type Theme = typeof lightTheme

type ThemeProviderProps = {
    theme?: Theme
    children: JSX.Element
}

export const ThemeProvider = ({
    children,
    theme = lightTheme,
}: PropsWithChildren<ThemeProviderProps>): JSX.Element => {
    return (
        <theming.ThemeProvider theme={theme}>{children}</theming.ThemeProvider>
    )
}

type ThemeCallback<T> = (tm: T) => string

export const tm = (cb: ThemeCallback<Theme>) => () => ((fn) => fn(theming.useTheme()))(cb)