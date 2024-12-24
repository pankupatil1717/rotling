import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vistor from "../comps/Vistor";
import About from "../comps/About";
import Home from "../comps/Home";
import BookDemo from "../comps/BookDemo";
import Gallary from "../comps/Gallary";
import Le01 from "../comps/Le01"
import Aqua from "../comps/Aqua";
import Geyser from "../comps/Geyser";
import Industrial from "../comps/Industrial";
import Solar from "../comps/Solar";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Vistor />}>
          <Route path="" element={<Home />} />
          <Route path="BookDemo" element={<BookDemo />} />
          <Route path="Gallery" element={<Gallary />} />
          <Route path="About" element={<About/>} />
          <Route path="Le01" element={<Le01/>} />
          <Route path="Aqua" element={<Aqua/>} />
          <Route path="Geyser" element={<Geyser/>} />
          <Route path="Industrial" element={<Industrial/>} />
          <Route path="Solar" element={<Solar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
