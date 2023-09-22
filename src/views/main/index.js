import {Box, Container, styled, Typography} from "@mui/material";
import {MainContainer} from "../../components/UI/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";

export const Main = () => {

    const cVs = API.getCV();

    return (
        <MainContainer>
            <Box>
                <Typography variant="h1" component="h2" align="center">INFO</Typography>
            </Box>
            <WrapperCards maxWidth="false">
                {cVs.map((card) => (
                    <InfoCard
                        props={card}
                        key={card.id}
                    />
                ))}
            </WrapperCards>
        </MainContainer>
    );
};

const WrapperCards = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
}));