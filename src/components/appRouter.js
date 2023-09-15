import {Route, Routes} from "react-router-dom";
import {Main} from "../views/main";
import {Journal} from "../views/journal";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="journal" element={<Journal/>}/>
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};