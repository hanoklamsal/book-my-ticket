import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./summary.css";
import Form from "../form/form";

const Summary = ({ shows }) => {
  const [selectedShow, setSelectedShow] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const filteredShow = shows.find((item) => item.show.id == id);
    setSelectedShow(filteredShow);
  }, [id, shows]);
  if (!selectedShow) {
    return <div>Loading...</div>;
  }

  const showBookingForm = () => {
    const summaryDetailContainer =
      document.getElementsByClassName("summary-details");
    for (let i = 0; i < summaryDetailContainer.length; i++) {
      summaryDetailContainer[i].style.display = "none";
    }
    const formContainer = document.getElementsByClassName("form-container");
    for (let i = 0; i < formContainer.length; i++) {
      formContainer[i].style.display = "block";
    }
  };

  return (
    <>
      <div className="summary">
        <div className="summary-image">
          <img
            src={selectedShow?.show?.image?.original}
            alt={selectedShow?.show?.name}
          />
        </div>
        <div className="summary-details">
          <h2>{selectedShow?.show?.name}</h2>
          {selectedShow?.show?.genres.map((item) => {
            return <span key={item}>{item + " "}</span>;
          })}
          <p>Date: {selectedShow?.show?.schedule?.days}</p>
          <p>Time: {selectedShow?.show?.schedule?.time}</p>
          <p>{selectedShow?.show?.summary}</p>
          <button onClick={showBookingForm}>Book your seats Now!</button>
        </div>
        <Form showName={selectedShow?.show?.name} />
      </div>
    </>
  );
};

export default Summary;
