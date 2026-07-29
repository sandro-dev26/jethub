import { motion } from "motion/react";
import { useState, useEffect } from "react";
import type { Airport } from "../types/airport";
import { useNavigate } from "react-router";
import { Star } from "lucide-react";
import airportData from "../data/airport.json";

function AirportPage() {
  const [favs, setFavs] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAirports");
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
    localStorage.setItem("favAirports", JSON.stringify(favs));
  }, [favs]);
  useEffect(() => {
    document.title = "JetHub: Airports";
  }, []);

  const airports: Airport[] = airportData as Airport[];

  const navigate = useNavigate();

  return (
    <main className="m-4 mt-12 text-sky-500">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold">Airports</h1>
        <p className="text-sm font-semibold">
          Explore airports{" "}
          <span className="font-light ml-2">(data may be inaccurate)</span>
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {airports.map((airport: Airport) => {
          const isFav = favs.includes(airport.id);

          return (
            <li
              onClick={() => {
                navigate(`/airports/${airport.id}`);
              }}
              className="flex flex-col gap-4 bg-sky-100 dark:bg-sky-900 border border-sky-500 p-2 rounded-xl shadow-black/50 dark:shadow-white/50 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
              key={airport.id}
            >
              <h2 className="text-xl md:text-2xl font-semibold border-sky-500 transition-all duration-200 hover:dark:bg-sky-600 hover:bg-sky-300 hover:text-sky-50 hover:border-l-4 hover:px-2 hover:rounded-sm">
                {airport.name}
              </h2>

              <div className="[&_p_span]:font-light">
                <p>
                  City: <span>{airport.city}</span>
                </p>
                <p>
                  Category: <span>{airport.category}</span>
                </p>
                <p>
                  Elevation: <span>{airport.elevationFeet}ft</span>
                </p>
              </div>

              <p>{airport.shortDescription}</p>

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
                  changeFavs(airport.id);
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

export default AirportPage;
