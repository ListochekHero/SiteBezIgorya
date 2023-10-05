import {Box, Button, FormControl, styled, Typography} from "@mui/material";
import {useState} from "react";
import {Input} from "../login/input";
import {CommentInput} from "./commentInput";
import {API} from "../../api";
import {MyButton} from "../../components/UI/myButton";
import {FlexBox} from "../../components/UI/flexBox";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const defaultState = {
    title: "",
    descriptions: [""],
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

const defaultDescriptions = [""];

const defaultComments = [
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
];

export const FormPost = () => {
    const [state, setState] = useState(defaultState);
    const [descriptions, setDescriptions] = useState(state.descriptions);
    const [comments, setComments] = useState(defaultComments);
    const [dmytro, serhii, andrii] = comments;
    const [isError, setIsError] = useState(false);
    const [file, setFile] = useState();

    const form = new FormData();

    const checking = (descriptions) => {
        if (!!descriptions[0]) {
            let check = true;
            descriptions.forEach(item => !!item ? null : check = false);
            return check;
        } else {
            return false
        }
    };

    const validate = !!file && !!state.title && !!descriptions && !!dmytro.comment && !!serhii.comment && !!andrii.comment && checking(descriptions);

    const onChange = (e, field) =>
        setState((state) => ({...state, [field]: e.target.value}));

    const giveComments = (comments) => {
        setState({...state, comments: comments});
    };

    const onCommentChange = (index, text) => {
        const newComments = [...comments];
        newComments[index] = {...newComments[index], comment: text};
        setComments(newComments);
        giveComments(newComments);
    };

    const giveDescriptions = (descriptions) => {
        setState({...state, descriptions: descriptions})
    };

    const onDescriptionChange = (index, text) => {
        const newDescriptions = [...descriptions];
        newDescriptions[index] = text;
        setDescriptions(newDescriptions);
        giveDescriptions(newDescriptions);
    };

    const resetState = () => {
        setState(defaultState);
        setComments(defaultComments);
        setDescriptions(defaultDescriptions);
        setFile(undefined);
    };

    const resetError = () => {
        setIsError(false);
    };

    const uploadFile = (e) => {
        setFile(e.target.files[0]);
    };

    const onClick = async () => {
        form.append("snapshot", file);
        form.append("json", JSON.stringify(state));
        await API.saveSprint(form);
        resetState();
        resetError();
    };

    const sendSprint = () => {
        validate ? onClick() : setIsError(true);
    };

    const addDescription = () => {
        setDescriptions([...descriptions, ""]);
    };

    const deleteDescription = () => {
        const newDescriptions = [...descriptions];
        newDescriptions.pop();
        setDescriptions(newDescriptions);
        giveDescriptions(newDescriptions);
    };

    return (
        <StyledForm>
            <Input value={state.title} onChange={onChange} field="title" isError={isError}>
                title:
            </Input>
            <Typography>Descriptions:</Typography>
            {descriptions.map((item, id) => (
                <CommentInput value={item} onChange={onDescriptionChange} id={id} key={id} isError={isError}/>
            ))}
            <FlexBox>
                <MyButton onClick={addDescription}>
                    <AddIcon/>
                </MyButton>
                <MyButton onClick={deleteDescription}>
                    <RemoveIcon/>
                </MyButton>
            </FlexBox>
            <StyledBox>
                <Typography textAlign="center">{!!file ? file.name : "file not found"}</Typography>
                <MyButton component="label" variant="contained">
                    Upload file
                    <VisuallyHiddenInput id="fileItem" type="file" onChange={(e) => uploadFile(e)}/>
                </MyButton>
            </StyledBox>
            <Typography>Comments:</Typography>
            {comments.map((item, id) => (
                <CommentInput value={item.comment} onChange={onCommentChange} id={id} key={id} isError={isError}>
                    {item.name}:
                </CommentInput>
            ))}
            <MyButton onClick={sendSprint}>Send</MyButton>
        </StyledForm>
    );
};

const StyledForm = styled(FormControl)(() => ({
    justifyContent: "center",
    alignItems: "center",
    rowGap: "20px",
}));

const StyledBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
}));

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});