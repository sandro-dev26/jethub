export interface Runway {
  id: string;
  lengthMeters: number;
  surface: "Asphalt" | "Concrete" | "Bitumen";
  illuminated: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Airport {
  id: string;
  name: string;
  iata: string;
  icao: string;
  city: string;
  country: string;
  coordinates: Coordinates;
  elevationFeet: number;
  category: "Major International" | "Regional" | "Domestic" | "Cargo Hub";
  timeZone: string;

  yearlyCapacity: number;
  terminalCount: number;
  gateCount: number;

  runways: Runway[];
  airlines: string[];

  hasControlTower: boolean;
  isOpen247: boolean;

  shortDescription: string;
  description: string;
}
