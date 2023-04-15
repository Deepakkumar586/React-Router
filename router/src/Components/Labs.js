import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler() {
        // move to About Route
        navigate("/about");
    }
    return (
        <div>
            Labs PAge
            <button onClick={clickHandler}>Move to About Page</button>

        </div>

    )
}

export default Labs
