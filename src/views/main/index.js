import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";
import {useEffect, useState} from "react";
import {IfError} from "../../components/ifError";

export const Main = () => {
    const [cvs, setCvs] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchCvs = async () => {
        return await API.getCVs();
    };

    useEffect(() => {
        fetchCvs()
            .then(r => setCvs(r));;
        setLoad(!!cvs[0])
    }, []);

    return (
        <MainContainer>
            <Wrapper>
                {load ? cvs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                )) : <IfError/>}
            </Wrapper>
        </MainContainer>
    );
};
