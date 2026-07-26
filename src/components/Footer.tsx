import { Link } from "react-router";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center mb-4">
      <p className="w-[80%] text-center text-sm font-light font-sans text-neutral-800 hover:text-neutral-500">
        This is free, non-commerctial, open-source web app dedicated to
        aviation, currently for aircraft, airline & flight tracker data only.{" "}
        <Link
          to="/about"
          className="font-semibold hover:underline underline-offset-4"
        >
          More info.
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
