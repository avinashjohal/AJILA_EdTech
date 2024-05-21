import React from "react";


function StudentLogout(){
    localStorage.removeItem('StudentLoginStatus')
    window.location.href='/user-login'

    return(
        <div>
        
        </div>
    )
}
export default StudentLogout;