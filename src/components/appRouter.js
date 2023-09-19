import {Route, Routes} from "react-router-dom";
import {Main} from "../views/main";
import {Journal} from "../views/journal";
import {NewPost} from "../views/newPost";
import {Login} from "../views/login";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="journal" element={<Journal/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="newPost" element={<NewPost/>}/>
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};