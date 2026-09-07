import { motion, useScroll } from "motion/react";
import { NavLink } from "react-router";

function Navbar() {
  const pages = ["Home", "Aircraft", "Airlines", "Airports", "About"];

  const { scrollYProgress } = useScroll();

  return (
    <nav className="flex items-center justify-center mt-4">
      <div className="flex items-center justify-around gap-4 p-4 mt-2 rounded-full transition-all duration-200 bg-sky-500 text-neutral-50 hover:bg-sky-600">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "#0ea5e9",
            zIndex: 9999,
          }}
        />
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
