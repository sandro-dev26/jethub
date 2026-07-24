import { NavLink } from "react-router";

function Navbar() {
  const pages = ["Home", "Aircrafts", "Airlines"];
  return (
    <nav className="flex items-center justify-center">
      <div className="flex items-center justify-around gap-4 p-4 mt-2 rounded-full bg-sky-400 text-neutral-50">
        {pages.map((item) => (
          <NavLink
            key={item}
            className={({ isActive }) =>
              `text-sm transition-colors ${
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
