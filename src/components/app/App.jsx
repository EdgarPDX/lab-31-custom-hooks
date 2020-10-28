import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../../components/nav/Header';
import AllCharacters from '../../pages/characters/AllCharacters';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={AllCharacters}/> 
        </Switch>

      </Router>

    </>
  );
}
