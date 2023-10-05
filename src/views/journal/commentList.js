import {Box, styled} from "@mui/material";
import {CommentItem} from "./commentItem";

export const CommentList = ({comments}) => {
    return (
        <StyledBox>
            {comments.map((comment, id) => (
                <CommentItem comment={comment} key={id}/>
            ))}
        </StyledBox>
    );
};

const StyledBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    "@media (max-width: 900px)": {
        flexWrap: "wrap",
    },
}));