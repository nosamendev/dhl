import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Albums from './Layout/Albums/Albums';
import Photos from './Layout/Photos/Photos';
import Favourites from './Layout/Favourites/Favourites';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Albums} />
          <Route path="/albums/:id" exact component ={Photos} />
          <Route path="/favourites" exact component ={Favourites} />
          <Route render={() => <h1>(404) This file cannot be found</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
