import {List, styled} from "@mui/material";
import {DescriptionItem} from "./descriptionItem";

export const DescriptionList = ({description}) => {
    return (
        <StyledList>
            {description.map((item, id) => (
                <DescriptionItem item={item} key={id}/>
            ))}
        </StyledList>
    );
};

const StyledList = styled(List)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
    flexGrow: "1",
    padding: "0",
}))