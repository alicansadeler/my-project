import KayitOl from "./components/KayitOl";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/KayitOl";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="FormContainer">
        <KayitOl />
      </div>
      <Footer />
    </>
  );
}

export default App;
