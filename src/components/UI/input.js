import {Box, styled, TextField} from "@mui/material";

export const Input = ({children, value, onChange, field, isError}) => {
    return (
        <StyledBox>
            <StyledTextField
                error={!value && isError}
                label={children}
                fullWidth
                color="secondary"
                variant="standard"
                value={value}
                onChange={(e) => onChange(e, `${field}`)}
            />
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    columnGap: "10px",
}));

const StyledTextField = styled(TextField)(({theme}) => ({
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    ">label": {
        color: theme.palette.secondary.main,
    },
}));