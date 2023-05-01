import React from "react";

function Button({numClicks}) {
    return (
        <span className="counter">{numClicks}</span>
    );
}
export default Button;