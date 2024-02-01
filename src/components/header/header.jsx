import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="header-container">
      <div className="logo-name" onClick={goToHomePage}>
        Book my Tickets
      </div>
    </div>
  );
}

export default Header;
