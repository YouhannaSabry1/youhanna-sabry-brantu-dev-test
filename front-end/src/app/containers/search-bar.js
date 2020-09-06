import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/index";
import { fetchProductsByName } from "../actions/index";

class SearchBar extends Component {

  onInputChange(input) {
    if (input !== "") {
      this.props.fetchProductsByName(input).then(products => {
        this.setState({ productsList: products.payload.data });
      });
    } else {
      this.props.fetchProducts().then(products => {
        this.setState({ productsList: products.payload.data });
      });
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search..."
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProductsByName,fetchProducts }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
