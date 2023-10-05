import {Container, styled} from "@mui/material";

export const MainContainer = (props) => {
    return (
        <StyledContainer maxWidth="false">
            {props.children}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
}));