import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
     <footer>
        <p><span>Copyright </span> &copy; {currentYear}</p>
    </footer>
     );
    }

export default Footer;