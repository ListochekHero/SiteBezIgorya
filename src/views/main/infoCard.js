import {Avatar, Box, Card, IconButton, styled, Typography} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export const InfoCard = ({props}) => {
    return (
        <StyledCard>
            <StyledAvatar
                variant="rounded"
                alt={props.name}
                src={props.url}
            />
            <StyledBox>
                <Name variant="h4" align="center">{props.name}</Name>
                <Status variant="h6" align="center">{props.devStatus}</Status>
                <Description align="justify">{props.description}</Description>
                <ButtonsWrapper>
                    <StyledIcon href={props.cv}>
                        <RecentActorsIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.gitHub} target="_blank">
                        <GitHubIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.portfolio} target="_blank">
                        <WorkIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.telegram} target="_blank">
                        <TelegramIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.instagram} target="_blank">
                        <InstagramIcon/>
                    </StyledIcon>
                    <StyledIcon href={props.facebook} target="_blank">
                        <FacebookIcon/>
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

const Name = styled(Typography)(() => ({
    textAlign: "center",
    "@media (max-width: 540px)": {
        fontSize: "22px",
    },
}))

const Status = styled(Typography)(() => ({
    textAlign: "center",
    "@media (max-width: 540px)": {
        fontSize: "14px",
    },
}))

const Description = styled(Typography)(() => ({
    textAlign: "justify",
    "@media (max-width: 540px)": {
        fontSize: "12px",
    },
}))