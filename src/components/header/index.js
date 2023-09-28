import {Container, styled} from "@mui/material";
import {Index} from "./navigation";
import {Logo} from "./logo";
import {LoginButton} from "./loginButton";
import {NavigationMenu} from "./navigationMenu";

export const Header = ({mode, setMode}) => {

    const saveMode = () => {
        window.localStorage.setItem("mode", mode === "light" ? "dark" : "light")
    };

    const switchTheme = () => {
        mode === "light" ? setMode("dark") : setMode("light");
        saveMode();
    };

    return (
        <StyledHeader component="header">
            <StyledContainer id="header">
                <Logo/>
                <Index/>
                <LoginButton/>
                <NavigationMenu/>
                {/*<IconButton onClick={switchTheme}>
                    {mode === "light" ? <Brightness7/> : <ModeNight/>}
                </IconButton>*/}
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled(Container)(() => ({
    padding: "25px 30px",
    margin: "0 auto",
    "@media (min-width:1200px)": {
        maxWidth: "100%",
    },
}));

const StyledContainer = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: "15px",
    width: "auto",
    maxWidth: "100%",
    height: "55px",
    padding: "4px",
    backgroundColor: theme.palette.primary.main,
    "@media (min-width:1200px)": {
        maxWidth: "100%",
    },
    "@media (min-width: 600px)": {
        padding: "4px",
    },
}));