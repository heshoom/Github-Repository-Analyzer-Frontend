import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Github Repo Analyser
      </Link>
      <ul>
        <li>
          <Link to="/pricing">Repos</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
