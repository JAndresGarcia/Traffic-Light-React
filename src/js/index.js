//import react into the bundle
import React, { Component } from 'react';
import { render } from 'react-dom';
import Luz from './component/Light/index.js';

class App extends Component {

    render() {
      return (
        <div className='Semaforo'>
        <Luz />
        </div>
      );
    }
  }
  
  render(<App />, document.querySelector('#app'));
  
