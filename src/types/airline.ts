export interface History {
  foundedYear: string;
  commencedOperations: string;
  ceasedOperations?: string;
  status: "Active" | "Defunct" | "Merged";
}

export interface Operations {
  hubAirports: string[];
  fleetCount: number;
  destinationsServed: number;
  activeFleet: string[];
}

export interface Airline {
  id: string;
  name: string;
  country: string;
  iata: string;
  icao: string;
  callsign: string;
  accentColor: string;
  website: string;
  headquaters: string;
  airlineType: "Full-service" | "Low-cost" | "Cargo" | "Charter" | "Regional";
  alliance: "Star Alliance" | "SkyTeam" | "Oneworld" | "None";

  history: History;
  operations: Operations;

  short_description: string;
  description: string;
  keyFeatures: string[];
}
