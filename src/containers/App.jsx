import React from 'react';
import Home from './Home.jsx';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {
   render() {
      return (
          <BrowserRouter>
            <Route path="/" component={Home}/>
          </BrowserRouter>
      );
   }
}

export default App;