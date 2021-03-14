import React, { useState } from 'react';
import callApi from '../../utils/services';

function ProductActionPage() {
  const [productItem, setProductItem] = useState({
    id: '',
    txtCode: '',
    txtName: '',
    txtDesc: '',
    txtPrice: '',
    chkbStatus: ''
  });
  const onChange = (event) => {
    var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setProductItem({
      ...productItem,
      [event.target.name]: value
    })
  }
  const onSave = (event) => {
    event.preventDefault();
    callApi('products', 'post', {
      code: productItem.txtCode,
      name: productItem.txtName,
      desc: productItem.txtDesc,
      price: productItem.txtPrice,
      status: productItem.chkbStatus
    }).then(res => {
      console.log(res)
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={onSave}>
            <div className="form-group">
              <label>Mã sản phẩm: </label>
              <input type="text" className="form-control" placeholder="Code" name="txtCode" value={productItem.txtCode} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label>Tên sản phẩm: </label>
              <input type="text" className="form-control" placeholder="Name" name="txtName" value={productItem.txtName} onChange={onChange}/>
            </div>
            <div className="form-group">
              <label>Mô tả: </label>
              <textarea className="form-control" placeholder="Description" rows="3" name="txtDesc" value={productItem.txtDesc} onChange={onChange}></textarea>
            </div>
            <div className="form-group">
              <label>Giá: </label>
              <input type="number" className="form-control" placeholder="Price" name="txtPrice" value={productItem.txtPrice} onChange={onChange}/>
            </div>
            <div>
              <label>Trạng thái: </label>
            </div>
            <div className="checkbox" style={{marginTop: '0px'}}>
              <label>
                <input type="checkbox" name="chkbStatus" value={productItem.chkbStatus} onChange={onChange}/>
                  Còn hàng
              </label>
            </div>
            <button type="submit" className="btn btn-success" style={{marginTop: '16px', width: '100px'}}>Lưu lại</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductActionPage;






