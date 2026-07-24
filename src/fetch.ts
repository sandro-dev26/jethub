import type { Aircraft } from "./types/aircraft";
import nmToKm from "./utils/converter";

export async function fetchAircraftData() {
  const response = await fetch("./data/aircraft.json");

  if (!response) {
    return null;
  }

  const data: Aircraft[] = await response.json();
  const readableData = data.map((item: Aircraft) => {
    item.specs.maxRangeKm = nmToKm(item.specs.maxRangeNm);
  });

  return readableData;
}
