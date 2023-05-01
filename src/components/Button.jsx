import React from "react";

function Button({text,isButtonClick,handleClick}) {
    return (
        <button
         className={isButtonClick ? 'rainbow-hover' : 'rainbow-hover'}
         onClick={handleClick}
         >
            <span class="sp">{text}</span>
        </button>
    );
}
export default Button;