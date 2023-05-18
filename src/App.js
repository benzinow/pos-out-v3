import React, { useState } from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import Bio from "./Bio";
import Testimonies from "./Testimonies";
import Footer from "./Footer";
import Loader from "./Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div className="body">
          <Header />
          <Fixables />
          <Bio />
          <Testimonies />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
