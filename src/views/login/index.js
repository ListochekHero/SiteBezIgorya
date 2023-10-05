import {MainContainer} from "../../components/mainContainer";
import {FormControl, Paper, styled} from "@mui/material";
import {LinkButton} from "../../components/header/linkButton";
import {Input} from "./input";
import {useState} from "react";
import {Wrapper} from "../../components/wrapper";

const defaultState = {login: "", password: ""};

export const Login = () => {
    const [verification, setVerification] = useState("false");
    const [state, setState] = useState(defaultState);

    const onChange = (e, field) =>
        setState((state) => ({...state, [field]: e.target.value}));

    return (
        <MainContainer>
            <Wrapper>
                <StyledPaper>
                    <StyledForm>
                        <Input value={state.login} onChange={onChange} field="login">
                            Логін:
                        </Input>
                        <Input value={state.password} onChange={onChange} field="password">
                            Пароль:
                        </Input>
                        <LinkButton to="/newSprint">
                            Log in
                        </LinkButton>
                    </StyledForm>
                </StyledPaper>
            </Wrapper>
        </MainContainer>
    );
};

const StyledForm = styled(FormControl)(() => ({
    display: "flex",
    alignItems: "center",
    rowGap: "20px",
}));

const StyledPaper = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "15px",
    "@media (max-width: 700px)": {
        flexWrap: "wrap",
    },
    "@media (max-width: 540px)": {
        padding: "10px",
    },
}));