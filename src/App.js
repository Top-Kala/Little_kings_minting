import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Lore from "./pages/lore";
import LawOfTheLand from "./pages/lawOfTheLand";
import Roundtable from "./pages/roundtable";
import Mint from "./pages/mint";
import VideoPay from "./components/videoPyal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
// let Admin = lazy(() => import("./Admin.js"));

export default function App() {
  const [isVideo, setIsVideo] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback="Loading…">
          {isVideo ? (
            <VideoPay handleVideo={setIsVideo} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Lore" element={<Lore />} />
              <Route path="/law-of-the-land" element={<LawOfTheLand />} />
              <Route path="/Roundtable" element={<Roundtable />} />
              <Route path="/Mint" element={<Mint />} />
            </Routes>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
