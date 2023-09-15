import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useMemo, useState} from "react";
import {colors} from "./variables";
import {Header} from "./components/header";
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

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline/>
                <Header mode={mode} setMode={setMode}/>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
