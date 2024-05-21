import React from 'react';
import { useEffect } from "react";

function Explore(){
    useEffect(() => {
        document.title = "AJILA | Explore";
    }, []);
    return(
        <div>
            <h1>Explore</h1>
            <p>This is the Explore page</p>
        </div>
    )
}
export default Explore;