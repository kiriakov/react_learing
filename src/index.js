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
    Men,
    All,
    Hemds,
    Hoody,
    HoodyTwo,
    HoodyThree,
    HoodyFour

} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summer2021" element={<Summer2021 />} />
      <Route path="/winter2021" element={<Winter2021 />}/>
      <Route path="/women" element={<Women />}/>
      <Route path="/men" element={<Men />}>
          <Route path="" element={<All />} />
          <Route path="/men/hoody/Hoody" element={<Hoody />} />
          <Route path="/men/hoody/HoodyTwo" element={<HoodyTwo />} />
          <Route path="/men/hoody/HoodyThree" element={<HoodyThree />} />
          <Route path="/men/hoody/HoodyFour" element={<HoodyFour />} />

          <Route path="/men/:postSlug" element={<Hemds />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
