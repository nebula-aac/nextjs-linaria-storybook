import { ThemeProvider, lightTheme } from "../src/theme"

export const providerFn = ({ theme, children }) => {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}