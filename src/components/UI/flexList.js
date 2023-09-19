import {List, styled} from "@mui/material";

export const FlexList = (props) => {
    return (
        <StyledList>
            {props.children}
        </StyledList>
    );
};

const StyledList = styled(List)(() => ({
    display: "flex",
}));