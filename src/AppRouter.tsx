import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/about";
import AircraftPage from "./pages/aircraft";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aircraft" element={<AircraftPage />} />
          <Route path="/aircraft/:aircraftid" />
          <Route path="/aircraft/:categoryid" />
          <Route path="/airline" />
          <Route path="/airline/:airlineid" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
