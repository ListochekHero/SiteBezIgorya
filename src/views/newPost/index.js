import {Typography} from "@mui/material";
import {MainContainer} from "../../components/mainContainer";
import {FormPost} from "./formPost";

export const NewPost = () => {

    return (
        <MainContainer>
            <Typography>
                NEW POST
            </Typography>
            <FormPost/>
        </MainContainer>
    );
};