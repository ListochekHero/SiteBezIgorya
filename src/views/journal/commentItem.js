import {Avatar, Box, Card, styled, Typography} from "@mui/material";

export const CommentItem = ({comment}) => {
    return (
        <StyledCard>
            <StyledAvatar src={comment.URLAvatar}/>
            <StyledBox>
                <Name variant="h6" component="h6">{comment.Name} — {comment.DevStatus}</Name>
                <Comment>{comment.Comment}</Comment>
            </StyledBox>
        </StyledCard>
    );
};

const StyledCard = styled(Card)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "20px",
    padding: "20px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    "@media (max-width: 700px)": {
        maxWidth: "none",
    },
    "@media (max-width: 540px)": {
        padding: "10px",
    },
}));

const StyledAvatar = styled(Avatar)(() => ({
    width: "60px",
    height: "60px",
}));

const StyledBox = styled(Box)(() => ({
    flexGrow: "1",
}));

const Name = styled(Typography)(() => ({
    textAlign: "center",
}));

const Comment = styled(Typography)(() => ({
    textAlign: "justify",
    "@media (max-width: 540px)": {
        fontSize: "12px",
    },
}));