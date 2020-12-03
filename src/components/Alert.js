import React from "react";

const Alert = ({alertmessage}) => {
    return (
        <div className="alert">
            <h3>{alertmessage}</h3>
        </div>
    )
}


export default Alert;