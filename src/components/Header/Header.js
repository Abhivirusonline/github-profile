import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
const Header=()=>{
    return(
        <nav>
            <Link to={"./"}>Find User</Link>
            <Link to={"./profile"}>Github Profile</Link>
            <Link to={"./followers"}>Github followers</Link>
            <Link to={"./validate"}>Validate Session</Link>
        </nav>
    );
}
export default Header;