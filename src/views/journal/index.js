import {MainContainer} from "../../components/mainContainer";
import {Wrapper} from "../../components/wrapper";
import {Sprint} from "./sprint";
import {CommentList} from "./commentList";
import {API} from "../../api";
import {useEffect, useMemo, useState} from "react";
import {PaginationBox} from "./pagination";
import {logPlugin} from "@babel/preset-env/lib/debug";
import {Box} from "@mui/material";
import {IfError} from "../../components/ifError";

export const Journal = () => {
    const [sprint, setSprint] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState();
    const [load, setLoad] = useState(false);

    const fetchCount = async () => await API.getCount();
    const fetchSprint = async (id) => await API.getSprint(id);

    const getSprint = (r) => {
        setSprint(r);
        setLoad(!!r);
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
            {load ? <Wrapper>
                <Sprint title={sprint.Title}
                        date={sprint.Date}
                        snapshotURL={sprint.SnapshotURL}
                        description={sprint.Descriptions}
                        id={page}/>
                <CommentList comments={sprint.Comments}/>
                <PaginationBox setPage={setPage} count={count}/>
            </Wrapper> : <IfError/>
            }
        </MainContainer>
    );
};