import {Button, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const LinkButton = ({to, startIcon = false, endIcon = false, children}) => {
    return (
        <StyledLink to={to}>
            <Button variant="contained" startIcon={startIcon} endIcon={endIcon}>
                {children}
            </Button>
        </StyledLink>
    );
};

const StyledLink = styled(NavLink)(({theme}) => ({
    color: theme.palette.text.secondary,
    textDecoration: "none",
    marginTop: "20px",
}));