# JetHub

A free, open-source web application for aircraft specs, airline fleet data, and live flight tracking

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
- Motion (unused so far)

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
git clone [https://github.com/sandro-dev26/jethub.git](https://github.com/sandro-dev26/jethub.git)
cd jethub
```

## How To Contribute

### Adding a New Aircraft

To add a new aircraft, open `src/data/aircraft.json` and append a new object inside the main array (`[...]`).

#### Required Data Structure

Each entry in `aircraft.json` must follow this structure:

```json
{
  "id": "string (unique-kebab-case)",
  "name": "string",
  "manufacturer": "string",
  "category": "string",
  "imageUrl": "string (valid image URL)",
  "accentColor": "string (hex color code)",
  "specs": {
    "passengerCapacity": number,
    "maxRangeNm": number,
    "maxRangeKm": number,
    "cruisingSpeedMach": number,
    "wingspanMeters": number,
    "lengthMeters": number,
    "engineType": "string"
  },
  "short_description": "string",
  "description": "string"
}
```

### Adding a New Airline

To add a new airline, open `src/data/airline.json` and append a new object inside the main array (`[...]`).

#### Required Data Structure

Each entry in `airline.json` must follow this structure:

```json
{
  "id": "string (unique-kebab-case)",
  "name": "string",
  "country": "string",
  "iata": "string (2-letter IATA code)",
  "icao": "string (3-letter ICAO code)",
  "callsign": "string",
  "logoUrl": "string (valid image URL)",
  "accentColor": "string (hex color code)",
  "hubAirport": "string (Airport Name and Code)",
  "fleetCount": number,
  "foundedYear": number,
  "activeFleet": ["string (array of aircraft IDs matching aircraft.json)"],
  "short_description": "string",
  "description": "string"
}
```

> [!TIP]
> Make sure to add a comma (,) between aircraft objects inside the JSON array, and verify there are no trailing commas at the end of the file.

> [!NOTE]
> The current `aircraft.json` contains some placeholder image URLs. If you wish, feel free to update them with working links via a Pull Request.

> [!NOTE]
> Found a bug or issue? Feel free to fix it and open a Pull Request!
