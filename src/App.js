import { render } from "@testing-library/react";
import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina : ""
  }

  scroll = ()=>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth','start');
  }
  paginaSiguiente = ()=>{
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //Suma uno a la pagina actual
    pagina+= 1;
    //Agregar el cambio al state
    this.setState({

      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  paginaAnterior = ()=>{

    let pagina = this.state.pagina;

    
    
    /*if(pagina >0){
      this.setState({
        pagina
      });
    }*/

    if(pagina ===1)return null    
    pagina-=1
    this.setState({
      pagina
    },()=>{
      this.consultarApi(); 
      this.scroll();
  
    })
  }
 
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const apiUrl = `https://pixabay.com/api/?key=24926331-b892de59ee8c1df78feb2cbd3&q=${termino}&page=${pagina}`;
    //console.log(url)
    fetch(apiUrl)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));

    /*  
    fetch(apiUrl)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log("Data HERE" + data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });*/
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino : termino,
        pagina : 1  
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"> Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        


        <div className="row justify-content-center">
            <Resultado imagenes={this.state.imagenes} 
            paginaAnterior = {this.paginaAnterior} 
            paginaSiguiente={this.paginaSiguiente}/>
        </div>
      </div>
      

    );
  }
}

export default App;
