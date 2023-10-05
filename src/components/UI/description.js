import {styled, Typography} from "@mui/material";

export const Description = ({children}) => {
    return (
        <StyledTypography align="justify">
            {children}
        </StyledTypography>
    );
};

const StyledTypography = styled(Typography)(() => ({
    textAlign: "justify",
    "@media (max-width: 540px)": {
        fontSize: "12px",
    },
}));