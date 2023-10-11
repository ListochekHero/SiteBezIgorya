import {ListItem, styled} from "@mui/material";
import {Description} from "../../components/UI/description";

export const DescriptionItem = ({item}) => {
    return (
        <Item>
            <Description>
                {item}
            </Description>
        </Item>
    );
};

const Item = styled(ListItem)(({theme}) => ({
    alignItems: "center",
    gap: "10px",
    padding: "0 0 0 20px",
    "@media (max-width: 540px)": {
        alignItems: "center",
    },
    ":before": {
        content: "''",
        position: "absolute",
        left: 0,
        width: "8px",
        height: "8px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "50%",
    },
}));