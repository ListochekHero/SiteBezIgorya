import {Box, List, ListItem, ListItemIcon, styled, Typography} from "@mui/material";
import {RadioButtonUnchecked} from "@mui/icons-material";
import {SprintItem} from "./sprintItem";

export const SprintList = ({description}) => {
    return(
        <Box>
            <StyledList>
                {description.map((item) => (
                    <SprintItem item={item}/>
                ))}
            </StyledList>
        </Box>
    );
};

const StyledList = styled(List)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
}))