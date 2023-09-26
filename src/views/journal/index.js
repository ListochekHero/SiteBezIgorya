import {MainContainer} from "../../components/UI/mainContainer";
import {LinkButton} from "../../components/header/linkButton";
import {Sprint} from "./sprint";

export const Journal = () => {
    return (
        <MainContainer>
            <Sprint id={1}/>
            <LinkButton to="/login">
                Додати пост
            </LinkButton>
        </MainContainer>
    );
};