import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";

export const Main = () => {
    const cVs = API.getCV();

    return (
        <MainContainer>
            <Wrapper>
                {cVs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                ))}
            </Wrapper>
        </MainContainer>
    );
};
