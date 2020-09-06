import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/index";


class productsList extends Component {

    componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    if (this.props.productsList) {
      if (this.props.productsList.length === 0) {
        return (
          <div>No products were found in the database.</div>
        )
      }
      return this.props.productsList.map(product => {
        return (
          <li className="list-group-item" key={product._id}>
            <strong className="col-md-4">{product.category.name}</strong>
            <br></br>
            <span className="col-md-8">{product.name}</span>
            <br></br>
            <strong className="col-md-4">{product.price}$</strong>
            <img className="col-md-2" src={product.image} alt="Product"/>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderProducts()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { productsList: state.productsList.products };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productsList);
