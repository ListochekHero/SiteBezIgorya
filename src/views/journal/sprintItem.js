import {ListItem, ListItemIcon, Typography} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export const SprintItem = ({item}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <RadioButtonUncheckedIcon/>
            </ListItemIcon>
            <Typography>
                {item}
            </Typography>
        </ListItem>
    );
};