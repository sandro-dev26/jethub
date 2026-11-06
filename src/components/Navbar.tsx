import { NavLink } from "react-router";

function Navbar() {
  const pages = ["Home", "Aircraft", "Airlines", "Airports", "About"];

  return (
    <nav className="fixed bottom-0 left-0 flex items-center justify-center mt-4 w-full md:w-max md:top-0 md:bottom-auto md:inset-x-0 md:mx-auto z-50">
      <div className="flex items-center justify-around gap-4 p-4 mt-2 w-full md:rounded-full transition-all duration-200 bg-sky-500/50 backdrop-blur-xs text-neutral-50 hover:bg-sky-600">
        {pages.map((item) => (
          <NavLink
            key={item}
            className={({ isActive }) =>
              `relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#fafafa] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-sm transition-all duration-200 ${
                isActive
                  ? "font-bold border-neutral-50 transition-all duration-200"
                  : "font-light border-neutral-50 transition-all duration-200"
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
