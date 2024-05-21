import React from 'react';
import { useEffect } from "react";

function Contact(){
    useEffect(() => {
        document.title = "AJILA | Contact Us";
    }, []);
    return(
        <div>
            <h1>Contact</h1>
            <p>This is the Contact page</p>
        </div>
    )
}
export default Contact;