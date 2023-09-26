import {MainContainer} from "../../components/UI/mainContainer";
import {FormControl, styled} from "@mui/material";
import {LinkButton} from "../../components/header/linkButton";
import {Input} from "./input";
import {useState} from "react";

const defaultState = {login: "", password: ""};

export const Login = () => {
    const [verification, setVerification] = useState("false");
    const [state, setState] = useState(defaultState);

    const onChange = (e, field) =>
        setState((state) => ({...state, [field]: e.target.value}));

    return (
        <MainContainer>
            <StyledForm sx={{mt: 4}}>
                <Input label="Введіть логін" value={state.login} onChange={onChange} field="login">
                    Логін:
                </Input>
                <Input label="Введіть пароль" value={state.password} onChange={onChange} field="password">
                    Пароль:
                </Input>
                <LinkButton to="/newPost">
                    Увійти
                </LinkButton>
            </StyledForm>
        </MainContainer>
    );
};

const StyledForm = styled(FormControl)(() => ({
    display: "flex",
    alignItems: "center",
}));