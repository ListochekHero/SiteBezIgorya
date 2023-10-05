import {styled, Typography} from "@mui/material";

export const Subtitle = ({children}) => {
    return (
        <StyledTypography variant="h6" component="h6">
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Typography)(() => ({
    textAlign: "center",
    "@media (max-width: 540px)": {
        fontSize: "14px",
    },
}));