import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './modules/Home'
import Details from './modules/Details'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>} />
          <Route exact path="/details" render={({ location: { state } }) => <Details {...state}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
