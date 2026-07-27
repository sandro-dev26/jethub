import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/about";
import AircraftPage from "./pages/aircraft";
import AircraftDetails from "./pages/aircraftDetails";
import AirlinePage from "./pages/airline";
import AirlineDetails from "./pages/airlineDetails";
import AirportPage from "./pages/airport";
import AirportDetails from "./pages/airportDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/aircraft" element={<AircraftPage />} />
          <Route path="/aircraft/:aircraftid" element={<AircraftDetails />} />

          <Route path="/airlines" element={<AirlinePage />} />
          <Route path="/airlines/:airlineid" element={<AirlineDetails />} />

          <Route path="/airports" element={<AirportPage />} />
          <Route path="/airports/:airportid" element={<AirportDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound type="Page" isPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
