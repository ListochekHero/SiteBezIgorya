import {Box, styled} from "@mui/material";
import {useState} from "react";
import {MenuButton} from "./menuButton";
import {MenuList} from "./menuList";

export const NavigationMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <StyledBox>
            <MenuButton handleMenu={handleMenu}/>
            <MenuList handleMenu={handleMenu} isActive={isActive}/>
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    display: "none",
    justifyContent: "flex-end",
    borderRadius: "12px",
    height: "100%",
    "@media (max-width: 900px)": {
        display: "flex",
    },
}));

