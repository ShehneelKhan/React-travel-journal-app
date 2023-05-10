import earthIcon from "../images/earth.svg";

export function Nav() {
  return (
    <nav className="navbar">
      <img src={earthIcon} alt="" className="navbar-img" />
      <p className="navbar-text" href="#">
        my travel journal.
      </p>
    </nav>
  );
}

export default Nav;
