import {Box, List, styled} from "@mui/material";
import {SprintItem} from "./sprintItem";

export const SprintList = ({description}) => {
    return (
        <Box>
            <StyledList>
                {description.map((item, id) => (
                    <SprintItem item={item} key={id}/>
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