import { motion } from "motion/react";
import { useState } from "react";
import { useParams } from "react-router";
import NotFound from "./NotFound";
import type { Airport } from "../types/airport";
import airportData from "../data/airport.json";

function AirportDetails() {
  const [showAirlines, setShowAirlines] = useState(false);

  function changeStateAirlines() {
    setShowAirlines(!showAirlines);
  }

  const airports: Airport[] = airportData as Airport[];

  const { airportid } = useParams();

  if (!airportid) {
    return <h1>404</h1>;
  }

  const specAirport: Airport | undefined = airports?.find(
    (item) => item.id === airportid,
  );

  if (!specAirport) {
    return <NotFound type="airport" />;
  }

  const lat = specAirport.coordinates.latitude;
  const lon = specAirport.coordinates.longitude;

  const latFormatted = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? "N" : "S"}`;
  const lonFormatted = `${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? "E" : "W"}`;

  return (
    <main className="m-4 text-neutral-950 dark:text-neutral-50">
      {specAirport && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
            {specAirport.name}
          </h1>

          <ul className="[&_li_p]:text-2xl [&_li_p]:mb-2 [&_li_p]:mt-8 [&_li_span]:font-normal [&_li_ul_li]:font-normal  text-md font-semibold my-2 text-neutral-700 dark:text-neutral-300">
            <li>
              <p>General</p>
            </li>
            <li>
              Country:{" "}
              <span className="flex gap-2">
                {specAirport.country}
                <img
                  className="h-6 rounded-sm"
                  src={`https://flagcdn.io/${specAirport.countryIsoCode.toLowerCase()}.svg`}
                />
              </span>
            </li>
            <li>
              City: <span>{specAirport.city}</span>
            </li>
            <li>
              Category:{" "}
              <ul className="list-disc list-inside">
                {specAirport.category.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </li>
            <li>
              Capacity:{" "}
              <span>
                {specAirport.annualPassengerCapacity.toLocaleString()}{" "}
                passengers / yr
              </span>
            </li>
            <li>
              Coordinates: <span>{`${latFormatted}, ${lonFormatted}`}</span>
            </li>
            <li>
              Elevation: <span>{specAirport.elevationFeet}ft</span>
            </li>
            <li>
              Time Zone: <span>{specAirport.timeZone}</span>
            </li>
            <li>
              Iata: <span>{specAirport.iata}</span>
            </li>
            <li>
              Icao: <span>{specAirport.icao}</span>
            </li>
            <li>
              Has ATC:{" "}
              <span>{specAirport.hasControlTower ? "True" : "False"}</span>
            </li>
            <li>
              Is Open 24/7:{" "}
              <span>{specAirport.isOpen247 ? "True" : "False"}</span>
            </li>
            <li>
              Has Cargo Facilities:{" "}
              <span>{specAirport.hasCargoFacilities ? "True" : "False"}</span>
            </li>
            <li>
              Has Customs:{" "}
              <span>{specAirport.hasCustoms ? "True" : "False"}</span>
            </li>
            <li>
              Terminal Count: <span>{specAirport.terminalCount}</span>
            </li>
            <li>
              Gate Count: <span>{specAirport.gateCount}</span>
            </li>
            <li>
              Jet Bridge Count: <span>{specAirport.jetBridgeCount}</span>
            </li>
            <li>
              Parking Stands Count: <span>{specAirport.parkingStands}</span>
            </li>
            <li>
              Main Airlines:{" "}
              <ul className="list-disc list-inside">
                {specAirport.airlines.map((airline) => (
                  <li key={airline}>{airline}</li>
                ))}
              </ul>
            </li>
            <li className="my-2">
              Runways:{" "}
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {specAirport.runways.map((runway) => (
                  <li key={runway.id}>
                    {runway.designator} data:
                    <ul className="font-normal">
                      <li>Length: {runway.lengthMeters}m</li>
                      <li>Width: {runway.widthMeters}m</li>
                      <li>Status: {runway.status}</li>
                      <li>Surface: {runway.surface}</li>
                      <li>Surface Condition: {runway.surfaceCondition}</li>
                      <li>
                        Illuminated: {runway.illuminated ? "True" : "False"}
                      </li>
                      {runway.displacedThresholdMeters && (
                        <li>
                          Surface Condition: {runway.displacedThresholdMeters}
                        </li>
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p>Runway</p>
            </li>
            <li
              onClick={changeStateAirlines}
              className="cursor-pointer select-none"
            >
              Hub Airlines (may have much more in total than below):{" "}
              <ul className="flex flex-col list-disc list-inside font-normal">
                {specAirport.airlines.slice(0, 5).map((airline) => (
                  <li
                    key={airline}
                    className="transition-all duration-200 hover:px-2 hover:text-neutral-50"
                  >
                    {airline}
                  </li>
                ))}

                <motion.div
                  initial={false}
                  animate={{
                    height: showAirlines ? "auto" : 0,
                    opacity: showAirlines ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden flex flex-col"
                >
                  {specAirport.airlines.slice(5).map((airline) => (
                    <li
                      key={airline}
                      className="transition-all duration-200 hover:px-2 hover:text-neutral-50"
                    >
                      {airline}
                    </li>
                  ))}
                </motion.div>
              </ul>
              <div
                className={`w-2 h-2 border-l-2 border-b-2 mt-2 ${showAirlines ? "rotate-135" : "-rotate-45"} transition-all duration-500`}
              ></div>
            </li>

            <li className="text-2xl">
              JSON:{" "}
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <h3 className="bg-neutral-300 text-neutral-400 dark:bg-neutral-800 mb-2 p-2 rounded-md text-md">
                  json
                </h3>
                <code>{JSON.stringify(specAirport, null, 2)}</code>
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
            {specAirport.description}
          </p>
        </div>
      )}
    </main>
  );
}

export default AirportDetails;
