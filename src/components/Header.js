import Link from 'next/link';

export default function Header () {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            href="#"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            LOGO
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/list" className="nav-link px-2 text-white">
                Patients List
              </Link>
            </li>
            <li>
              <Link href="/record" className="nav-link px-2 text-white">
                New Record
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {/* <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};