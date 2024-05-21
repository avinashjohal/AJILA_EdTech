import React from 'react';
import { useEffect } from "react";


function About(){
    useEffect(() => {
        document.title = "AJILA | About Page";
    }, []);
    return(
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    )
}
export default About;