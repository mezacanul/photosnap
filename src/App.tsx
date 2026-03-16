import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/stories"
                    element={<Stories />}
                />
                <Route
                    path="/features"
                    element={<Features />}
                />
                <Route
                    path="/pricing"
                    element={<Pricing />}
                />
            </Route>
        </Routes>
    );
}

export default App;
