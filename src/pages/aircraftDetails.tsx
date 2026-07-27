import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAircraftData } from "../fetch";
import type { Aircraft } from "../types/aircraft";

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

  if (!aircraftData) {
    return <h1>404</h1>;
  }

  const specAircraft: Aircraft | undefined = aircraftData?.find(
    (item) => item.id === aircraftid,
  );
  return (
    <main className="m-4 mt-12 mb-8">
      {specAircraft && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
            {specAircraft.name}
          </h1>

          <ul className="text-md font-semibold my-2 text-neutral-700 dark:text-neutral-400">
            <p>
              Manufacturer:{" "}
              <span className="font-normal">{specAircraft.manufacturer}</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-normal">{specAircraft.category}</span>
            </p>
            <p>
              Max Capacity:{" "}
              <span className="font-normal">
                {specAircraft.specs.passengerCapacity}
              </span>
            </p>
            <p>
              Max Range:{" "}
              <span className="font-normal">
                {specAircraft.specs.maxRangeKm} Km (
                {specAircraft.specs.maxRangeNm} Nm)
              </span>
            </p>
            <p>
              Wingspan:{" "}
              <span className="font-normal">
                {specAircraft.specs.wingspanMeters}m
              </span>
            </p>
            <p>
              Length:{" "}
              <span className="font-normal">
                {specAircraft.specs.lengthMeters}m
              </span>
            </p>
            <p>
              Engine Type:{" "}
              <span className="font-normal">
                {specAircraft.specs.engineType}
              </span>
            </p>
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
