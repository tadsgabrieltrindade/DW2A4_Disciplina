import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/" >Home</Link></li>
        <li> <Link to="/company" >Company</Link></li>
        <li> <Link to="/contact" >Contact</Link></li>
        <li> <Link to="/newproject" >New Project</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
