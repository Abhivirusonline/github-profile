import React,{Component} from "react";
import "./UserInput.css";
class UserInput extends Component{
    constructor(props) {
        super(props);
        this.state={
            username:""
        }
    }
    handleChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    render() {
        return(
            <div className={"userInput"}>
                <form onSubmit={(event => this.props.handleFetch(event,this.state.username))}>
                    <h1>Find Github user</h1>
                    <input type="text" name={"username"} value={this.state.username} onChange={this.handleChange} placeholder={"type username "}/>
                </form>
            </div>

        );
    }
}

export default UserInput;