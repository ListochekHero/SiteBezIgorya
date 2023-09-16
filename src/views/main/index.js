import {Container, styled, Typography} from "@mui/material";

export const Main = () => {
    return (
        <StyledContainer>
            <Typography>
                MAIN
            </Typography>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    flexGrow: "1",
}));