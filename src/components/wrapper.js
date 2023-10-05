import {Container, styled} from "@mui/material";

export const Wrapper = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
    maxWidth: "1220px",
    "@media (min-width: 600px)": {
        padding: "0",
    },
}));