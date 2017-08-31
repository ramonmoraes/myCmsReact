import React, { Component } from 'react';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      new:props.info.new,
      ativo:props.info.ativo,
      titulo:props.info.titulo,
      assunto:props.info.assunto,
      autor:props.info.autor,
      tags:props.info.tags,
      date:props.info.date,
      text:{
        public:props.info.textPublic,
        coded:props.info.textCoded
      }
    }
  }

  logFormated=()=>{
    console.log(this.state);
  }
  handleChanges=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
handleTagChanges=(e)=>{
  let tags = e.target.value.split(" ");
  for (var i = 0; i < tags.length; i++) {
    if(tags[i]===''){
      tags.pop();
    }
  }
  this.setState({tags:tags})
}
  handleTextChanges=(e)=>{
    let paragrafos = e.target.value.split(/\n/);
    this.setState({
      text:{
        public:e.target.value,
        coded:paragrafos
      }
    })
  }
  render() {
    return (
      <div className='cmsForm'>
        <p> Definir visibilidade como: </p>
        <div className='cmsLabel'>
          <label htmlFor='ativo'>Visivel</label>
          <input type='radio' name='ativo' onChange={this.handleChanges} checked value={true}/>
          <label htmlFor='ativo'>Escondida</label>
          <input type='radio' name='ativo' onChange={this.handleChanges} value={false}/>
        </div>
        <input type='text' placeholder='titulo' name='titulo' onChange={this.handleChanges}/>
        <input type='text' placeholder='assunto' name='assunto' onChange={this.handleChanges}/>
        <input type='text' placeholder='autor' name='autor' onChange={this.handleChanges}/>
        <input type='text' placeholder='tags' name='tags' onChange={this.handleTagChanges}/>
        <input type='date' name='date' onChange={this.handleChanges} value={this.state.date}/>
        <textarea placeholder='' autoFocus name='text.public' onChange={this.handleTextChanges}></textarea>
        <button onClick={this.logFormated}> Postar </button>
      </div>
    );
  }
}

export default Post;
