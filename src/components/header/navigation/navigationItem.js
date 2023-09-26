import {ListItem, styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const NavigationItem = ({route, label}) => {
    return (
        <ListItem sx={{p: 0}}>
            <StyledLink to={route} end>
                {label}
            </StyledLink>
        </ListItem>
    );
};

const StyledLink = styled(NavLink)(({theme}) => ({
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    padding: "0 20px",
    height: "100%",
    color: theme.palette.text.primary,
    "&.active": {
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: "12px",
    },
    "&:hover": {
        textDecoration: "underline",
    },
}));