import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Search from './Search';
import Paper from 'material-ui/Paper';
var auth=require('../models/Authenticate');

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  isLoggedIn:false
  }
  //this.handleClick=this.handleClick.bind(true);
 }
 handleClick(event){
    var self = this;
    auth.Authenticate(this.state.username,this.state.password,function(data){
      if(data===true){
        console.log("Login successfull");
        var uploadScreen=[];
        uploadScreen.push(<Search appContext={self.props.appContext}/>)
        self.props.appContext.setState({loginPage:[],isLoggedIn:true,uploadScreen:uploadScreen})
     }
      else{
         console.log("Username password do not match");
         alert("username password do not match")
    }
    });
}
 
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login Page"
             titleStyle={{textAlign:'center'}}
           />
            <Paper style={paperstyle} zDepth={1} >
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             </Paper>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  position:'relative',
 margin: 20,
};
const paperstyle = {
  height: 220,
  width: 300,
  margin: '100px 150px 100px 500px',
  textAlign: 'center',
  display: 'inline-block',
};
export default Login;