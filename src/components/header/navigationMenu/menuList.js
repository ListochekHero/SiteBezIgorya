import {Menu, MenuItem, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

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
            <StyledItem>
                <StyledLink to={"/"} onClick={handleMenu}>
                    Team
                </StyledLink>
            </StyledItem>
            <StyledItem>
                <StyledLink to={"/journal"} onClick={handleMenu}>
                    Sprints
                </StyledLink>
            </StyledItem>
            <StyledItem>
                <StyledLink to={"/login"} onClick={handleMenu}>
                    Log in
                </StyledLink>
            </StyledItem>
        </StyledMenu>
    );
};

const StyledMenu = styled(Menu)(({theme}) => ({
    "> .MuiMenu-paper": {
        width: "126px",
        marginTop: "5px",
        boxShadow: "none",
        borderRadius: "12px",
        border: `2px solid ${theme.palette.action.hover}`,
    },
    "@media (min-width: 901px)": {
        display: "none",
    },
}));

const StyledItem = styled(MenuItem)(({theme}) => ({
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    padding: "0",
    ":hover": {},
}));

const StyledLink = styled(NavLink)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: theme.palette.text.primary,
    "&.active": {
        backgroundColor: theme.palette.primary.light,
    },
}));