import "./App.css";
import Menu from "./components/Menu/Menu"
import ProductsList from "./components/Products-list/ProductsList"
function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <button type="button" className="btn btn-warning">
          <i className="fas fa-plus mr-2"></i>Thêm sản phẩm
        </button>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
