import { Link } from "react-router";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center my-8">
      <p className="w-[80%] text-center text-sm font-light font-sans text-neutral-800 dark:text-neutral-100 hover:dark:text-neutral-300 hover:text-neutral-500">
        This is a free, non-commercial, open-source web app dedicated to
        aviation. JetHub is not affiliated with or endorsed by any airline,
        airport, aircraft manufacturer, or other organization mentioned on this
        website. Data is gathered from publicly available sources.{" "}
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
