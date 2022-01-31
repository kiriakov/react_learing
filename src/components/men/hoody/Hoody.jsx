import React, { useEffect } from "react";
import { useParams } from "react-router";

function Hoody() {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <div className="Hoody">
            <div className="container">
                <h1 className="mt-5">Only one Hoody (ONE)</h1>
                <h6 className="mb-5">The post slug is, {postSlug}</h6>
                <div className="item-section">
                    <div className="itemImage">
                        <img className="" src="http://dummy-images.com/people/dummy-600x900-CharlesBaudelaire.jpg" alt="" />
                    </div>
                    <div className="itemText">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hoody;
