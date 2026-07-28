import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAircraftData } from "../fetch";
import type { Aircraft } from "../types/aircraft";
import conventerData from "../utils/converter?raw";
import NotFound from "./NotFound";
import { Copy, Check } from "lucide-react";

function AircraftDetails() {
  const [showCopy, setShowCopy] = useState<boolean>(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyJson);

      setShowCopy(false);

      setTimeout(() => {
        setShowCopy(true);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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

  const copyJson = JSON.stringify(specAircraft);

  return (
    <main className="m-4 mt-12 mb-8">
      {specAircraft && (
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
            {specAircraft.name}
          </h1>

          <ul className="[&_li_span]:font-normal [&_li_p]:text-2xl [&_li_p]:mb-2 [&_li_p]:mt-8 text-md font-semibold my-2 text-neutral-700 dark:text-neutral-300">
            <li>
              <p>General</p>
            </li>
            <li>
              Model: <span>{specAircraft.model}</span>
            </li>
            <li>
              Manufacturer: <span>{specAircraft.manufacturer}</span>
            </li>
            <li>
              Family: <span>{specAircraft.family} family</span>
            </li>
            <li>
              Icao: <span>{specAircraft.icao}</span>
            </li>
            <li>
              Iata: <span>{specAircraft.iata}</span>
            </li>
            <li>
              Body Type: <span>{specAircraft.bodyType}</span>
            </li>
            <li>
              Aircraft Type: <span>{specAircraft.role}</span>
            </li>
            <li>
              Aircraft Type:{" "}
              <ul className="list-disc list-inside font-normal">
                {specAircraft.variants.map((variant) => (
                  <li key={variant}>{variant}</li>
                ))}
              </ul>
            </li>
            <li>
              <p>Capacity</p>
            </li>
            <li>
              Max Capacity:{" "}
              <span>{specAircraft.specs.capacity.maxSeating}</span>
            </li>
            <li>
              Min Capacity:{" "}
              <span>{specAircraft.specs.capacity.minSeating}</span>
            </li>
            <li>
              Typical Capacity:{" "}
              <span>{specAircraft.specs.capacity.typicalSeating}</span>
            </li>
            <li>
              Cabin Crew: <span>{specAircraft.specs.capacity.cabinCrew}</span>
            </li>
            <li>
              Flight Crew: <span>{specAircraft.specs.capacity.flightCrew}</span>
            </li>
            <li>
              Cargo Volume (m<sup>3</sup>):{" "}
              <span>{specAircraft.specs.capacity.cargoVolumeCubicMeters}</span>
            </li>
            <li>
              <p>Performance</p>
            </li>
            <li>
              Cruising Speed:{" "}
              <span>
                Mach {specAircraft.specs.performance.cruisingSpeedMach}
              </span>
            </li>
            <li>
              Takeoff Distance:{" "}
              <span>{specAircraft.specs.performance.takeoffDistanceM}m</span>
            </li>
            <li>
              Landing Distance:{" "}
              <span>{specAircraft.specs.performance.landingDistanceM}m</span>
            </li>
            <li>
              Service Ceiling:{" "}
              <span>
                {specAircraft.specs.performance.serviceCeilingFt.toLocaleString()}
                ft
              </span>
            </li>
            <li>
              Max Operating Speed:{" "}
              <span>
                {specAircraft.specs.performance.maxOperatingSpeedKt}kt
              </span>
            </li>
            <li>
              Max Range:{" "}
              <span>
                {specAircraft.specs.performance.maxRangeKm.toLocaleString()} Km
                ({specAircraft.specs.performance.maxRangeNm.toLocaleString()}{" "}
                Nm)
              </span>
            </li>
            <li>
              <p>Dimensions</p>
            </li>
            <li>
              Length: <span>{specAircraft.specs.dimensions.lengthMeters}m</span>
            </li>
            <li>
              Height: <span>{specAircraft.specs.dimensions.heightMeters}m</span>
            </li>
            <li>
              Wingspan:{" "}
              <span>{specAircraft.specs.dimensions.wingspanMeters}m</span>
            </li>
            <li>
              Wing Area (m<sup>2</sup>):{" "}
              <span>{specAircraft.specs.dimensions.wingAreaSquareMeters}m</span>
            </li>
            <li>
              Fuselage Width:{" "}
              <span>{specAircraft.specs.dimensions.fuselageWidth}m</span>
            </li>
            <li>
              <p>Engines</p>
            </li>
            <li>
              Engine Type: <span>{specAircraft.specs.engines.engineType}</span>
            </li>
            <li>
              Engine Count:{" "}
              <span>{specAircraft.specs.engines.engineCount}</span>
            </li>
            <li>
              Engine Placement:{" "}
              <span>{specAircraft.specs.engines.enginePlacement}</span>
            </li>
            <li>
              Engine Option(s):{" "}
              <span>{specAircraft.specs.engines.engineOptions}</span>
            </li>
            <li>
              Engine Manufacturer(s):{" "}
              <span>{specAircraft.specs.engines.engineManufacturer}</span>
            </li>
            <li>
              Thrust: <span>{specAircraft.specs.engines.thrustKN}kN</span>
            </li>
            <li>
              <p>Weights</p>
            </li>
            <li>
              Fuel Capacity:{" "}
              <span>
                {specAircraft.specs.weights.fuelCapacityKg.toLocaleString()}Kg
              </span>
            </li>
            <li>
              Max Payload:{" "}
              <span>
                {specAircraft.specs.weights.maxPayloadKg.toLocaleString()}Kg
              </span>
            </li>
            <li>
              Aircraft Weight:{" "}
              <span>
                {specAircraft.specs.weights.operatingEmptyWeight.toLocaleString()}
                Kg
              </span>
            </li>
            <li>
              Max Takeoff Weight:{" "}
              <span>
                {specAircraft.specs.weights.maxTakeoffWeightKg.toLocaleString()}
                Kg
              </span>
            </li>
            <li>
              Max Landing Weight:{" "}
              <span>
                {specAircraft.specs.weights.maxLandingWeightKg.toLocaleString()}
                Kg
              </span>
            </li>
            <li>
              <p>History</p>
            </li>
            <li>
              Entered Service:{" "}
              <span>{specAircraft.history.introductionDate}</span>
            </li>
            <li>
              First Flight: <span>{specAircraft.history.firstFlight}</span>
            </li>
            <li>
              Country Origin:{" "}
              <ul className="list-disc list-inside font-normal">
                {Array.isArray(specAircraft.history.originCountry)
                  ? specAircraft.history.originCountry.map((country) => (
                      <li key={country}>{country}</li>
                    ))
                  : specAircraft.history.originCountry}
              </ul>
            </li>

            <li className="text-2xl mt-8">
              JSON:{" "}
              <pre className="relative bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm font-mono my-2 scrollbar-thumb-sky-400">
                <button
                  onClick={() => showCopy && handleCopy()}
                  className="absolute top-6 right-6 hover:bg-neutral-700 p-1 rounded-sm"
                >
                  {showCopy ? <Copy size={16} /> : <Check size={16} />}
                </button>
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
            </li>
            <li className="flex flex-col text-2xl text-sky-500 text-md bg-neutral-800 p-2 rounded-md">
              Note
              <p className="bg-neutral-700 text-neutral-400 text-sm font-semibold rounded-md p-2">
                This raw JSON shows the underlying data structure running this
                app, making the core data behind JetHub visible to everyone.
              </p>
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
