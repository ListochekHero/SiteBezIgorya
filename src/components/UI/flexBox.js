import {Box, styled} from "@mui/material";

export const FlexBox = (props) => {
    return (
        <StyledBox>
            {props.children}
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
}));