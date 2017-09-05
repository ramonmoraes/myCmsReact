import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import ToggleBtn from './components/ToggleBtn';


class App extends Component {
  constructor(props) {
    super(props)
    window.location.hash='main';
    this.state={
        url:window.location.hash
    }
  }

  componentDidMount() {
    window.onhashchange=this.hashChanger;
  }

  hashChanger=()=> {
      this.setState({
        url:window.location.hash,
      });
  }

  render() {
    return (
      <div className="App">
        <div className='mobileContainer'>
        <nav className='topMenu'>
          <a href='#main'>
            <img src='images/homewhite.png' alt='home'/>
          </a>
        </nav>
          <Main janela={this.state.url}/>
          <ToggleBtn janela={this.state.url}/>

        </div>
      </div>
    );
  }
}

export default App;
