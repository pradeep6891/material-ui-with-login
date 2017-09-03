import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Toolbar from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import keycode from 'keycode';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

var getSearchData=require('../models/getSearchResults');

const styles = {
  AppBar: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
};

class Search extends Component{

constructor(props){
  super(props);
     this.state={
        searchParameter:'',
        results:[],
        tableHTML:'',
        username:this.props.appContext.state.username
    }
}
populateTable(tableData){
    return(
        <div>
         <Table>
         <TableHead>
            <TableRow>
              <TableCell colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell tooltip="Person ID">ID</TableCell>
              <TableCell tooltip="Name of the person">Name</TableCell>
              <TableCell tooltip="Condition of the person">Condition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
              ))}
          </TableBody>
          </Table>
        </div>    
    )
}
handleClick(event){
    event.preventDefault();
    var self=this;
    getSearchData.getSearchData(this.state.searchParameter,function(data){
       console.log(data)
        self.setState({results:data},function(){
           self.setState({tableHTML:self.populateTable(data)})
        });
         
    });
}

render(){
  const classes = this.props.classes;
        return(
          <div>
            
          <div>
          <div className={classes.AppBar}>
          <AppBar position="static">
            <Toolbar disableGutters>
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Select Actions
              </Typography>
              <Button color="contrast">Logout</Button>
            </Toolbar>
          </AppBar>
        </div>

       <TextField
          id="searchParameter"
          label="Search Parameter"
          className={classes.textField}
          value={this.state.searchParameter}
          onChange={event => this.setState({ searchParameter: event.target.value })}
          margin="normal"
        /> &nbsp;&nbsp;
                  
         <Button raised color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}> Search </Button>
         <hr/>
          {this.state.tableHTML}
         </div>
             
          </div>

        );
    }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
