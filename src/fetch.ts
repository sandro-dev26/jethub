import type { Aircraft } from "./types/aircraft";
import nmToKm from "./utils/converter";
import aircraftData from "./data/aircraft.json";

export async function fetchAircraftData(): Promise<Aircraft[]> {
  const readableData = aircraftData.map((item: Aircraft) => {
    item.specs.maxRangeKm = nmToKm(item.specs.maxRangeNm);
    return item;
  });

  return readableData;
}
