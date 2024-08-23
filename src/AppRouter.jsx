import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";



export default function AppRouter(props) {
    return (

        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage {...props} />} />
                    {/* <Route path="/home" element={<HomePage {...props} />} /> */}
                </Routes>
        </BrowserRouter>

    );
}
