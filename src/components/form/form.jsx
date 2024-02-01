import { useState } from "react";
import "./form.css";

const Form = ({ showName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseForm = () => {
    const summaryDetailContainer =
      document.getElementsByClassName("summary-details");
    for (let i = 0; i < summaryDetailContainer.length; i++) {
      summaryDetailContainer[i].style.display = "flex";
    }
    const formContainer = document.getElementsByClassName("form-container");
    for (let i = 0; i < formContainer.length; i++) {
      formContainer[i].style.display = "none";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !numTickets) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (numTickets <= 0) {
      setErrorMessage("Number of tickets must be greater than 0.");
      return;
    }
  };

  return (
    <div className="form-container">
      <div className="form-heading">
        <h2>Book Tickets for {showName}</h2>
        <div className="close-button" onClick={handleCloseForm}>
          X
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numTickets}
            min="1"
            onChange={(e) => setNumTickets(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit">Book Tickets</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
