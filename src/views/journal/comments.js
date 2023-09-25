import {Container, styled} from "@mui/material";
import {Comment} from "./comment";

export const Comments = ({comments}) => {
    return (
        <StyledContainer>
            {comments.map((comment, id) => (
                <Comment comment={comment} key={id}/>
            ))}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
}));