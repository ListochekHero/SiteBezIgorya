import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";
import {useEffect, useState} from "react";
import {IfError} from "../../components/ifError";
import {Loader} from "../../components/loader";

export const Main = () => {
    const [cvs, setCvs] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchCvs = async () => {
        return await API.getCVs();
    };

    const getCvs = (r) => {
        setCvs(r);
        setLoad(!!r);
    };

    useEffect(() => {
        fetchCvs()
            .then(r => getCvs(r));
    }, []);

    return (
        <MainContainer>
            <Wrapper>
                {load ? cvs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                )) : <Loader/>}
            </Wrapper>
        </MainContainer>
    );
};
