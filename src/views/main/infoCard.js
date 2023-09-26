import {Avatar, Box, Button, Card, IconButton, styled, Typography} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import {NavLink} from "react-router-dom";

export const InfoCard = ({props}) => {
    return (
        <StyledCard sx={{p: 3}}>
            <InfoBox>
                <Avatar
                    alt={props.name}
                    src={props.url}
                    sx={{width: 200, height: 200}}
                />
                <StyledBox>
                    <Typography variant="h4" align="center">{props.name}</Typography>
                    <Typography align="justify" sx={{mx: 5, my: 2}}>{props.description}</Typography>
                    <ButtonsWrapper>
                        <StyledButton href={props.gitHub}
                                      target="_blank">GitHub</StyledButton>
                        <StyledLink to={props.cv}>Резюме</StyledLink>
                        <StyledButton href={props.portfolio}
                                      target="_blank">Портфоліо</StyledButton>
                    </ButtonsWrapper>
                </StyledBox>
            </InfoBox>
            <ButtonsWrapper>
                <IconButton href="#">
                    <Telegram/>
                </IconButton>
                <IconButton href="#">
                    <Instagram/>
                </IconButton>
                <IconButton href="#">
                    <Facebook/>
                </IconButton>
            </ButtonsWrapper>
        </StyledCard>
    );
};

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
}));

const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "400px",
}));

const StyledButton = styled(Button)(({theme}) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "50%",
    height: "100px",
    width: "100px",
}));

const ButtonsWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-around",
}));

const StyledLink = styled(NavLink)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    width: "100px",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "50%",
    color: theme.palette.text.secondary,
    textDecoration: "none",
}));

const InfoBox = styled(Box)(() => ({
    display: "flex",
}));