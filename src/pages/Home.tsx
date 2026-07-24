import { fetchAircraftData } from "../fetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import type { Aircraft } from "../types/aircraft";

function Home() {
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
    <main className="m-4 mt-12">
      <header>
        <h1 className="text-4xl">JetHub</h1>
        <p className="text-sm font-light">
          Explore different Aircrafts and Airlines.
        </p>
      </header>
      <div className="mt-4">
        <label htmlFor="aircrafts" className="text-xl">
          Aircrafts
        </label>
        <section
          id="aircrafts"
          className="flex flex-row flex-2 gap-2 min-h-60 overflow-auto p-4"
        >
          {aircraftData?.map((item) => (
            <div
              key={item.id}
              className="bg-sky-100 text-sky-400 w-80 shrink-0 border border-sky-400 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-neutral-800/50"
            >
              <h2
                onClick={() => {
                  navigate(`/aircrafts/${item.id}`);
                }}
                className="text-2xl text-sky-50 [text-shadow:0_1px_2px_rgb(0_0_0/0.5)] font-semibold"
              >
                {item.name}
              </h2>
              <p>
                Manufacturer:{" "}
                <span
                  onClick={() => {
                    navigate(
                      `/airlines/${item.manufacturer.toLocaleLowerCase()}`,
                    );
                  }}
                  className="font-light hover:font-normal hover:underline underline-offset-4 transition-all duration-200"
                >
                  {item.manufacturer}
                </span>
              </p>
              <p>
                Category: <span>{item.category}</span>
              </p>
              <p>{item.short_description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
