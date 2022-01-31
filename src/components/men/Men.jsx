import React from "react";
import { Outlet } from "react-router-dom";

function Men() {
    return (
        <div className="men-items">
            <div class="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Men;