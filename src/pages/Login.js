import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Search from './Search';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
var auth=require('../models/Authenticate');


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    marginLeft: theme.spacing.unit*7,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit*7,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 20,
    marginLeft: theme.spacing.unit * 50,
    width:400,
    height:300,
    align:"center",
  }),
});


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
        var homePage=[];
        homePage.push(<Search appContext={self.props.appContext}/>)
        self.props.appContext.setState({loginPage:[],isLoggedIn:true,homePage:homePage})
     }
      else{
         console.log("Username password do not match");
         alert("username password do not match")
    }
    });
}
 
render() {
  const classes = this.props.classes;
    return (
     <div>
       <Paper className={classes.paper} elevation={4}>
       <Typography type="headline" component="h3">
          Login Form
        </Typography>
        <br/>
        <TextField
          id="username"
          label="User Name"
          className={classes.textField}
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
          margin="normal"
        />
        <br/>
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={event => this.setState({ password: event.target.value })}
          margin="normal"
        />
        <br/>
             
             <Button raised color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}> 
               Login
            </Button>
            </Paper>
            </div>
    );
    
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default  withStyles(styles)(Login);