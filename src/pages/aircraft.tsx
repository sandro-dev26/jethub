import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchAircraftData } from "../fetch";
import type { Aircraft } from "../types/aircraft";

function AircraftPage() {
  const [aircraftData, setAircraftData] = useState<Aircraft[] | null>(null);
  useEffect(() => {
    async function setData() {
      try {
        const aircraft = await fetchAircraftData();
        setAircraftData(aircraft);
      } catch (err) {
        console.error("Failed to fetch aircraft:", err);
      }
    }

    setData();
  }, []);

  const navigate = useNavigate();
  return (
    <main>
      <header>
        <h1>Aircrafts</h1>
        <p>
          Explore aircrafts <span>🛈 data may be inaccurate</span>
        </p>
      </header>

      <ul>
        {aircraftData &&
          aircraftData.map((item) => (
            <li
              onClick={() => {
                navigate(`/aircraft/${item.id}`);
              }}
            >
              <h1>{item.name}</h1>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default AircraftPage;
