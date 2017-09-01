import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
var getSearchData=require('../models/getSearchResults');
class Search extends Component{

constructor(props){
  super(props);
     this.state={
        searchParameter:'',
        results:[],
        tableHTML:''
    }
}
populateTable(tableData){
    return(
        <div>
         <Table
          height='300px'
          fixedHeader={true}
          selectable={false}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Person ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Name of the person">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Condition of the person">Condition</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover={true}
            stripedRows={true}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
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
        return(
          <div>
            <MuiThemeProvider>
                <div>
                <AppBar title='Search Data' titleStyle={{textAlign:'center'}}/>
                 <TextField
                      hintText="Provide value to search with !!"
                     floatingLabelText="Search Parameter"
                     onChange={(event,newValue)=>this.setState({searchParameter:newValue})}
                     
                   />
                  <br />
                  <RaisedButton label="Search" primary={true}  onClick={(event) => this.handleClick(event)}/>
                  <hr/>
                  {this.state.tableHTML}
            </div>
            </MuiThemeProvider>    
          </div>

        );
    }
}

export default Search;