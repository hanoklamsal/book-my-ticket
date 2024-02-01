import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import ShowList from "./components/shows/show-list";
import Summary from "./components/summary/summary";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/summary/:id" element={<Summary shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
