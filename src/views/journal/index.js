import {MainContainer} from "../../components/mainContainer";
import {Wrapper} from "../../components/wrapper";
import {Sprint} from "./sprint";
import {CommentList} from "./commentList";
import {API} from "../../api";
import {useMemo, useState} from "react";
import {PaginationBox} from "./pagination";

export const Journal = () => {
    const [page, setPage] = useState(1);

    const sprint = API.getSprint(page);
    const count = useMemo(() => API.getCount(), []);

    return (
        <MainContainer>
            <Wrapper>
                <Sprint title={sprint.title} date={sprint.date} snapshotURL={sprint.snapshotURL}
                        description={sprint.description} id={sprint.id}/>
                <CommentList comments={sprint.comments}/>
                <PaginationBox setPage={setPage} count={count}/>
            </Wrapper>
        </MainContainer>
    );
};