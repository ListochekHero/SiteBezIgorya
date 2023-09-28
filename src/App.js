import {Box, createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import {useMemo, useState} from "react";
import {colors} from "./variables";
import {Header} from "./components/header";
import {AppRouter} from "./components/appRouter";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/footer";

function App() {
    const [mode, setMode] = useState(window.localStorage.getItem("mode") || "light");

    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? colors.lightMode
                : colors.darkMode),
        },
    });

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <StyledBox>
                    <Header/>
                    <AppRouter/>
                    <Footer mode={mode} setMode={setMode}/>
                </StyledBox>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
}));