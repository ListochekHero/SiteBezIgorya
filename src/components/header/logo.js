import {Box, styled, Typography} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";

export const Logo = () => {
    return (
        <StyledBox>
            <StyledIcon/>
            <Typography
                sx={{
                    display: {xs: "none", md: "flex"},
                    fontFamily: "Syncopate",
                    fontSize: "17px",
                    fontWeight: 700,
                }}>
                work
            </Typography>
        </StyledBox>
    );
};

const StyledIcon = styled(BadgeIcon)(() => ({
    marginRight: "10px",
}));

const StyledBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "12px",
    height: "100%",
    width: "20%",
    maxWidth: "20%",
}));