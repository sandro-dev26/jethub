import { motion } from "motion/react";
import { useState, useEffect } from "react";
import type { Airline } from "../types/airline";
import { useNavigate } from "react-router";
import { Star } from "lucide-react";
import airlineData from "../data/airline.json";

function AirlinePage() {
  const [favs, setFavs] = useState<string[]>(() => {
    const saved = localStorage.getItem("favAirlines");
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
    localStorage.setItem("favAirlines", JSON.stringify(favs));
  }, [favs]);

  const airlines: Airline[] = airlineData as Airline[];

  const navigate = useNavigate();

  return (
    <main className="m-4 mt-12 text-sky-500">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold">Airlines</h1>
        <p className="text-sm font-semibold">
          Explore airlines{" "}
          <span className="font-light ml-2">(data may be inaccurate)</span>
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {airlines.map((airline: Airline) => {
          const isFav = favs.includes(airline.id);

          return (
            <li
              onClick={() => {
                navigate(`/airlines/${airline.id}`);
              }}
              className="flex flex-col gap-4 bg-sky-100 dark:bg-sky-900 border border-sky-500 p-2 rounded-xl shadow-black/50 dark:shadow-white/50 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
              key={airline.id}
            >
              <h2
                className={`text-2xl md:text-3xl font-semibold border-sky-500 transition-all duration-200 hover:dark:bg-sky-600 hover:bg-sky-300 hover:text-sky-50 hover:border-l-4 hover:px-2 hover:rounded-sm`}
              >
                {airline.name}
              </h2>

              <div className="[&_p_span]:font-light">
                <p>
                  Fleet Count: <span>{airline.operations.fleetCount}</span>
                </p>
                <p>
                  Funded In: <span>{airline.history.foundedYear}</span>
                </p>
                <p>
                  Contury: <span>{airline.country}</span>
                </p>
              </div>

              <p>{airline.short_description}</p>

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
                  changeFavs(airline.id);
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

export default AirlinePage;
