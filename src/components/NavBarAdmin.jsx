import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function NavBarAdmin() {

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark p-sticky" style={{width: 280, height:"100vh"}}>
      <ul className="nav nav-pills d-flex flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className=" text-white" aria-current="page">
            Home
          </a>
        </li>
        <li className='nav-item mt-3'>
          <a href="#" className=" text-white">
            Dashboard
          </a>
        </li>
        <li className='nav-item mt-3'>
          <a href="#" className=" text-white">
            Orders
          </a>
        </li>
        <li className='nav-item mt-3'>
          <a href="#" className=" text-white">
            Products
          </a>
        </li>
        <li className='nav-item mt-3'>
          <a href="#" className=" text-white">
            Customers
          </a>
        </li>
      </ul>
      <hr/>
      <a className="dropdown-item" href="#">Sign out</a>
    </div>
  );
}

export default NavBarAdmin;
