import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/table">Table</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;