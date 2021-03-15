import React, { useState } from 'react';
import  {Link } from 'react-router-dom'
import{ useEffect } from 'react';
import {connect} from 'react-redux';
import { addProductsRequest, getProductRequest, updateProductRequest } from '../../actions/index'


function ProductActionPage(props) {
  const [productItem, setProductItem] = useState({
    id: '',
    txtCode: '',
    txtName: '',
    txtDesc: '',
    txtPrice: '',
    chkbStatus: false
  });
  useEffect(() => {
    var {match} = props
    if(match) {
      var id = match.params.id;
      props.onEditProduct(id)
    }
    if(props.itemEditing && props.itemEditing.id !== null) {
      var itemEditing = props.itemEditing
      setProductItem({
        id: itemEditing.id,
        txtCode: itemEditing.code,
        txtName: itemEditing.name,
        txtDesc: itemEditing.desc,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.itemEditing]);

  const onChange = (event) => {
    var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setProductItem({
      ...productItem,
      [event.target.name]: value
    })
  }

  const onSave = (event) => {
    event.preventDefault();
    if(productItem.id) {
      props.onUpdateProduct(productItem)
    } else {
      props.onAddProduct({
        code: productItem.txtCode,
        name: productItem.txtName,
        desc: productItem.txtDesc,
        price: productItem.txtPrice,
        status: productItem.chkbStatus
      })
      props.history.goBack();
    }
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={onSave}>
            <div className="form-group">
              <label>Mã sản phẩm: </label>
              <input type="text" className="form-control" name="txtCode" value={productItem.txtCode} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label>Tên sản phẩm: </label>
              <input type="text" className="form-control" name="txtName" value={productItem.txtName} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label>Mô tả: </label>
              <textarea type="text" className="form-control" rows="3" name="txtDesc" value={productItem.txtDesc} onChange={onChange}></textarea>
            </div>
            <div className="form-group">
              <label>Giá: </label>
              <input className="form-control" name="txtPrice" value={productItem.txtPrice} onChange={onChange}/>
            </div>
            <div>
              <label>Trạng thái: </label>
            </div>
            <div className="checkbox" style={{marginTop: '0px'}}>
              <label>
                <input type="checkbox" name="chkbStatus" checked={productItem.chkbStatus} value={productItem.chkbStatus} onChange={onChange}/>
                  Còn hàng
              </label>
            </div>
            <Link to="/product-list" className="btn btn-info" style={{marginTop: '16px', width: '100px', marginRight: '10px'}}>Trở lại</Link>
            <button type="submit" className="btn btn-success" style={{marginTop: '16px', width: '100px'}}>Lưu lại</button>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct : (product) => {
      dispatch(addProductsRequest(product))
    },
    onEditProduct: (id) => {
      dispatch(getProductRequest(id))
    },
    onUpdateProduct: (product) => {
      dispatch(updateProductRequest(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);






