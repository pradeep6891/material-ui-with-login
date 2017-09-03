import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Loginscreen from './pages/LoginPage'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      homePage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.homePage}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;
