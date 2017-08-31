import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import Main from './components/Main';
import ToggleBtn from './components/ToggleBtn';
class App extends Component {
  constructor(props){
    super(props)
    this.state={atual:<Main passToApp={this.passToApp}/>,url:'#main'}
    window.location.hash='main';
  }
  componentDidMount(){
    window.onhashchange=this.hashChanger;
  }

  passToApp=(x)=>{
    console.log(x);
    window.location.hash="post";
    this.setState({url:window.location.hash,atual:<Post info={x}/>});
  }

  hashChanger=()=>{
    let url = window.location.hash;
    if(url==="#main")
      this.setState({url:window.location.hash,atual:<Main passToApp={this.passToApp}/>})
    if(url==="#post")
      this.setState({url:window.location.hash,atual:<Post/>})
  }

  render() {
    return (
      <div className="App">
        <div className='mobileContainer'>
        <nav className='topMenu'> <a href='#main'><img src='images/homewhite.png' alt='home'/></a> </nav>
          {this.state.atual}
          <ToggleBtn/>
        </div>
      </div>
    );
  }
}

export default App;
