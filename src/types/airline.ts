export interface Airline {
  id: string;
  name: string;
  country: string;
  iata: string;
  icao: string;
  callsign: string;
  accentColor: string;
  hubAirport: string;
  fleetCount: number;
  foundedYear: number;
  activeFleet: Array<string>;
  short_description: string;
  description: string;
}
