import React, { Component } from 'react';
import CardPost from './CardPost';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={cards:[],loaded:false}
  }

  componentDidMount(){
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

  pushCardsInState=(str)=>{
    let cardInfo = JSON.parse(str);
    let cardStream=[];
      for (var i = 0; i < cardInfo.length; i++) {
        cardStream.push(<CardPost info={cardInfo[i]} key={"card"+i} passTo={this.props.passToApp}/>);
      }

    this.setState({cards:cardStream,loaded:true});
    // console.log(cardStream);
  }

  render() {
    if(this.state.loaded){
      return (
        <div className="">
          {this.state.cards}
        </div>
      );
    }else{
      return (
      <div className='center'>
        <img src='/images/loading.gif' alt='loading' />
      </div>
    );
    }
  }
}

export default Main;
