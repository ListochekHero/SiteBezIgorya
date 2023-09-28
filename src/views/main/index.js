import {Container, styled} from "@mui/material";
import {MainContainer} from "../../components/UI/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";

export const Main = () => {
    const cVs = API.getCV();

    return (
        <MainContainer>
            <WrapperCards maxWidth="false">
                {cVs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                ))}
            </WrapperCards>
        </MainContainer>
    );
};

const WrapperCards = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
    maxWidth: "1220px",
    "@media (min-width: 600px)": {
        padding: "0",
    },
}));