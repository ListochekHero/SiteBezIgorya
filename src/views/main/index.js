import {MainContainer} from "../../components/mainContainer";
import {InfoCard} from "./infoCard";
import {API} from "../../api";
import {Wrapper} from "../../components/wrapper";
import {useEffect, useState} from "react";
import {IfError} from "../../components/ifError";
import {Loader} from "../../components/loader";

export const Main = () => {
    const [cvs, setCvs] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchCvs = async () => await API.getCVs();

    const getCvs = (r) => {
        setCvs(r);
        setIsError(!r[0]);
    };

    useEffect(() => {
        fetchCvs()
            .then(r => getCvs(r))
            .then(() => setIsLoad(!isLoad));
    }, []);

    return (
        <MainContainer>
            <Wrapper>
                {isLoad ? (isError ? <IfError/> : cvs.map((card, id) => (
                    <InfoCard
                        props={card}
                        key={id}
                    />
                ))) : <Loader/>}
            </Wrapper>
        </MainContainer>
    );
};
