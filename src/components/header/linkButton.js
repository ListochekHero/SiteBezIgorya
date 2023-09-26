import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const LinkButton = ({to, startIcon = false, endIcon = false, children}) => {
    return (
        <StyledLink to={to}>
                {children}
        </StyledLink>
    );
};

const StyledLink = styled(NavLink)(({theme}) => ({
    display: "flex",
    textDecoration: "none",
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