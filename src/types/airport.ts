export interface Runway {
  id: string;
  lengthMeters: number;
  widthMeters: number;
  surface: "Asphalt" | "Concrete" | "Bitumen";
  illuminated: boolean;
  designator: string;
  status: "Active" | "Closed";
  surfaceCondition: "Good" | "Fair" | "Poor";
  displacedThresholdMeters?: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Airport {
  id: string;
  name: string;
  iata?: string;
  icao: string;
  city: string;
  country: string;
  countryIsoCode: string;
  coordinates: Coordinates;
  elevationFeet: number;
  category: ("Major International" | "Regional" | "Domestic" | "Cargo Hub")[];
  timeZone: string;

  annualPassengerCapacity: number;
  terminalCount: number;
  gateCount: number;
  jetBridgeCount: number;
  parkingStands: number;

  runways: Runway[];
  airlines: string[];

  hasControlTower: boolean;
  isOpen247: boolean;
  hasCustoms: boolean;
  hasCargoFacilities: boolean;

  shortDescription: string;
  description: string;
}
