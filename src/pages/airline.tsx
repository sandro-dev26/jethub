import type { Airline } from "../types/airline";
import { useNavigate } from "react-router";
import airlineData from "../data/airline.json";

function AirlinePage() {
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

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {airlines.map((airline: Airline) => (
          <li
            onClick={() => {
              navigate(`/airlines/${airline.id}`);
            }}
            className="flex flex-col gap-4 bg-sky-100 dark:bg-sky-900 border border-sky-500 p-2 rounded-xl shadow-black/50 dark:shadow-white/50 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
            key={airline.id}
          >
            <h2 className="text-2xl md:text-3xl font-semibold border-sky-500 transition-all duration-200 hover:dark:bg-sky-600 hover:bg-sky-300 hover:text-sky-50 hover:border-l-4 hover:px-2 hover:rounded-sm">
              {airline.name}
            </h2>

            <div className="[&_p_span]:font-light">
              <p>
                Fleet Count: <span>{airline.fleetCount}</span>
              </p>
              <p>
                Funded In: <span>{airline.foundedYear}</span>
              </p>
              <p>
                Contury: <span>{airline.country}</span>
              </p>
            </div>

            <p>{airline.short_description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AirlinePage;
