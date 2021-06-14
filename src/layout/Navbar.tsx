import Code from 'assets/code.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        {/* Branding */}
        <a href="#" className="navbar-brand">
          <img src={Code} className="mr-3 text-primary" alt="Alex Hall | Web Developer" height="24"/>
          <span className="pl-4">Alex Hall</span>
        </a>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Links */}
        <div className="collapse navbar-collapse" id="nav-menu">
          <ul className="navbar-nav ms-auto">
            {/* About */}
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>

            {/* Contacts*/}
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
