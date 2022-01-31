import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Summer2021,
  Winter2021,
  Women,

} from "./components";

import MenItems from "./components/men/MenItems";
import MenItem from "./components/men/MenItem";
import Men from "./components/men/Men";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summer2021" element={<Summer2021 />} />
      <Route path="/winter2021" element={<Winter2021 />}/>
      <Route path="/women" element={<Women />}/>
      <Route path="/men" element={<Men />}>
          <Route path="" element={<MenItem />} />
          <Route path=":postSlug" element={<MenItems />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
