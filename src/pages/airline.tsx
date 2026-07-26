import type { Airline } from "../types/airline";
import airlineData from "../data/airline.json";

function AirlinePage() {
  const airlines: Airline[] = airlineData as Airline[];
  return (
    <main className="m-4 mt-12 mb-8">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {airlines.map((airline: Airline) => (
          <li
            className="flex flex-col gap-4 bg-sky-100 border border-sky-500 p-2 rounded-xl shadow-black/50 transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
            key={airline.id}
          >
            <h2 className="text-2xl text-sky-500 font-semibold">
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
