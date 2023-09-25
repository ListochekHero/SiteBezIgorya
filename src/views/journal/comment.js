import {Avatar, Paper, Typography} from "@mui/material";

export const Comment = ({comment}) => {
    return(
        <Paper>
            <Typography>{comment.name}-{comment.role}</Typography>
            <Typography>{comment.comment}</Typography>
            <Avatar src={comment.avatar}/>
        </Paper>
    );
};