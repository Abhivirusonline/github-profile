import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import UserInput from "./components/useInput/UserInput";
import Profile from "./components/profile/profile";
import Followers from "./components/followers/followers";
import ValidateSession from "./components/ValidateSession/ValidateSession";
import url from "./url";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:{},
      isAuth:false,
      message:"",
      userExist:false
    }
  }
  userClear=()=>{
    this.setState({
      userExist:false
    })
  }

  handleValidate=(event,state)=>{
    event.preventDefault();
    fetch(url+"/validate",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(state),
    })
        .then(res=>res.text())
        .then(result=>{
          this.setState({
            isAuth:true,
            message:result
          })
        })
        .catch(err=>console.log("error occurred :"+err));
  }

  handleFetch=(event,username)=>{
  event.preventDefault();
  console.log("handlFetch called"+username);
    let user={
      username
    }
  fetch(url,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  })
      .then(res=>res.json())
      .then(result=>{
        JSON.stringify(result);
        this.setState({
          user:result,
          userExist:true
        })
      })
      .catch(err=>console.log("error in fetching :"+err));
  }
  render() {
    const {user,userExist,isAuth}=this.state;
    return (
      <div className="App">
      <Router>
        <Header/>
        <Route
        exact path={"/"}
        component={()=>userExist?(
            <Redirect to={"/profile"}/>
        ):(<UserInput handleFetch={this.handleFetch}/>)}
        />
        <Route
            exact path={"/profile"}
            component={()=><Profile user={this.state.user} userClear={this.userClear}/>}
        />
        <Route
            exact path={"/followers"}
            component={()=><Followers followers_url={user.followers_url} handleFetch={this.handleFetch}/>}
        />
        <Route
            exact path={"/validate"}
            component={()=>isAuth?(<div>Your session is valid</div>):(<ValidateSession handleValidate={this.handleValidate}/>)}
        />
      </Router>

      </div>
    );
  }
}

export default App;
