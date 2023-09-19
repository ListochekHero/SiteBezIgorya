import {Typography, Box, styled,} from "@mui/material";

export const Footer = () => {
    return (
        <StyledBox sx={{p: 4,}} component="footer">
            <Typography align="center">
                © Your Website {new Date().getFullYear()}
            </Typography>
        </StyledBox>
    );
};

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.footer,
}));