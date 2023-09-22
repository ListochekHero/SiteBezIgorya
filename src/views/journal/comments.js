import {Container, styled} from "@mui/material";
import {Comment} from "./comment";

export const Comments = ({comments}) => {
    return (
        <StyledContainer>
            {comments.map((comment) => (
                <Comment comment={comment}/>
            ))}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
}))