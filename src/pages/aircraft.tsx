import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { fetchAircraftData } from "../fetch";
import { Star } from "lucide-react";
import type { Aircraft } from "../types/aircraft";

function AircraftPage() {
  const [favs, setFavs] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAircraft");
    return saved ? JSON.parse(saved) : [];
  });

  const changeFavs = (name: string) => {
    setFavs((prev) => {
      if (prev.includes(name)) {
        return prev.filter((fav) => fav !== name);
      }

      return [...prev, name];
    });
  };

  useEffect(() => {
    localStorage.setItem("favAircraft", JSON.stringify(favs));
  }, [favs]);

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
    <main className="m-4 mt-20 text-sky-600 dark:text-sky-400">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold">Aircrafts</h1>
        <p className="text-sm font-semibold">
          Explore aircrafts{" "}
          <span className="font-light ml-2">(data may be inaccurate)</span>
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
        {aircraftData &&
          aircraftData.map((aircraft) => {
            const isFav = favs.includes(aircraft.id);

            return (
              <li
                key={aircraft.id}
                className="bg-sky-50 dark:bg-sky-900 border p-2 shadow shadow-black/10 dark:shadow-sky-200 rounded-xl transition-all duration-200 hover:shadow-sky-200/50 hover:shadow-xl hover:-translate-y-2 active:translate-y-0 active:shadow"
              >
                <h2
                  onClick={() => {
                    navigate(`/aircraft/${aircraft.id}`);
                  }}
                  className="text-xl font-semibold border-sky-500 transition-all duration-200 hover:dark:bg-sky-600 hover:bg-sky-300 hover:text-sky-50 hover:border-l-4 hover:px-2 hover:rounded-sm"
                >
                  {aircraft.name}
                </h2>

                <div className="[&_p]:font-normal [&_p_span]:font-semibold">
                  <p>
                    Aircraft Manufacturer: <span>{aircraft.manufacturer}</span>
                  </p>
                  <p>
                    Aircraft Category: <span>{aircraft.category}</span>
                  </p>
                  <p>
                    Aircraft Capacity:{" "}
                    <span>{aircraft.specs.passengerCapacity}</span>
                  </p>
                </div>

                <Link
                  to={`/aircraft/${aircraft.id}`}
                  className="text-lg font-semibold hover:underline underline-offset-2"
                >
                  More...
                </Link>

                <motion.button
                  whileTap={{
                    scale: 0.8,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 200, damping: 7 },
                  }}
                  className={`self-end m-2 p-2 ${isFav ? "text-amber-400" : "text-neutral-400 hover:text-amber-400"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeFavs(aircraft.id);
                  }}
                >
                  <Star
                    size={20}
                    className={`transition-all duration-300 active:brightness-80
                    ${isFav ? " fill-amber-400" : "fill-amber-400/0"}
                  `}
                  />
                </motion.button>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default AircraftPage;
