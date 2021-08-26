import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import ProductContainer from './container/prouductContainer';
import MessageContainer from './container/messageContainer';
import CartsContainer from './container/cartContainer';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductContainer />
              <MessageContainer />
              <CartsContainer />
            </div>
          </main>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
