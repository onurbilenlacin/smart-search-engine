import { Routes, Route } from "react-router";
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
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
