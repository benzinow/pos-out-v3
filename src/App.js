import React, { useState, useEffect } from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import Bio from "./Bio";
import Testimonies from "./Testimonies";
import Footer from "./Footer";
import Loader from "./Loader";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // New state variable

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? ( // Conditionally render the loader while loading
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
