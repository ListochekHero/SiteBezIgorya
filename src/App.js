import {Container, createTheme, IconButton, ThemeProvider} from "@mui/material";
import {useMemo, useState} from "react";
import {colors} from "./variables";
import {Brightness2, Brightness7} from "@mui/icons-material";
import "./style/reset.css";
import {AppRouter} from "./components/appRouter";
import {BrowserRouter} from "react-router-dom";

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
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
