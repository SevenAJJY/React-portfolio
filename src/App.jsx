import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LazyLoading = React.lazy(() => import("./components/about/About"));
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Themes from "./components/Themes/Themes";
import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <main className="main__app">
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Themes />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/about"
              element={
                <React.Suspense>
                  <LazyLoading />
                </React.Suspense>
              }
            ></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<h1>T zga </h1>}></Route>
          </Routes>
        </Router>
      )}
    </main>
  );
};

export default App;
