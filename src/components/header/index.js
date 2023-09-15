import {AppBar, IconButton, styled, Toolbar} from "@mui/material";
import {Brightness7, ModeNight} from "@mui/icons-material";
import {Navigation} from "./navigation";
import {Logo} from "./logo";

export const Header = ({mode, setMode}) => {
    const switchTheme = () => {
        (mode === "light") ? setMode("dark") : setMode("light");
    };

    return (
        <AppBar position="static">
            <StyledToolBar>
                <Logo/>
                <Navigation/>
                <IconButton onClick={switchTheme}>
                    {mode === "light" ? <Brightness7/> : <ModeNight/>}
                </IconButton>
            </StyledToolBar>
        </AppBar>
    );
};

const StyledToolBar = styled(Toolbar)(() => ({
    justifyContent: "space-around",
    flexWrap: "wrap",
}));