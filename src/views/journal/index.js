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
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchCount = () => API.getCount();
    const fetchSprint = (id) => API.getSprint(id);

    const getSprint = (r) => {
        setSprint(r);
        setIsError(!Object.keys(r).length);
    };

    useEffect(() => {
        fetchCount()
            .then(r => setCount(r))
            .then(() => setIsLoad(!isLoad));
    }, []);

    fetchSprint(page)
        .then(r => getSprint(r));

    return (
        <MainContainer>
            {isLoad ? (isError ? <IfError/> : <Wrapper>
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