import {MainContainer} from "../../components/mainContainer";
import {Wrapper} from "../../components/wrapper";
import {Sprint} from "./sprint";
import {CommentList} from "./commentList";
import {API} from "../../api";
import {useEffect, useState} from "react";
import {PaginationBox} from "./pagination";
import {IfError} from "../../components/ifError";
import {Loader} from "../../components/loader";

export const Journal = () => {
    const [sprint, setSprint] = useState({});
    const [page, setPage] = useState(1);
    const [count, setCount] = useState();
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const fetchCount = async () => await API.getCount();
    const fetchSprint = async (id) => await API.getSprint(id);

    const getSprint = (r) => {
        setSprint(r);
        setLoad(!!r);
        setError(!Object.keys(r).length);
    };

    useEffect(() => {
        fetchCount()
            .then(r => setCount(r));
    }, []);

    useEffect(() => {
        fetchSprint(page)
            .then(r => getSprint(r));
    }, [page]);

    return (
        <MainContainer>
            {load ? (error ? <IfError/> : <Wrapper>
                <Sprint title={sprint.Title}
                        date={sprint.Date}
                        snapshotURL={sprint.SnapshotURL}
                        description={sprint.Descriptions}
                        id={page}/>
                <CommentList comments={sprint.Comments}/>
                <PaginationBox setPage={setPage} count={count}/>
            </Wrapper>) : <Loader/>
            }
        </MainContainer>
    );
};