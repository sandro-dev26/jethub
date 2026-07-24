import { Link } from "react-router";

function About() {
  return (
    <main className="m-4 mt-12 text-neutral-950">
      <h1 className="text-2xl">
        About{" "}
        <Link to="/" className="hover:underline underline-offset-4">
          JetHub
        </Link>
      </h1>
    </main>
  );
}

export default About;
