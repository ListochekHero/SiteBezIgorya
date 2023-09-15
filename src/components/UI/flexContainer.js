import {Container, styled} from "@mui/material";

export const FlexContainer = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    display: "flex",
}));