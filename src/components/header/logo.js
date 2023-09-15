import {styled, Typography} from "@mui/material";
import {ElderlyWomanTwoTone} from "@mui/icons-material";
import {FlexBox} from "../UI/flexBox";

export const Logo = () => {
    return (
        <FlexBox>
            <StyledIcon/>
            <Typography
                variant="h6"
                sx={{
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                }}>
                Bot dif
            </Typography>
        </FlexBox>
    );
};

const StyledIcon = styled(ElderlyWomanTwoTone)(() => ({
    marginRight: "10px",
}))