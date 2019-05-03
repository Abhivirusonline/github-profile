import React,{Component} from "react";
import {Link} from "react-router-dom";

class Follower extends Component{
    constructor(props) {
        super(props);
        this.state={
            followers:[]
        }
    }

    componentDidMount() {
        fetch(this.props.followers_url)
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    followers:result
                })
            })
            .catch(err=>console.log("error in fetch :"+err))
    }


    render() {
        const {followers}=this.state;
        return(
            <div className={"followers"}>
                <ul>
                    {
                        followers.map(person=>{
                            return <li key={person.login}>
                                    <Link to={"/profile"} onClick={(event)=>{
                                        console.log("props :"+this.props);
                                        this.props.handleFetch(event,person.login)
                                    }}>
                                        <img src={person.avatar_url} alt={person.login}/> <b>{person.login}</b>
                                    </Link>
                                   </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Follower;