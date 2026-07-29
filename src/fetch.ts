import type { Aircraft } from "./types/aircraft";
import aircraftData from "./data/aircraft.json";

export async function fetchAircraftData(): Promise<Aircraft[]> {
  return aircraftData as Aircraft[];
}
