import {Button, styled, Typography} from "@mui/material";

export const MyButton = ({onClick, children, component}) => {
    return (
        <StyledButton
            component={component}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled(Button)(({theme}) => ({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    padding: "10px 20px",
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: "12px",
    color: theme.palette.text.primary,
    "&:hover": {
        background: theme.palette.action.hover,
    },
}));