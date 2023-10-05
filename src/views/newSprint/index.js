import {Paper, styled, Typography} from "@mui/material";
import {MainContainer} from "../../components/mainContainer";
import {FormPost} from "./formPost";
import {Wrapper} from "../../components/wrapper";
import {API} from "../../api";
import {useEffect, useState} from "react";

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
                    <Typography component="h4" variant="h4" align="center">
                        Sprint #{count + 1}
                    </Typography>
                    <FormPost/>
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