import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAircraftData } from "../fetch";
import type { Aircraft } from "../types/aircraft";
import conventerData from "../utils/converter?raw";
import NotFound from "./NotFound";

function AircraftDetails() {
  const [aircraftData, setAircraftData] = useState<Aircraft[] | null>(null);
  useEffect(() => {
    async function setData() {
      const data = await fetchAircraftData();
      setAircraftData(data);
    }

    setData();
  }, []);
  const { aircraftid } = useParams();

  const specAircraft: Aircraft | undefined = aircraftData?.find(
    (item) => item.id === aircraftid,
  );

  if (!specAircraft) {
    return <NotFound type="Aircraft" />;
  }
  return (
    <main className="m-4 mt-12 mb-8">
      {specAircraft && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
            {specAircraft.name}
          </h1>

          <ul className="[&_li_span]:font-normal text-md font-semibold my-2 text-neutral-700 dark:text-neutral-300">
            <li>
              Manufacturer: <span>{specAircraft.manufacturer}</span>
            </li>
            <li>
              Category: <span>{specAircraft.category}</span>
            </li>
            <li>
              Max Capacity: <span>{specAircraft.specs.passengerCapacity}</span>
            </li>
            <li>
              Max Range:{" "}
              <span>
                {specAircraft.specs.maxRangeKm} Km (
                {specAircraft.specs.maxRangeNm} Nm)
              </span>
            </li>
            <li>
              Wingspan: <span>{specAircraft.specs.wingspanMeters}m</span>
            </li>
            <li>
              Length: <span>{specAircraft.specs.lengthMeters}m</span>
            </li>
            <li>
              Engine Type: <span>{specAircraft.specs.engineType}</span>
            </li>
            <li className="text-2xl">
              JSON:{" "}
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <h3 className="bg-neutral-800 text-neutral-400 mb-2 p-2 rounded-md text-md">
                  json
                </h3>
                <code>{JSON.stringify(specAircraft, null, 2)}</code>
              </pre>
            </li>
            <li className="text-2xl">
              Converter (for Nm {"->"} Km):{" "}
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <h3 className="bg-neutral-800 text-neutral-400 mb-2 p-2 rounded-md text-md">
                  typescript
                </h3>
                <code>{conventerData}</code>
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
            {specAircraft.description}
          </p>
        </div>
      )}
    </main>
  );
}

export default AircraftDetails;
