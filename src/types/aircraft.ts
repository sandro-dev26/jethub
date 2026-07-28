export interface History {
  firstFlight: string;
  introductionDate: string;
  endOfProduction?: string;
  productionStatus: "In Production" | "Out of Production" | "Under Development";
  numberBuilt: number;
  originCountry: string | string[];
}

export interface Dimensions {
  wingspanMeters: number;
  lengthMeters: number;
  heightMeters: number;
  fuselageWidth: number;
  wingAreaSquareMeters: number;
}

export interface Performance {
  maxRangeNm: number;
  maxRangeKm: number;
  cruisingSpeedMach: number;
  serviceCeilingFt: number;
  takeoffDistanceM: number;
  landingDistanceM: number;
  maxOperatingSpeedKt: number;
}

export interface Weights {
  operatingEmptyWeight: number;
  maxTakeoffWeightKg: number;
  maxLandingWeightKg: number;
  maxPayloadKg: number;
  fuelCapacityKg: number;
}

export interface Engines {
  engineType: string;
  engineOptions: string[];
  engineManufacturer: string;
  engineCount: number;
  enginePlacement:
    | "Wing-mounted"
    | "Rear-mounted"
    | "Fuselage-mounted"
    | "Mixed";
  thrustKN: number;
}

export interface Capacity {
  minSeating: number;
  typicalSeating: number;
  maxSeating: number;
  flightCrew: number;
  cabinCrew: number;
  cargoVolumeCubicMeters: number;
}

export interface Specs {
  dimensions: Dimensions;
  performance: Performance;
  weights: Weights;
  engines: Engines;
  capacity: Capacity;
}

export interface Aircraft {
  id: string;
  name: string;
  manufacturer: string;
  manufacturerCountry: string | string[];
  family: string;
  model: string;
  icao: string;
  iata?: string;
  role:
    | "Passenger"
    | "Cargo"
    | "Passenger/Cargo"
    | "Business Jet"
    | "Military"
    | "Trainer";
  status: "In Service" | "Retired" | "Under Development";
  bodyType:
    | "Narrow-body"
    | "Wide-body"
    | "Regional"
    | "Turboprop"
    | "Supersonic";
  accentColor: string;

  history: History;
  specs: Specs;

  short_description: string;
  description: string;
  keyFeatures: string[];
  notableOperators: string[];
  variants: string[];
}
