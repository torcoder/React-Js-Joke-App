import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/category/:catName' component={Categories} />
        <Route exact path='/' component={Categories} />
        <Route exact path='/' component={Categories} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
