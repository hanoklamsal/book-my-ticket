import "./show-item.css";
import { useNavigate } from "react-router-dom";

const ShowItem = ({ show }) => {
  const showData = show.show;
  const imageUrl = showData.image;
  const navigate = useNavigate();
  const navigateToSummary = () => {
    navigate(`/summary/${showData.id}`);
  };
  return (
    <div className="show-item-container" onClick={navigateToSummary}>
      <div className="show-item-image-container">
        <img src={imageUrl?.medium} alt={show.name} />
      </div>
      <p className="show-name">{showData.name}</p>
      <p className="show-language">Language: {showData.language}</p>
    </div>
  );
};

export default ShowItem;
