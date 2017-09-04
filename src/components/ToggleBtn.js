import React, { Component } from 'react';

class ToggleBtn extends Component {
  constructor(props){
    super(props);
    this.state={
      img:'',
      text:'Post',
      hash:'#post'
    }
  }
  componentWillReceiveProps(np){
    // Este metodo funciona porque só vão haver 2 estados de exibição:
    // - Post e Main
    if(np!==this.props.janela){
      this.setState({hash:this.props.janela});
      this.changeText();
    }
  }

  changeText =()=> {
    if (this.state.hash!=="#main") {
      this.setState({text:'Voltar'});
    } else {
      this.setState({text:'Post'});
    }
  }

  render() {
    return (
      <a href={this.state.hash}>
        <button className='toggleBtn'>
          {this.state.text}
        </button>
      </a>
    );
  }
}

export default ToggleBtn;
