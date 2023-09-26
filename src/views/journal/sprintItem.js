import {ListItem, ListItemIcon, Typography} from "@mui/material";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";

export const SprintItem = ({item}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <RadioButtonUnchecked/>
            </ListItemIcon>
            <Typography>
                {item}
            </Typography>
        </ListItem>
    );
};