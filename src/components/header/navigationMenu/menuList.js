import {Menu, MenuItem, styled} from "@mui/material";

export const MenuList = ({handleMenu, isActive}) => {
    const anchorEl = document.querySelector("#header");

    return (
        <StyledMenu
            anchorEl={anchorEl}
            onClose={handleMenu}
            open={isActive}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <StyledItem>Team</StyledItem>
            <StyledItem>Sprints</StyledItem>
            <StyledItem>Log in</StyledItem>
        </StyledMenu>
    );
};

const StyledMenu = styled(Menu)(({theme}) => ({
    "> .MuiMenu-paper": {
        width: "126px",
        marginTop: "5px",
        boxShadow: "none",
        borderRadius: "12px",
        border: `2px solid ${theme.palette.secondary.light}`,
    },
    "@media (min-width: 901px)": {
        display: "none",
    },
}));

const StyledItem = styled(MenuItem)(({theme}) => ({
    padding: "5px 20px",
    backgroundColor: theme.palette.primary.main,
    ":hover": {},
}));