import {Typography} from "@mui/material";
import {MainContainer} from "../../components/UI/mainContainer";
import {PostAdd} from "@mui/icons-material";
import {LinkButton} from "../../components/UI/linkButton";
import {Sprint} from "./sprint";

export const Journal = () => {
    return (
        <MainContainer>
            <Sprint id={1}/>
            <LinkButton to="/login" startIcon={<PostAdd/>}>
                Додати пост
            </LinkButton>
        </MainContainer>
    );
};