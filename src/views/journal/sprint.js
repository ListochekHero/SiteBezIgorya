import {
    Box,
    CardMedia,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    Paper,
    styled,
    Typography
} from "@mui/material";
import {FlexContainer} from "../../components/UI/flexContainer";
import {API} from "../../api";
import {Image, RadioButtonUnchecked} from "@mui/icons-material";
import {SprintList} from "./sprintList";
import {Comments} from "./comments";

export const Sprint = ({id}) => {
    const sprint = API.getSprint(id);

    return (
        <Container maxWidth={false}>
            <StyledContainer maxWidth={false}>
                <Box>
                    <Typography variant="h3" component="h3">
                        Sprint #{id} - {sprint.title}
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Date: {sprint.date}
                    </Typography>
                    <StyledMedia image={sprint.snapshotURL}/>
                </Box>
                <SprintList description={sprint.description}/>
            </StyledContainer>
            <Comments comments={sprint.comments}/>
        </Container>
    );
};

const StyledMedia = styled(CardMedia)(() => ({
    width: "640px",
    height: "360px"
}));

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
}));