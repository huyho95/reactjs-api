import ProductsList from '../../components/Products-list/ProductsList'
import ProductsItem from '../../components/Products-item/ProductsItem'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import callApi from '../../utils/services'
import {Link} from 'react-router-dom'

function ProductListPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    callApi('products', 'get', null).then(res => {
      setProducts(res.data)
    })
  },[]);
  // var products = props.products;
  var varProducts = products
  const showProducts = () => {
    var result = []
    if (varProducts.length > 0) {
      result = varProducts.map((item, index) => {
        return <ProductsItem key={index} index={index} product={item}></ProductsItem>
      })
    }
    return result;
  }
  return (
    <div>
      <Link to="/product/add" type="button" className="btn btn-warning">
        <i className="fas fa-plus mr-2"></i>Thêm sản phẩm
        </Link>
      <ProductsList>
        {showProducts(products)}
      </ProductsList>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null)(ProductListPage);
