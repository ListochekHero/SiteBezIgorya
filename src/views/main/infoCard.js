import {Avatar, Box, Card, IconButton, styled} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Title} from "../../components/UI/title";
import {Subtitle} from "../../components/UI/subtitle";
import {Description} from "../../components/UI/description";

export const InfoCard = ({props}) => {
    return (
        <StyledCard>
            <InfoBox display="flex" columnGap="20px">
                <StyledAvatar
                    variant="rounded"
                    alt={props.Name}
                    src={props.URLAvatar}
                />
                <StyledBox>
                    <Title>{props.Name}</Title>
                    <Subtitle>{props.DevStatus}</Subtitle>
                    <Description align="justify">{props.Description}</Description>
                </StyledBox>
            </InfoBox>
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
        </StyledCard>
    );
};

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: "20px",
    padding: "20px",
    maxWidth: "600px",
    minWidth: "480px",
    width: "calc(50% - 10px)",
    borderRadius: "15px",
    "@media (max-width: 540px)": {
        width: "100%",
        minWidth: "auto",
        padding: "10px",
        rowGap: "10px",
    },
}));

const InfoBox = styled(Box)(() => ({
    display: "flex",
    columnGap: "20px",
    "@media (max-width: 540px)": {
        columnGap: "10px",
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
}));

const ButtonsWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
}));

const StyledIcon = styled(IconButton)(({theme}) => ({
    padding: "0",
    ">svg": {
        stroke: theme.palette.background.paper,
        fill: theme.palette.secondary.main,
        ":hover": {
            fill: theme.palette.secondary.contrastText,
        }
    },
    ":hover": {
        backgroundColor: theme.palette.secondary.light,
    },
}));