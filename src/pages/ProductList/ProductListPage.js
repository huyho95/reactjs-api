import ProductsList from '../../components/Products-list/ProductsList'
import ProductsItem from '../../components/Products-item/ProductsItem'
import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {fetchProductsRequest} from '../../actions/index';
import {deleteProductsRequest} from '../../actions/index';
function ProductListPage(props) {
  useEffect(() => {
    props.fetchAllProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  var varProducts = props.products;
  const showProducts = () => {
    var result = []
    if (varProducts.length > 0) {
      result = varProducts.map((item, index) => {
        return <ProductsItem key={index} index={index} product={item} onDelete={onDelete}></ProductsItem>
      })
    }
    return result;
  }
  const onDelete = (id) => {
    props.onDeleteProduct(id)
  }
  return (
    <div>
      <Link to="/product/add" type="button" className="btn btn-warning">
        <i className="fas fa-plus mr-2"></i>Thêm sản phẩm
        </Link>
      <ProductsList>
        {showProducts()}
      </ProductsList>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts : () => {
      dispatch(fetchProductsRequest())
    },
    onDeleteProduct : (id) => {
      dispatch(deleteProductsRequest(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
