import {LinkButton} from "./linkButton";
import {Box, styled} from "@mui/material";

export const LoginButton = () => {
    return (
        <StyledBox>
            <LinkButton to="/login">
                Log in
            </LinkButton>
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
    width: "20%",
    maxWidth: "20%",
    "@media (max-width: 900px)": {
        display: "none",
    },
}));