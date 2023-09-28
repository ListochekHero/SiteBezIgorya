import {Typography, styled, Container, IconButton, Box} from "@mui/material";

export const Footer = () => {
    return (
        <StyledFooter component="footer">
            <StyledContainer>
                <IconButton onClick={switchTheme}>
                    {mode === "light" ? <LightModeIcon/> : <ModeNightIcon/>}
                </IconButton>
                <StyledTypography align="center">
                    © Your Website {new Date().getFullYear()}
                </StyledTypography>
            </StyledContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled(Container)(() => ({
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
    alignItems: "center",
    borderRadius: "15px",
    width: "auto",
    maxWidth: "100%",
    height: "55px",
    padding: "4px",
    "@media (min-width:1200px)": {
        maxWidth: "100%",
    },
    "@media (min-width: 600px)": {
        padding: "4px",
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
}));