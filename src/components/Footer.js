import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link href="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/list" className="nav-link px-2 text-muted">
              Patients List
            </Link>
          </li>
          <li className="nav-item">
            <Link href="record" className="nav-link px-2 text-muted">
              New Record
            </Link>
          </li>
          <li className="nav-item">
            <Link href="about" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}
