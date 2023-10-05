import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";
import {useEffect, useState} from "react";

export const Main = () => {
    const [cvs, setCvs] = useState([]);

    const fetchCvs = async () => {
        return await API.getCVs();
    };

    useEffect(() => {
        fetchCvs()
            .then(r => setCvs(r));
    }, []);

    return (
        <MainContainer>
            <Wrapper>
                {cvs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                ))}
            </Wrapper>
        </MainContainer>
    );
};
