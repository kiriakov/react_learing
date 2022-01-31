import React, { useEffect } from "react";
import { useParams } from "react-router";

function Hemds() {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <div className="Hemds">
            <div className="container">
                <h1 className="mt-5">Only one Hemds</h1>

                <div className="item-section">
                    <div className="itemImage">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div className="itemText">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hemds;
