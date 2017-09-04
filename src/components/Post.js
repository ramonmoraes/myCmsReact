import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novo:true,
      ativo:props.info.ativo,
      titulo:props.info.titulo,
      assunto:props.info.assunto,
      autor:props.info.autor,
      tags:{
        public:'',
        coded:this.props.info.tags
      },
      data:props.info.data,
      text:{
        public:'',
        coded:this.props.info.text
      }
    }
  }

  formatTags =()=> {
    let tags = "";

    for (var i = 0; i < this.state.tags.coded.length; i++) {
      tags = tags + this.state.tags.coded[i]+" ";
    }
    return tags

  }

  setPublicTags =()=> {
    this.setState({
      tags:{
        coded:this.state.tags.coded,
        public:this.formatTags()
      }
    })
  }

  formatText =()=> {
    let text = "";
    for (var i = 0; i < this.state.text.coded.length; i++) {
      text = text + this.state.text.coded[i] + "\n";
    }
    return text;
  }

  setPublicText =()=> {
    this.setState({
      text:{
        coded:this.state.text.coded,
        public:this.formatText()
      }
    })
  }

  codedTags =()=> {
      let coded = this.state.tags.public.split(" ");
      if (coded[coded.length-1]==="") {
          coded.pop();
        }

      return ({
        public:this.state.tags.public,
        coded:coded
      })

    }

  codedText =()=> {
    let coded = this.state.text.public.split(/\n/);
    if(coded[coded.length-1]===""){
      coded.pop()
    }

    return ({
      public:this.state.text.public,
      coded:coded
    })

  }

  logFormated =()=> {
    let formated ={
      ativo:this.state.ativo,
      titulo:this.state.titulo,
      assunto:this.state.assunto,
      autor:this.state.autor,
      tags:this.codedTags(),
      date:this.state.date,
      text:this.codedText()
    }
    //Enviar data a partir daqui
    console.log(formated);
  }

  handleChanges =(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleTagChanges =(e)=> {
    let tags = e.target.value;
    this.setState({tags:{
        public:tags,
        coded:this.state.tags.coded
    }});

  }

  handleTextChanges =(e)=> {
    let paragrafos = e.target.value.split(/\n/);
    this.setState({
      text:{
        public:e.target.value,
        coded:paragrafos
      }
    })
  }

  componentDidMount() {
    this.setPublicText();
    this.setPublicTags();
    this.props.clearInfo();
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
        <input type='text' placeholder='titulo' name='titulo' onChange={this.handleChanges} value={this.state.titulo} />
        <input type='text' placeholder='assunto' name='assunto' onChange={this.handleChanges} value={this.state.assunto}  />
        <input type='text' placeholder='autor' name='autor' onChange={this.handleChanges} value={this.state.autor}  />
        <input type='text' placeholder='tags' name='tags' onChange={this.handleTagChanges} value={this.state.tags.public} />
        <input type='date' name='date' onChange={this.handleChanges} value={this.state.data}  />
        <textarea placeholder='' autoFocus name='text.public' onChange={this.handleTextChanges} value={this.state.text.public}  ></textarea>
        <button onClick={this.logFormated}> Postar </button>
      </div>
    );
  }
}

export default Post;
