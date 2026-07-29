import { useEffect } from "react";
import { useParams } from "react-router";
import type { Airline } from "../types/airline";
import NotFound from "./NotFound";
import airlineData from "../data/airline.json";

function AirlineDetails() {
  const airlines: Airline[] = airlineData as Airline[];

  const { airlineid } = useParams();

  const specAirline: Airline | undefined = airlines?.find(
    (item) => item.id === airlineid,
  );
  useEffect(() => {
    document.title = `JetHub: ${specAirline?.name}`;
  }, [specAirline]);

  if (!specAirline) {
    return <NotFound type="Airline" />;
  }

  return (
    <main className="m-4 text-neutral-950 dark:text-neutral-50 ">
      {specAirline && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4\">
            {specAirline.name}
          </h1>

          <ul className="[&_li_span]:font-normal [&_li_p]:text-2xl [&_li_p]:mb-2 [&_li_p]:mt-8 [&_li_ul_li]:font-normal text-md font-semibold my-2 text-neutral-700 dark:text-neutral-300">
            <li>
              <p>General</p>
            </li>
            <li>
              Country: <span>{specAirline.country}</span>
            </li>
            <li>
              Airline Type: <span>{specAirline.airlineType}</span>
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
            <li>
              Headquaters: <span>{specAirline.headquaters}</span>
            </li>
            <li>
              Alliance: <span>{specAirline.alliance}</span>
            </li>
            <li>
              Website:{" "}
              <a
                href={specAirline.website}
                className="hover:underline underline-offset-4"
              >
                {specAirline.name}
              </a>
            </li>
            <li>
              Key Features:{" "}
              <ul className="list-disc list-inside">
                {specAirline.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </li>

            <li>
              <p>Operations</p>
            </li>
            <li>
              Fleet Count: <span>{specAirline.operations.fleetCount}</span>
            </li>
            <li>
              Destinations Served{" "}
              <span>{specAirline.operations.destinationsServed}</span>
            </li>
            <li>
              Hub Airports:{" "}
              <ul className="list-disc list-inside">
                {specAirline.operations.hubAirports.map((airport) => (
                  <li key={airport}>{airport}</li>
                ))}
              </ul>
            </li>
            <li>
              Active Fleet:{" "}
              <ul className="list-disc list-inside">
                {specAirline.operations.activeFleet.map((airplane) => (
                  <li key={airplane}>{airplane}</li>
                ))}
              </ul>
            </li>

            <li>
              <p>History</p>
            </li>
            <li>
              Funded In: <span>{specAirline.history.foundedYear}</span>
            </li>
            <li>
              Commensed Operations:{" "}
              <span>{specAirline.history.commencedOperations}</span>
            </li>
            <li>
              Status: <span>{specAirline.history.status}</span>
            </li>
            {specAirline.history.ceasedOperations && (
              <li>
                Ceased Operations:{" "}
                <span>{specAirline.history.ceasedOperations}</span>
              </li>
            )}

            <li className="text-2xl mt-8">
              JSON:{" "}
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <h3 className="bg-neutral-300 text-neutral-400 dark:bg-neutral-800 mb-2 p-2 rounded-md text-md">
                  json
                </h3>
                <code>{JSON.stringify(specAirline, null, 2)}</code>
              </pre>
              <div className="flex flex-col text-sky-500 gap-2 text-md bg-neutral-200 dark:bg-neutral-800 p-2 rounded-md">
                Note
                <p className="bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300  text-sm font-semibold rounded-md p-2">
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
