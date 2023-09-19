import {MainContainer} from "../../components/UI/mainContainer";
import {FormControl, styled} from "@mui/material";
import {Send} from "@mui/icons-material";
import {LinkButton} from "../../components/UI/linkButton";
import {Input} from "./input";

export const Login = () => {
    return (
        <MainContainer>
            <StyledForm sx={{mt: 4}} variant="filed">
                <Input label="Введіть логін">
                    Логін:
                </Input>
                <Input label="Введіть пароль">
                    Пароль:
                </Input>
                <LinkButton to="/newPost" endIcon={<Send/>}>
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