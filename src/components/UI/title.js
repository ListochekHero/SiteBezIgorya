import {styled, Typography} from "@mui/material";

export const Title = ({children}) => {
    return (
        <StyledTypography variant="h2" component="h2">
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Typography)(() => ({
    fontSize: "34px",
    "@media (max-width: 540px)": {
        fontSize: "22px",
    },
}));