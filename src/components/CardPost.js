import React, { Component } from 'react';

class CardPost extends Component {

  passToPost=()=>{
    this.props.passTo(this.props);
  }
  render() {
    let tags=[];
    for (var i = 0; i < this.props.info.tags.length; i++) {
      tags[i] = <div className='tags' key={i}> {this.props.info.tags[i]}</div>
    }
    return (
      <div className="card" onClick={this.passToPost}>
      <h1> <span>{this.props.info.titulo}</span></h1>
      <p>Assunto:<span>{this.props.info.assunto}</span></p>
      <p>Escrito por:<span>{this.props.info.autor}</span></p>
      <p>Data:<span>{this.props.info.data}</span></p>
        <div className='tagsWrapper'>
          {tags}
        </div>
      </div>
    );
  }
}

export default CardPost;
