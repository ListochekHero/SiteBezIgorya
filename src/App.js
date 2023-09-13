import {Container, createTheme, IconButton, ThemeProvider} from "@mui/material";
import {useMemo, useState} from "react";
import {colors} from "./variables";
import {Brightness2, Brightness7} from "@mui/icons-material";
import "./style/reset.css";

function App() {
    const [mode, setMode] = useState("light");

    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? colors.lightMode
                : colors.darkMode),
        },
    });

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const switchTheme = () => {
        (mode === "light") ? setMode("dark") : setMode("light");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{backgroundColor: "background.paper"}} maxWidth={false}>
                <IconButton onClick={switchTheme}>
                    {theme.palette.mode === "dark" ? <Brightness2/> : <Brightness7/>}
                </IconButton>
            </Container>
        </ThemeProvider>
    );
}

export default App;
