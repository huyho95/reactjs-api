import { Link } from 'react-router-dom';

function ProductsItem(props) {
  var {product, index} = props
  var statusName = product.status ? 'Còn Hàng': 'Hết Hàng';
  var statusClass = product.status ? 'status-item-available' : 'status-item-out';

  const onDelete = (id) => {
    if(confirm('Bạn có chắc chắn muốn xóa không?')) { // eslint-disable-line
      props.onDelete(id)
    }
  }
  return (
    <tr>
      <td className="App">{index + 1}</td>
      <td className="App">{product.code}</td>
      <td className="App">{product.name}</td>
      <td className="App">{product.desc}</td>
      <td className="App">{product.price}</td>
      <td className="App" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div className={statusClass}>
          <span>{statusName}</span>
        </div>
      </td>
      <td>
        <div className="flex-action">
          <Link to={`/product/${product.id}/edit`} type="button" className="btn btn-info mr-2">
            <i className="fas fa-edit"></i> Sửa
          </Link>
          <button type="button" className="btn btn-danger" onClick={() => onDelete(product.id)}>
            <i className="fas fa-trash-alt"></i> Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductsItem;
