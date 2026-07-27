import { NavLink } from "react-router";

function Navbar() {
  const pages = ["Home", "Aircraft", "Airlines", "Airports", "About"];
  return (
    <nav className="flex items-center justify-center mt-4">
      <div className="flex items-center justify-around gap-4 p-4 mt-2 rounded-full transition-all duration-200 bg-sky-500 text-neutral-50 hover:bg-sky-600">
        {pages.map((item) => (
          <NavLink
            key={item}
            className={({ isActive }) =>
              `text-sm transition-all duration-200 hover:font-bold ${
                isActive
                  ? "font-semibold border-b-2 border-neutral-50 transition-all duration-200"
                  : "font-light border-b-0 border-neutral-50 transition-all duration-200"
              }`
            }
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
