function ProductsItem() {
  return (
    <tr>
      <td className="App">1</td>
      <td className="App">MSP1</td>
      <td className="App">Iphone</td>
      <td className="App">Apple</td>
      <td className="App">500 Đ</td>
      <td className="App" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div className="status-item-available">
          <span>Còn hàng</span>
        </div>
      </td>
      <td>
        <div className="flex-action">
          <button type="button" className="btn btn-info mr-2">
            <i className="fas fa-edit"></i> Sửa
          </button>
          <button type="button" className="btn btn-danger">
            <i className="fas fa-trash-alt"></i> Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductsItem;
