# Easy CMS

Projeto desenvolvido para ser um CMS simples e pratico.

### Pre-requisitos

Criado apenas com o 'bundle' do react-create-app

```
npm install react-create-app
```

### Data
 Supostamente o post a ser enviado deve ser o mais simples possivel, segue o model.
```
post = {
  assunto : String
  ativo  :  True,
  titulo: String,
  autor  :  "Ramon Moraes",
  date : Date,
  tags  :  {
    coded:[Array],
    public:String
  },
  text:{
    coded:[Array],
    public:String
  }

```

### Testando
  Com motivos de teste, o projeto esta utilizando um arquivo json statico.
  Para utilizar em suas APIs, trocar a Url no metodo componentDidMount em './src/components/Main.js'

```
componentDidMount() {
  const ajax = new XMLHttpRequest ();
  const update = this.pushCardsInState;
  const URL = 'suaurlaqui.com/minhaapi'
  ajax.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
          update(this.response)
     }
  };
  ajax.open("GET",URL,true);
  ajax.send();

```


## Autor

* **Ramon Moraes** - *Initial work* - [ramonmoraes](https://github.com/ramonmoraes)
