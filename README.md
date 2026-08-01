# JetHub

A free, open-source web application for aircraft specs, airline fleet data, and airport data

---

## About

JetHub is project targeting to be way of accesing aviation data in combined single web app for free. It is still early in development and lacks data.

## Key Features

Features that currently work

- view airplanes on homepage

## Tech Stack

This project uses stack below:

- HTML5
- CSS3
- Typescript
- React
- React Router (not mentioned on about page)
- Tailwind CSS
- Motion
- Lucide (Icons)

## Local Setup & Installation Guide

Follow these steps to run JetHub on your computer or contribute to the project.

### Prerequisites

> [!NOTE]
> Make sure you have [Node.js](https://nodejs.org/) installed on your system before starting.

---

### Step-by-Step Setup

#### 1. Fork the Repository

Click the **Fork** button at the top right of this page to create a copy of this repository under your GitHub account.

#### 2. Clone Your Fork

Open your terminal and clone your copy of JetHub:

```bash
git clone https://github.com/sandro-dev26/jethub.git

cd jethub
```

## How To Contribute

### Adding a New Aircraft

To add a new aircraft, open `src/data/aircraft.json` and append a new object inside the main array (`[...]`).

#### Required Data Structure

Each entry in `aircraft.json` must follow this typescript structure:

```typescript
interface History {
  firstFlight: string;
  introductionDate: string;
  endOfProduction?: string;
  productionStatus: "In Production" | "Out of Production" | "Under Development";
  numberBuilt: number;
  originCountry: string | string[];
}

interface Dimensions {
  wingspanMeters: number;
  lengthMeters: number;
  heightMeters: number;
  fuselageWidth: number;
  wingAreaSquareMeters: number;
}

interface Performance {
  maxRangeNm: number;
  maxRangeKm: number;
  cruisingSpeedMach: number;
  serviceCeilingFt: number;
  takeoffDistanceM: number;
  landingDistanceM: number;
  maxOperatingSpeedKt: number;
}

interface Weights {
  operatingEmptyWeight: number;
  maxTakeoffWeightKg: number;
  maxLandingWeightKg: number;
  maxPayloadKg: number;
  fuelCapacityKg: number;
}

interface Engines {
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

interface Capacity {
  minSeating: number;
  typicalSeating: number;
  maxSeating: number;
  flightCrew: number;
  cabinCrew: number;
  cargoVolumeCubicMeters: number;
}

interface Specs {
  dimensions: Dimensions;
  performance: Performance;
  weights: Weights;
  engines: Engines;
  capacity: Capacity;
}

interface Aircraft {
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
```

### Adding a New Airline

To add a new airline, open `src/data/airline.json` and append a new object inside the main array (`[...]`).

#### Required Data Structure

Each entry in `airline.json` must follow this typescript structure:

```typescript
interface History {
  foundedYear: string;
  commencedOperations: string;
  ceasedOperations?: string;
  status: "Active" | "Defunct" | "Merged";
}

interface Operations {
  hubAirports: string[];
  fleetCount: number;
  destinationsServed: number;
  activeFleet: string[];
}

interface Airline {
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
```

### Adding a New Airport

To add a new airport, open `src/data/airport.json` and append a new object inside the main array (`[...]`).

#### Required Data Structure

Each entry in `airport.json` must follow this typescript structure:

```typescript
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
```

> [!TIP]
> Check out each of the json files to have a better example of how it works.

> [!TIP]
> Make sure to add a comma (,) between aircraft objects inside the JSON array, and verify there are no trailing commas at the end of the file.

> [!NOTE]
> The current `aircraft.json` contains some placeholder image URLs. If you wish, feel free to update them with working links via a Pull Request.

> [!NOTE]
> Found a bug or issue? Feel free to fix it and open a Pull Request

## If you need help understanding codebase...

### Stuff directly in project folder

In project folder, there's:

- public/
- src/
- .gitignore
- index.html
- this README.md who wants attention so bad
- config files and more

for now, and in general, you can ignore config files (like gitignore ignores that node_modules folder sitting on my left) cause they are all set up for this project and if you're here to contribute to project directly, you won't really need to touch those, for now. but if you're here for config files (I don't see much reason to) I think you already know where they are and what each are, why are you even reading this? anyways, so about files i named, unless necessary, you don't need to touch this this README.md. for .gitignore, unless you either see anything needed to be included or want to sneak in node modules or api keys out of gitignore (which, regarding api keys I don't have, at least in this project), you don't need to touch that one either. as for index.html, which, after Vite made files and folders in this project folder, was barely modified, if you see anything to be improved or fixed (nothing to fix, i think, at the moment, and my IDE agrees) then you can modify it, it's there.

### public/

as for public/. it has favicon.svg and notFoundicon.svg, favicon is simple and not best, if you want, change it and I will review it (who am I talking to, I have around zero traffic, maybe negative, bending reality), and if I like, or no, I might consider switching over to it instead, by the way, thanks if you have a better version. and about notFoundicon.svg, plz don't change it, worked on it, thanks.

### src/

and here comes it, src/ folder. so if you didn't already, open it. so here is main parts of the app. You can see there's 5 files and 7 folders, i will explain it all (or not). first, do we go backwards or forwards of it all? ok, let's go forward, if you want it other way around, read backwards (recommended by experts for best experience). first, by name, you can understand we will be starting by main.tsx. so in this file, there's nothing much, just this app being rendered, not important, it just imports css and creates new element inside `<div id="root"></div>` from index.html, mainly that. so, what's element that it creates? `<App />.` Yeah, now we go to App.tsx. Now gotta be big right? nah. it just imports one function named AppRouter and returns it as jsx element inside default function `App()`. Yeah, now AppRouter.tsx, finally, hopefully something bigger now right? Well... YES. Not biggest, but remember? I never said big, i said bigger, i was comparing. so, see that routes after slash(/)? For example: `Mbappe special`. Yeah. `/` is it, and it's homepage. but really, for example: `/aircraft` or `/aircraft/a220-300`. All that lives in AppRouter.tsx. it imports all pages based off what url route is, and stuff like `/aircraft/a3` returns 404 page (though a3 exists, we just don't have it's data available at the moment). ok. so what are other 2 files? index.css is for importing Tailwind Css and a bit of pure Css styling. fetch.ts is useless and by the time you're reading this i 99.99999991% deleted it, i was lazy to do so before, cause, it was working, and deleting meant modifying 3 different files alongside. But Math.round() exists so we can round that right? right? Well, typescript is throwing errors in my face, saying `property Math.round() doesn't exist on type number`. Yeah, so let's leave it as it is.

#### folders inside src/

now, those 7 folders. finally after this i can do actual coding, yesss. ok, so assets contain assets (IQ above 0 required to understand), components contain components, such as, no, only Navbar and Footer, data contains data, 3 json files i talked 10 times above, layouts don't really contain layouts, it's just written as plural for naming, it only has MainLayout, pages contain pages, types contain typescript types, utils contain converter, useless, deleted folder and file at time you're reading this, so yeah, now let me code.
