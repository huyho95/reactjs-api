
function ProductList(props) {
  return (
    <div className="panel  panel-primary mt-10">
      <div className="panel-heading App">
        <h4>Danh sách sản phẩm</h4>
      </div>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th className="stt App">STT</th>
              <th className="code App">Mã SP</th>
              <th className="name App">Tên</th>
              <th className="des App">Mô tả</th>
              <th className="pri App">Giá</th>
              <th className="sta App">Trạng thái</th>
              <th className="act App">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
