import {Box, styled, TextField, Typography} from "@mui/material";

export const CommentInput = ({label, children, value, onChange, id}) => {
    return (
        <StyledBox>
            <StyledTypography>
                {children}
            </StyledTypography>
            <TextField
                label={label}
                variant="standard"
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
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