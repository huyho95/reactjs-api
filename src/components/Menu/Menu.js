import {Route, Link} from 'react-router-dom'

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lý sản phẩm',
    to: '/product-list',
    exact: false
  },
]
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
      var active = match ? 'active': '';
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }}> 

    </Route>
  )
}
const showMenu = (menus) => {
  var result = null;
  if(menus.length > 0) {
    result = menus.map((item, index) => {
      return (
        <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact}/>
      )
    })
  }
  return result;
}
function Menu() {
  return (
    <div className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <div className="navbar-brand">CALL API</div>
        {showMenu(menus)}
      </ul>
    </div>
  );
}

export default Menu;
