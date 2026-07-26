import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
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
    <main className="m-4 mt-20 text-sky-600">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold">Aircrafts</h1>
        <p className="text-sm font-semibold">
          Explore aircrafts{" "}
          <span className="font-light ml-2">(data may be inaccurate)</span>
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
        {aircraftData &&
          aircraftData.map((item) => (
            <li className="bg-sky-50 border p-2 shadow shadow-black/10 rounded-xl transition-all duration-200 hover:shadow-black/50 hover:shadow-xl hover:-translate-y-2 active:translate-y-1 active:shadow">
              <h1
                onClick={() => {
                  navigate(`/aircraft/${item.id}`);
                }}
                className="text-xl font-semibold border-sky-500 transition-all duration-200 hover:bg-sky-300 hover:text-sky-50 hover:border-l-4 hover:px-2 hover:rounded-sm"
              >
                {item.name}
              </h1>
              <p className="font-normal">
                Aircraft Manufacturer:{" "}
                <span className="font-semibold">{item.manufacturer}</span>
              </p>
              <p className="font-normal">
                Aircraft Category:{" "}
                <span className="font-semibold">{item.category}</span>
              </p>
              <p className="font-normal">
                Aircraft Capacity:{" "}
                <span className="font-semibold">
                  {item.specs.passengerCapacity}
                </span>
              </p>
              <Link
                to={`/aircraft/${item.id}`}
                className="text-lg font-semibold hover:underline underline-offset-2"
              >
                More...
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default AircraftPage;
