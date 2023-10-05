import {List, styled} from "@mui/material";
import {NavigationItem} from "./navigationItem";
import {links} from "../links";

export const Index = () => {
    return (
        <StyledNavigation>
            {links.map((link, id) => (
                <NavigationItem label={link.label} route={link.route} key={id}/>
            ))}
        </StyledNavigation>
    );
};

const StyledNavigation = styled(List)(() => ({
    display: "flex",
    padding: "0",
    "@media (max-width:900px)": {
        display: "none",
    },
}));