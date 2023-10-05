import {Wrapper} from "./wrapper";
import {styled, Typography} from "@mui/material";

export const IfError = () => {
    return (
        <Wrapper>
            <StyledTypography component="h2" variant="h2">The server is not responding</StyledTypography>
        </Wrapper>
    );
};

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
}));