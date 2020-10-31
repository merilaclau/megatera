import React, {Fragment} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import MainHeader from './components/MainHeader/MainHeader';
import Holi from './pages/Holi/Holi';
import Oh from './pages/Oh/Oh';
import OhOh from './pages/OhOh/OhOh';
import OhOhOh from './pages/OhOhOh/OhOhOh';
import Chau from './pages/Chau/Chau';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader/>
        <Switch>
          <Route exact path="/" component={Holi}/>
          <Route exact path="/oh" component={Oh}/>
          <Route exact path="/oh-oh" component={OhOh}/>
          <Route exact path="/oh-oh-oh" component={OhOhOh}/>
          <Route exact path="/chau" component={Chau}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
