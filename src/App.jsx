import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="body_color">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
