import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <p>
        This is free, non-commerctial, open-scource web app dedicated to
        aviation, currently for aircraft, airline & flight tracker data only.{" "}
        <span onClick={() => navigate("/about")}>More info</span>
      </p>
    </footer>
  );
}

export default Footer;
