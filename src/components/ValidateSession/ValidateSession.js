import React,{Component} from "react";
class ValidateSession extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return(
            <div className={"validate-session"}>
                <form onSubmit={(event)=>this.props.handleValidate(event,this.state)}>
                    <h1>Validate Session</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name={"username"} value={this.state.username} onChange={this.handleChange} placeholder={"type username "}/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name={"password"} value={this.state.password} onChange={this.handleChange} placeholder={"Type Password"}/>
                    <br/>
                    <input type="submit" value={"Validate"}/>
                </form>
            </div>

        );
    }
}
export default ValidateSession;