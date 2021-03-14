import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu"
import routes from './routes'

function App() {
  const showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((item, index) => {
        return <Route key={index} path={item.path} exact={item.exact} component={item.main}/>
      })
    }
    return <Switch>{result}</Switch>
  }
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          {showContentMenus(routes)}
        </div>
      </div>
    </Router>
  );
}

export default App;
