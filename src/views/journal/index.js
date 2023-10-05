import {MainContainer} from "../../components/mainContainer";
import {Wrapper} from "../../components/wrapper";
import {Sprint} from "./sprint";
import {CommentList} from "./commentList";
import {API} from "../../api";
import {useEffect, useMemo, useState} from "react";
import {PaginationBox} from "./pagination";
import {logPlugin} from "@babel/preset-env/lib/debug";

export const Journal = () => {
    const [sprint, setSprint] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState();

    const fetchCount = async () => await API.getCount();
    const fetchSprint = async (id) => await API.getSprint(id);

    useEffect(() => {
        fetchCount()
            .then(r => setCount(r));
    }, []);

    useEffect(() => {
        fetchSprint(page)
            .then(r => setSprint(r))
    }, [page]);

    return (
        <MainContainer>
            <Wrapper>
                {!!sprint.Title && <Sprint title={sprint.Title} date={sprint.Date} snapshotURL={sprint.SnapshotURL}
                                           description={sprint.Descriptions} id={page}/>}
                {!!sprint.Comments && <CommentList comments={sprint.Comments}/>}
                <PaginationBox setPage={setPage} count={count}/>
            </Wrapper>
        </MainContainer>
    );
};