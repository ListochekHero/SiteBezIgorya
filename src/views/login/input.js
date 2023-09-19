import {Box, styled, TextField, Typography} from "@mui/material";

export const Input = ({label, children}) => {
    return (
        <StyledBox>
            <StyledTypography>
                {children}
            </StyledTypography>
            <TextField
                label={label}
                variant="standard"
            />
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    columnGap: "10px",
}));

const StyledTypography = styled(Typography)(() => ({
    width: "100px",
    textAlign: "end",
}));