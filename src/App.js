import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="search" element={<Home />}>
                        <Route path=":keyword" element={<Home />} />
                    </Route>
                </Route>
                <Route path="show-more" element={<SearchResults />}>
                    <Route
                        path=":keyword/:orderBy/page/:pageNo"
                        element={<SearchResults />}
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
