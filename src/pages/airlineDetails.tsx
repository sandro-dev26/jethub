import { useParams } from "react-router";
import type { Airline } from "../types/airline";
import airlineData from "../data/airline.json";

function AirlineDetails() {
  const airlines: Airline[] = airlineData as Airline[];

  const { airlineid } = useParams();

  if (!airlineid) {
    return <h1>404</h1>;
  }

  const specAirline: Airline | undefined = airlines?.find(
    (item) => item.id === airlineid,
  );
  return (
    <main className="m-4 text-neutral-950 dark:text-neutral-50">
      {specAirline && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
            {specAirline.name}
          </h1>

          <ul className="[&_p_span]:font-normal text-md font-semibold my-2 text-neutral-700 dark:text-neutral-400">
            <li>
              Fleet Count: <span>{specAirline.fleetCount}</span>
            </li>
            <li>
              Active Fleet:{" "}
              <span className="flex flex-row gap-2">
                {specAirline.activeFleet.map((airplane) => (
                  <span key={airplane}>{airplane}</span>
                ))}
              </span>
            </li>
            <li>
              Country: <span>{specAirline.country}</span>
            </li>
            <li>
              Founded In: <span>{specAirline.foundedYear}</span>
            </li>
            <li>
              Hub Airport: <span>{specAirline.hubAirport}</span>
            </li>
            <li>
              Callsign: <span>{specAirline.callsign}</span>
            </li>
            <li>
              Iata: <span>{specAirline.iata}</span>
            </li>
            <li>
              Icao: <span>{specAirline.icao}</span>
            </li>
            <li className="text-2xl">
              JSON:{" "}
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <h3 className="bg-neutral-800 text-neutral-400 mb-2 p-2 rounded-md text-md">
                  json
                </h3>
                <code>{JSON.stringify(specAirline, null, 2)}</code>
              </pre>
              <div className="flex flex-col text-sky-500 gap-2 text-md bg-neutral-800 p-2 rounded-md">
                Note
                <p className="bg-neutral-700 text-neutral-400 text-sm font-semibold rounded-md p-2">
                  This raw JSON shows the underlying data structure running this
                  app, making the core data behind JetHub visible to everyone.
                </p>
              </div>
            </li>
          </ul>

          <p className="font-semibold text-md text-neutral-600 dark:text-neutral-300">
            {specAirline.description}
          </p>
        </div>
      )}
    </main>
  );
}

export default AirlineDetails;
