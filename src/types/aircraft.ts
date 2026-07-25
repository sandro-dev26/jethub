export interface Aircraft {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  accentColor: string;
  specs: {
    passengerCapacity: number;
    maxRangeNm: number;
    maxRangeKm: number;
    cruisingSpeedMach: number;
    wingspanMeters: number;
    lengthMeters: number;
    engineType: string;
  };
  short_description: string;
  description: string;
}
