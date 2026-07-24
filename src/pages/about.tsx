import { Link } from "react-router";

function About() {
  return (
    <main className="m-4 mt-12 text-neutral-950">
      <h1 className="text-4xl font-light">
        About{" "}
        <Link
          to="/"
          className="hover:underline underline-offset-4 decoration-dotted decoration-2 font-normal"
        >
          JetHub
        </Link>
      </h1>

      <hr className="my-4" />

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">What is JetHub?</h2>

        <p>
          JetHub is a free, non-commercial, open-source web app built with JSON
          datasets and free public APIs. It brings together aircraft specs,
          airline fleet info, and flight tracking into a single, clean
          dashboard. Because JetHub is in its early stages, our datasets are
          currently small and focused on a handpicked list of aircraft and
          airlines. We are constantly looking to expand the database with more
          commercial airliners, regional jets, and fleet details!
        </p>

        <h3 className="mt-8 text-lg mb-2">Want to help improve JetHub?</h3>
        <p>
          Since our data is powered by lightweight JSON files (
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            aircraft.json
          </code>
          and{" "}
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            airline.json
          </code>
          ), adding new aircraft specs or fixing missing info is super easy and
          open to anyone.
        </p>
        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>
            Add Aircraft Data: If you’d like to add your favorite plane or
            airline to the app, check out our{" "}
            <a
              href="https://github.com/sandro-dev26/jethub"
              className="hover:underline underline-offset-2 font-semibold"
            >
              GitHub Repository.
            </a>
          </li>
          <li>
            Open an Issue: Have a dataset update or feature idea? Feel free to
            open a pull request or drop a comment on our{" "}
            <a
              href="https://github.com/sandro-dev26/jethub"
              className="hover:underline underline-offset-2 font-semibold"
            >
              Data Contribution Issue.
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>

        <p>
          Explore Aircrafts, Airlines and Track flights. Click on specific
          aircraft or airline and see extended data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Data</h2>

        <p>
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            aircraft.json
          </code>{" "}
          uses aviation-standard nautical miles (NM), so JetHub uses function
          (nmToKm inside src/utils/converter.ts) that converts NM to KM. JetHub
          gets data from json data files and free APIs:
        </p>
        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>
            Aircraft data:{" "}
            <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
              aircraft.json
            </code>
          </li>
          <li>
            Airlines data:{" "}
            <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
              airline.json
            </code>
          </li>
          <li>
            Tracker data:{" "}
            <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
              undefined
            </code>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
