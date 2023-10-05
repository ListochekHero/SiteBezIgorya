import {Box, styled, TextField, Typography} from "@mui/material";

export const DescriptionInput = ({value, onChange, id, children, isError}) => {
    return (
        <StyledBox>
            <StyledTextField
                error={!value && isError}
                fullWidth
                label={children}
                color="secondary"
                variant="standard"
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
            />
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    columnGap: "10px",
}));

const StyledTextField = styled(TextField)(({theme}) => ({
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    ">label": {
        color: theme.palette.secondary.main,
    },
}));