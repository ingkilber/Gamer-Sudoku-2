import React, { Component } from 'react';
import SudokuGrid from './SudokuGrid';

class MainWindow extends Component {
  render() {
    let checkSolutionMessage;
    if (this.props.solved) {
      checkSolutionMessage = <p>Solución correcta!</p>;
    } else if (this.props.solved === false) {
      checkSolutionMessage = <p>Esa no es una solución válida! :(</p>;
    }

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <div className="window">
        <SudokuGrid
          grid={this.props.grid}
          solved={this.props.solved}
          newGrid={this.props.newGrid}
          updateGrid={this.props.updateGrid}
        />
        <div className="dropdown">
          <button className="dropbtn active">Elige Nivel: </button>
          <div className="dropdown-content">        
            <a onClick={() => this.props.newGrid('grid_01')}>Facíl</a>
            <a onClick={() => this.props.newGrid('grid_02')}>Medio</a>
            <a onClick={() => this.props.newGrid('grid_03')}>Difícil</a>
            <a onClick={() => this.props.newGrid()}>Experto</a>
          </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn" onClick={() => this.props.bruteSolve()}>Resolver!</button>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => this.props.checkSolution()}>Comprobar solución</button>          
        </div>
        <div className="dropdown">
            <button className="dropbtn" onClick={refreshPage}>Riniciar</button>
        </div>
        <h1> {checkSolutionMessage} </h1>
      </div>
    );
  }
}


export default MainWindow;
