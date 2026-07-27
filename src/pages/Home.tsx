import { motion } from "motion/react";
import { fetchAircraftData } from "../fetch";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import type { Aircraft } from "../types/aircraft";
import { Star } from "lucide-react";
import airlineData from "../data/airline.json";
import airportData from "../data/airport.json";

function Home() {
  const [favAircraft, setFavAircraft] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAircraft");
    return saved ? JSON.parse(saved) : [];
  });

  const [favAirlines, setFavAirlines] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAirlines");
    return saved ? JSON.parse(saved) : [];
  });

  const [favAirports, setFavAirports] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAirports");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favAircraft", JSON.stringify(favAircraft));
  }, [favAircraft]);

  useEffect(() => {
    localStorage.setItem("favAirlines", JSON.stringify(favAirlines));
  }, [favAirlines]);

  useEffect(() => {
    localStorage.setItem("favAirports", JSON.stringify(favAirports));
  }, [favAirports]);

  const changeFavs = (
    id: string,
    setFavs: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setFavs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

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
    <main className="m-4 mt-12 text-neutral-50">
      <header>
        <h1 className="text-sky-400 text-4xl md:text-6xl lg:8xl font-orbitron font-bold transition-all duration-200 hover:px-4 hover:border-l-6 hover:md:border-l-8 rounded-sm md:rounded-md">
          JetHub
        </h1>
        <p className="text-sm font-light">
          Explore different{" "}
          <Link
            to="/aircraft"
            className="font-semibold hover:underline underline-offset-2"
          >
            Aircrafts
          </Link>{" "}
          and{" "}
          <Link
            to="/airlines"
            className="font-semibold hover:underline underline-offset-2"
          >
            Airlines.
          </Link>
        </p>
      </header>

      <div className="mt-4">
        <label
          htmlFor="aircrafts"
          className="text-2xl hover:underline underline-offset-4"
          onClick={() => {
            navigate("/aircraft");
          }}
        >
          Aircraft
        </label>
        <section
          id="aircrafts"
          className="flex flex-row flex-2 gap-2 min-h-60 overflow-auto p-4 scrollbar-thumb-sky-500"
        >
          {aircraftData?.slice(0, 5).map((aircraft) => {
            const isFav = favAircraft.includes(aircraft.id);

            return (
              <div
                key={aircraft.id}
                className="bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
              >
                <h2
                  onClick={() => {
                    navigate(`/aircraft/${aircraft.id}`);
                  }}
                  className="text-2xl text-sky-50 [text-shadow:0_1px_2px_rgb(0_0_0/0.5)] font-semibold"
                >
                  {aircraft.name}
                </h2>
                <p>
                  Manufacturer:{" "}
                  <span
                    onClick={() => {
                      navigate(
                        `/aircraft/${aircraft.manufacturer.toLocaleLowerCase()}`,
                      );
                    }}
                    className="font-light hover:font-normal hover:underline underline-offset-4 transition-all duration-200"
                  >
                    {aircraft.manufacturer}
                  </span>
                </p>
                <p>
                  Category: <span>{aircraft.category}</span>
                </p>
                <p>{aircraft.short_description}</p>

                <motion.button
                  whileTap={{
                    scale: 0.8,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 200, damping: 7 },
                  }}
                  className={`self-end p-2 ${isFav ? "text-amber-400" : "text-neutral-400 hover:text-amber-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeFavs(aircraft.id, setFavAircraft);
                  }}
                >
                  <Star
                    size={20}
                    className={`transition-all duration-300 active:brightness-80
                    ${isFav ? " fill-amber-400" : "fill-amber-400/0"}
                  `}
                  />
                </motion.button>
              </div>
            );
          })}
          <div
            key="aircrafts-more"
            onClick={() => {
              navigate("/aircraft");
            }}
            className="flex flex-col items-center justify-center bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
          >
            <h2 className="text-4xl text-sky-50 hover:underline underline-offset-2 decoration-1">
              MORE
            </h2>
            <p className="text-sm text-sky-50">See more aircrafts</p>
          </div>
        </section>

        <label
          htmlFor="airlines"
          className="text-2xl hover:underline underline-offset-4"
          onClick={() => {
            navigate("/airlines");
          }}
        >
          Airlines
        </label>
        <section
          id="airlines"
          className="flex flex-row flex-2 gap-2 min-h-60 overflow-auto p-4 scrollbar-thumb-sky-500"
        >
          {airlineData?.slice(0, 5).map((airline) => {
            const isFav = favAirlines.includes(airline.id);

            return (
              <div
                key={airline.id}
                className="bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
              >
                <h2
                  onClick={() => {
                    navigate(`/airlines/${airline.id}`);
                  }}
                  className="text-2xl text-sky-50 [text-shadow:0_1px_2px_rgb(0_0_0/0.5)] font-semibold"
                >
                  {airline.name}
                </h2>
                <p>Callsign: {airline.callsign}</p>
                <p>
                  Iata: <span>{airline.iata}</span>
                </p>
                <p>
                  Icao: <span>{airline.icao}</span>
                </p>
                <p>{airline.short_description}</p>

                <motion.button
                  whileTap={{
                    scale: 0.8,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 200, damping: 7 },
                  }}
                  className={`self-end p-2 ${isFav ? "text-amber-400" : "text-neutral-400 hover:text-amber-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeFavs(airline.id, setFavAirlines);
                  }}
                >
                  <Star
                    size={20}
                    className={`transition-all duration-300 active:brightness-80
                    ${isFav ? " fill-amber-400" : "fill-amber-400/0"}
                  `}
                  />
                </motion.button>
              </div>
            );
          })}
          <div
            key="aircrafts-more"
            onClick={() => {
              navigate("/airlines");
            }}
            className="flex flex-col items-center justify-center bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
          >
            <h2 className="text-4xl text-sky-50 hover:underline underline-offset-2 decoration-1">
              MORE
            </h2>
            <p className="text-sm text-sky-50">See more airlines</p>
          </div>
        </section>

        <label
          htmlFor="airports"
          className="text-2xl hover:underline underline-offset-4"
          onClick={() => {
            navigate("/airports");
          }}
        >
          Airports
        </label>
        <section
          id="airlines"
          className="flex flex-row flex-2 gap-2 min-h-60 overflow-auto p-4 scrollbar-thumb-sky-500"
        >
          {airportData?.slice(0, 5).map((airport) => {
            const isFav = favAirports.includes(airport.id);

            return (
              <div
                key={airport.id}
                className="bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
              >
                <h2
                  onClick={() => {
                    navigate(`/airports/${airport.id}`);
                  }}
                  className="text-2xl text-sky-50 [text-shadow:0_1px_2px_rgb(0_0_0/0.5)] font-semibold"
                >
                  {airport.name}
                </h2>
                <p>Countury: {airport.country}</p>
                <p>
                  Iata: <span>{airport.iata}</span>
                </p>
                <p>
                  Icao: <span>{airport.icao}</span>
                </p>
                <p>{airport.shortDescription}</p>

                <motion.button
                  whileTap={{
                    scale: 0.8,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 200, damping: 7 },
                  }}
                  className={`self-end p-2 ${isFav ? "text-amber-400" : "text-neutral-400 hover:text-amber-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeFavs(airport.id, setFavAirports);
                  }}
                >
                  <Star
                    size={20}
                    className={`transition-all duration-300 active:brightness-80
                    ${isFav ? " fill-amber-400" : "fill-amber-400/0"}
                  `}
                  />
                </motion.button>
              </div>
            );
          })}
          <div
            key="aircrafts-more"
            onClick={() => {
              navigate("/airports");
            }}
            className="flex flex-col items-center justify-center bg-sky-100 dark:bg-sky-900 text-sky-500 w-80 shrink-0 border border-sky-500 p-2 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg shadow-black/50 dark:shadow-white/50"
          >
            <h2 className="text-4xl text-sky-50 hover:underline underline-offset-2 decoration-1">
              MORE
            </h2>
            <p className="text-sm text-sky-50">See more airlines</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
