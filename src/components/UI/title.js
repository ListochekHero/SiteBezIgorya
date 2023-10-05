import {styled, Typography} from "@mui/material";

export const Title = ({children}) => {
    return (
        <StyledTypography variant="h4" component="h4">
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Typography)(() => ({
    textAlign: "center",
    "@media (max-width: 540px)": {
        fontSize: "22px",
    },
}));