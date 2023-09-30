import {ListItem, ListItemIcon, styled, Typography} from "@mui/material";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export const DescriptionItem = ({item}) => {
    return (
        <Item>
            <Icon>
                <PanoramaFishEyeIcon color="secondary"/>
            </Icon>
            <Description>
                {item}
            </Description>
        </Item>
    );
};

const Item = styled(ListItem)(() => ({
    alignItems: "flex-start",
    gap: "10px",
    padding: "0",
    "@media (max-width: 540px)": {
        alignItems: "center",
    },
}));

const Icon = styled(ListItemIcon)(() => ({
    minWidth: "auto",
}));

const Description = styled(Typography)(() => ({
    textAlign: "justify",
    "@media (max-width: 540px)": {
        fontSize: "12px",
    },
}))