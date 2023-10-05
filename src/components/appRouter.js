import {Route, Routes} from "react-router-dom";
import {Main} from "../views/main";
import {Journal} from "../views/journal";
import {NewSprint} from "../views/newSprint";
import {Login} from "../views/login";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="journal" element={<Journal/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="newSprint" element={<NewSprint/>}/>
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};