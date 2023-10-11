import {Wrapper} from "./wrapper";
import {CircularProgress} from "@mui/material";

export const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress color="secondary"/>
        </Wrapper>
    );
};