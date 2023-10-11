import {Paper, styled} from "@mui/material";
import {MainContainer} from "../../components/mainContainer";
import {FormPost} from "./formPost";
import {Wrapper} from "../../components/wrapper";
import {API} from "../../api";
import {useEffect, useState} from "react";
import {Title} from "../../components/UI/title";

export const NewSprint = () => {
    const [count, setCount] = useState(0);

    const fetchCount = async () => await API.getCount();

    useEffect(() => {
        fetchCount()
            .then(r => setCount(r));
    }, []);

    return (
        <MainContainer>
            <Wrapper>
                <StyledPaper>
                    <Title>Sprint #{count + 1}</Title>
                    <FormPost count={count} setCount={setCount}/>
                </StyledPaper>
            </Wrapper>
        </MainContainer>
    );
};

const StyledPaper = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
    borderRadius: "15px",
    "@media (max-width: 700px)": {
        flexWrap: "wrap",
    },
    "@media (max-width: 540px)": {
        padding: "10px",
    },
}));