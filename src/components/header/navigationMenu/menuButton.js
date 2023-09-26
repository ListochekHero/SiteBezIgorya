import {DragHandle} from "@mui/icons-material";
import {Button, styled, Typography} from "@mui/material";

export const MenuButton = ({handleMenu}) => {
    return (
        <StyledButton
            onClick={handleMenu}
        >
            <StyledTypography>
                Menu
            </StyledTypography>
            <DragHandle/>
        </StyledButton>
    );
};

const StyledButton = styled(Button)(({theme}) => ({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    padding: "0 20px",
    height: "100%",
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: "12px",
    color: theme.palette.text.primary,
    "&:hover": {
        background: theme.palette.action.hover,
    },
}));

const StyledTypography = styled(Typography)(() => ({
    "@media (max-width: 540px)": {
        display: "none",
    },
}));