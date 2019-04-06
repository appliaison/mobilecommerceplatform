import React, { Component } from 'react';
import { Route, browserHistory } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Layout/>
      <Footer />
      </div>
    );
  }
}

export default App;
