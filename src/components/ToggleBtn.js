import React, { Component } from 'react';

class ToggleBtn extends Component {
  constructor(props){
    super(props);
    this.state={
      img:'',
      text:'Novo'
    }
  }

  changeUrl=()=>{
    if(window.location.hash==="#main"){
      window.location.hash='#post';
      this.setState({text:'Voltar'})
    }else{
      window.location.hash='#main';
      this.setState({text:'Novo'})
          }
  }
  render() {
        return (
      <button className='toggleBtn' onClick={this.changeUrl}>
        {this.state.text}
      </button>
    );
  }
}

export default ToggleBtn;
