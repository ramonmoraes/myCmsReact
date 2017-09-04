import React, { Component } from 'react';
import CardPost from './CardPost';
import Post from './Post'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards:[],
      loaded:false,
      janela:this.props.janela,
      infoToPass:{ }
    }
  }

  componentWillReceiveProps(np) {
    this.setState({janela:np.janela});
  }

  componentDidMount() {
    const ajax = new XMLHttpRequest ();
    const update = this.pushCardsInState;
    ajax.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            update(this.response)
       }
    };
    ajax.open("GET","/fapi/post.json",true);
    ajax.send();
  }

  pushCardsInState =(str)=> {
    let cardInfo = JSON.parse(str);
    let cardStream=[];
      for (var i = 0; i < cardInfo.length; i++) {
        cardStream.push(
          <CardPost info={cardInfo[i]}
          key={"card"+i} passTo={this.passToMain}
          />);
      }
    this.setState({
      cards:cardStream,
      loaded:true
    });
  }

  clearInfoToPass =()=> {
    this.setState({infoToPass:''});
  }
  passToMain =(info)=> {
    this.setState({infoToPass:info});
    window.location.hash='post';
    }
  renderCardStream =()=> {
    if(this.state.loaded){
      return (
        <div className="">
          {this.state.cards}
        </div>
      );
    }else{
      return (
        <div className='center'>
          <h2> Carregando </h2>
          <img src='/images/loading.gif' alt='loading' />
        </div>
      );
    }
  }

  renderPost =()=> {
    return(
      <Post info={this.state.infoToPass} clearInfo={this.clearInfoToPass}/>
    );
  }

  render() {
    if(this.state.janela==="#main"){
      return (
        <div>
        {this.renderCardStream()}
        </div>
      );
    } else {
      return (
        <div className='center'>
          {this.renderPost()}
        </div>
      );
    }
  }

}

export default Main;
