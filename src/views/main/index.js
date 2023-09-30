import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";

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