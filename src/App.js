import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import './App.css';

import { Application } from "./application";
import { Routing } from "./Routing";

import Header from './modules/shared/header';
import Footer from './modules/shared/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Application.run();
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady || !Application.current) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Router>
          <div className="app">
            <div>
              <Header />
            </div>
            <Provider store={Application.current.store} >
              <Routing />
            </Provider>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
