import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="container">
          <div className="nav-item">
              <NavLink className="nav-link" to="/Women">
          <div className="part">
              <div class="partInner">
                  <img
                      className=""
                  src="http://dummy-images.com/abstract/dummy-600x900-Menu.jpg"
                  alt=""
              />
                  <h2 className="">Women</h2>
              </div>
          </div>
              </NavLink>
          </div>
          <div className="nav-item">
              <NavLink className="nav-link" to="/men/MenItems">
              <div className="part">
              <div className="partInner">
                  <img
                      className=""
                  src="http://dummy-images.com/abstract/dummy-600x900-Utrecht.jpg"
                  alt=""
              />
                  <h2 className="">Men</h2>
              </div>

          </div>
              </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Home;
