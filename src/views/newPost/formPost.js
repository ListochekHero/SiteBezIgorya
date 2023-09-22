import {Button, FormControl, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Input} from "../login/input";
import {CommentInput} from "./commentInput";
import {API} from "../../api";

const defaultState = {
    title: "",
    description: "",
    snapshotURL: "",
    comments: [
        {
            name: "Dmytro",
            comment: "",
        },
        {
            name: "Serhii",
            comment: "",
        },
        {
            name: "Andrii",
            comment: "",
        },
    ],
};

export const FormPost = () => {
    const [state, setState] = useState(defaultState);
    const [comments, setComments] = useState(state.comments);

    const onChange = (e, field) =>
        setState((state) => ({...state, [field]: e.target.value}));

    const onCommentChange = (index, text) => {
        let newComments = [...comments];
        newComments[index] = {...newComments[index], comment: text};
        setComments(newComments);
        giveComments(newComments);
    };

    const giveComments = (comments) => {
        setState({...state, comments: comments});
    };

    const onClick = () => {
        API.saveSprint(state);
    };

    return (
        <FormControl>
            <Input value={state.title} onChange={onChange} field="title">
                Заголовок:
            </Input>
            <Input value={state.description} onChange={onChange} field="description">
                Опис:
            </Input>
            <Input value={state.snapshotURL} onChange={onChange} field="snapshotURL">
                Snapshot:
            </Input>
            {comments.map((item, index) => (
                <CommentInput value={item.comment} onChange={onCommentChange} id={index} key={index}>
                    {item.name}:
                </CommentInput>
            ))}
            <Button onClick={onClick}>Test</Button>
        </FormControl>
    );
};