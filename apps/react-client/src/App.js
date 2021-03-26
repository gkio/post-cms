import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './modules/Home'

const Details = React.lazy(() => import('./modules/Details'))

const LazyDetails = (props) => (
  <React.Suspense fallback={<span>Loading</span>}>
    <Details {...props} />
  </React.Suspense>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>} />
          <Route exact path="/details" render={({ location: { state } }) => <LazyDetails {...state}/>} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
