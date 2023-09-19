import {Container, styled} from "@mui/material";

export const MainContainer = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    flexGrow: "1",
}));