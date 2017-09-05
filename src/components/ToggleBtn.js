import React, { Component } from 'react';

class ToggleBtn extends Component {

  constructor(props){
    super(props);
    this.state={
      text:'Novo',
      hash:'#post'
    }
  }

  toggleJanela =()=> {
    window.location.hash=this.state.hash;
  }

  componentWillReceiveProps(np) {
    if(this.props.janela==="#main"){
      this.setState({text:"Voltar"});
    }else{
      this.setState({text:"Novo"});
    }
    this.setState({hash:this.props.janela});
  }


  render() {
    return (
        <button className='toggleBtn' onClick={this.toggleJanela}>
          {this.state.text}
        </button>
        );
  }
}

export default ToggleBtn;
