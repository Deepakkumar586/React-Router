import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    function clickButton() {
        // move to support page
        navigate("/support");

    }
    function backHandler() {
        // back one step router
        navigate(-1);
    }
    return (
        <div>
            About Page
            <button onClick={clickButton}>Move To button</button>
            <button onClick={backHandler}>back button</button>

        </div>
    )
}

export default About
