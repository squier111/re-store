import React from 'react';
import './app.css'
import withBookstoreService from '../hoc';
import {HomePage , CardPage} from '../pages'
import {Route, Switch} from 'react-router-dom'

const App =(props) => {
  const { bookstoreService} = props;

  const bbb = bookstoreService.getBooks();

  console.log(bbb);
  return <div>
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
        </div>
}

export default withBookstoreService()(App);