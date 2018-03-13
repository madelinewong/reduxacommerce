import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import CartButton from './CartButton';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
     <div>
       <CartButton />
       <SearchBar />
       <ProductList searchTerm={this.props.search} products={this.props.products} />
       <div style={{display: this.props.cart === false ? 'none' : 'block'}}>
         <h1>Cart List</h1>
       </div>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
