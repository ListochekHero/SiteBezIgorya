import {Typography} from "@mui/material";
import {MainContainer} from "../../components/UI/mainContainer";
import {PostAdd} from "@mui/icons-material";
import {LinkButton} from "../../components/UI/linkButton";

export const Journal = () => {
    return (
        <MainContainer>
            <Typography>
                JOURNAL
            </Typography>
            <LinkButton to="/login" startIcon={<PostAdd/>}>
                Додати пост
            </LinkButton>
        </MainContainer>
    );
};