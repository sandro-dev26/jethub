import { Link } from "react-router";

function About() {
  return (
    <main className="m-4 mt-12 text-neutral-950 dark:text-neutral-50">
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
          datasets. It brings together aircraft specs, airline fleet info, and
          flight tracking into a single, clean dashboard. Because JetHub is in
          its early stages, our datasets are currently small and focused on a
          handpicked list of aircraft and airlines. We are constantly looking to
          expand the database with more commercial airliners, regional jets,
          airports and fleet details!
        </p>

        <h3 className="mt-8 text-lg mb-2">Want to help improve JetHub?</h3>
        <p>
          Since our data is powered by lightweight JSON files (
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            aircraft.json
          </code>
          ,{" "}
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            airline.json
          </code>
          and{" "}
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            airport.json
          </code>
          ), adding new aircraft specs or fixing missing info is super easy and
          open to anyone.
        </p>
        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>
            Add Aircraft Data: If you’d like to add your favorite plane, airline
            or airport to the app, check out our{" "}
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
          Explore Aircrafts, Airlines and Airports. Click on star icon to add
          specific aircraft/airline/airport to favorites. Click on specific
          aircraft, airline or airport and see extended data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Who is this project for?</h2>

        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>
            Aviation Enthusiasts & Planespotters: Anyone looking for a free,
            centralized hub to access aircraft (+airline & airport) data without
            navigating paywalls or fragmented tools.
          </li>
          <li>
            Developers & Contributors: Coders of any skill level looking to
            practice frontend skills, work with JSON datasets, refine UI
            layouts, and contribute to an active open-source project.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

        <p>
          <Link
            to="/"
            className="hover:underline underline-offset-2 font-semibold"
          >
            JetHub
          </Link>{" "}
          uses stack listed below:
        </p>
        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Motion (unused so far)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          What we hope to add in future
        </h2>

        <p>
          Currently, as said before, JetHub is small and doesn't contain much
          data, in future we hope we have:
        </p>
        <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
          <li>Extended data with 50+ aircrafts and 30+ airlines</li>
          <li>Improved flight tracker</li>
          <li>Improved UI/UX</li>
          <li>
            JetHub helping developers to get contributions and aviation
            enthusiasts accesing different kinds of data in single and orginized
            web app
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Data</h2>

        <p>
          <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
            aircraft.json
          </code>{" "}
          uses aviation-standard nautical miles (NM), so JetHub uses function
          (nmToKm inside <code>src/utils/converter.ts</code>) that converts NM
          to KM. JetHub gets data from json data files and free APIs:
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
            Airport data:{" "}
            <code className="bg-neutral-200 p-1 rounded-md text-neutral-600">
              airport.json
            </code>
          </li>
        </ul>
      </section>

      <hr className="my-4" />

      <p className="">
        If you are looking forward to contributing and need guide, we reccomend
        to check out{" "}
        <a
          href="https://github.com/sandro-dev26/jethub/blob/main/README.md"
          className="font-semibold hover:underline underline-offset-2"
        >
          README.md
        </a>{" "}
        for more info.
      </p>
    </main>
  );
}

export default About;
