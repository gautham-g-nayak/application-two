import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="topSpace"></div>
      <Routes>
        <Route path="/one" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
        <Route path="/three" element={<PageThree />} />
        <Route path="*" element={<Navigate to="/one" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
