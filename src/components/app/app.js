import React from 'react';
import './app.css';
import ShopHeader from '../shop-header';
import {HomePage , CardPage} from '../pages';
import {Route, Switch} from 'react-router-dom';

const App =(props) => {
  return <div className="wrapper">
            <ShopHeader numItems={5} total={210}/>
            <main role="main" className="container">
              <Switch>
                    <Route
                      path='/'
                      component ={HomePage}
                      exact
                      />
                    <Route
                      path='/cart'
                      component ={CardPage}
                      exact
                      />
              </Switch>
            </main>
        </div>
}

export default App;