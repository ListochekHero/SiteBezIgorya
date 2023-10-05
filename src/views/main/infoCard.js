import {Avatar, Box, Card, IconButton, styled, Typography} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Title} from "../../components/UI/title";
import {Subtitle} from "../../components/UI/subtitle";

export const InfoCard = ({props}) => {
    return (
        <StyledCard>
            <StyledAvatar
                variant="rounded"
                alt={props.Name}
                src={props.URLAvatar}
            />
            <StyledBox>
                <Title>{props.Name}</Title>
                <Subtitle>{props.DevStatus}</Subtitle>
                <Description align="justify">{props.Description}</Description>
                <ButtonsWrapper>
                    <StyledIcon href={props.CV} target="_blank">
                        <RecentActorsIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.GitHub} target="_blank">
                        <GitHubIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.Portfolio} target="_blank">
                        <WorkIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.Telegram} target="_blank">
                        <TelegramIcon/>
                    </StyledIcon>
                </ButtonsWrapper>
            </StyledBox>
        </StyledCard>
    );
};

const StyledCard = styled(Card)(() => ({
    display: "flex",
    justifyContent: "space-between",
    rowGap: "5px",
    padding: "20px",
    maxWidth: "600px",
    minWidth: "480px",
    width: "calc(50% - 10px)",
    borderRadius: "15px",
    "@media (max-width: 540px)": {
        width: "100%",
        minWidth: "auto",
        padding: "10px",
    },
}));

const StyledAvatar = styled(Avatar)(() => ({
    width: "150px",
    height: "100px",
    borderRadius: "6px",
    "@media (max-width: 540px)": {
        width: "100px",
        height: "60px",
    },
}));

const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "space-between",
    marginLeft: "8px",
}));

const ButtonsWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
}));

const StyledIcon = styled(IconButton)(({theme}) => ({
    stroke: theme.palette.background.default,
    padding: "0",
    marginTop: "10px",
}));

const Description = styled(Typography)(() => ({
    textAlign: "justify",
    "@media (max-width: 540px)": {
        fontSize: "12px",
    },
}));