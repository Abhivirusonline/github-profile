import React from "react";
import {Link} from "react-router-dom";
import "./profile.css";
const Profile=(props)=>{
    let user_info=props.user;
    return(
        <div className={"profile"}>
            <div>
                <img src={user_info.avatar_url} alt={user_info.login}/>
            </div>
            <div className={"information"}>
                <h1>{user_info.login}</h1>
                <b>{user_info.company}</b> <br/>
                <b>Public Repository :{user_info.public_repos}</b>
                <br/>
                <b>Created at :{user_info.created_at}</b>
                <br/>
                <Link to={"./followers"}>See Followers :{user_info.followers}</Link>
                <br/>
                <Link to={"./"} onClick={()=>this.props.userClear}>Find Another</Link>
            </div>
        </div>
    );
}
export default Profile;