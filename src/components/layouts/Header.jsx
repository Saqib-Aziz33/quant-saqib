import { Link } from "react-router-dom";
import {SiQuantconnect} from 'react-icons/si'
import {FiSearch} from 'react-icons/fi'

function Header() {
  return (
    <header className="header p-2 py-5">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to='/' className="text-dark d-flex text-decoration-none align-items-center gap-2 fs-5 fw-bold">
          <SiQuantconnect size={50} />
          <span className="text-uppercase">Quant</span>
        </Link>

        <ul className="nav-list">
          <li>Who</li>
          <li>What</li>
          <li>How</li>
          <li>Why</li>
          <li>About</li>
          <li>Sign In</li>
          <li><FiSearch /></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
