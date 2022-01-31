import React from "react";
import { Link } from "react-router-dom";

function Men() {
  return (
    <div className="men">
      <div className="container">
        <h1 className="">Men page</h1>

          <Link to="./MenItem">
          <div className="item-section">
              <div className="itemImage">
                  <img className="" src="http://dummy-images.com/people/dummy-600x900-CharlesBaudelaire.jpg" alt="" />
              </div>
              <div className="itemText">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
          </div>
          </Link>


          <Link to="./MenItem">
          <div className="item-section">
              <div className="itemImage">
                  <img className="" src="http://dummy-images.com/people/dummy-600x900-CharlesBaudelaire.jpg" alt="" />
              </div>
              <div className="itemText">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default Men;
