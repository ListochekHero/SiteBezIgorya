import {FlexList} from "../UI/flexList";
import {ListItem, styled} from "@mui/material";
import {Home, ImportContacts} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <FlexList>
            <ListItem>
                <StyledLink to="/" end>
                    <Home/>
                    Головна
                </StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to="journal">
                    <ImportContacts/>
                    Журнал
                </StyledLink>
            </ListItem>
        </FlexList>
    );
};

const StyledLink = styled(NavLink)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.text.secondary,
    "&.active": {
        color: theme.palette.action.selected,
    },
    "&:hover": {
        color: theme.palette.action.hover,
    },
}));