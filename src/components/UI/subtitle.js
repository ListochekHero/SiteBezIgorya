import {styled, Typography} from "@mui/material";

export const Subtitle = ({children}) => {
    return (
        <StyledTypography variant="h3" component="h3">
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Typography)(() => ({
    fontSize: "20px",
    "@media (max-width: 540px)": {
        fontSize: "14px",
    },
}));