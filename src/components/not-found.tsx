import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <div className="not-found-heading">
          <h1>404</h1>
        </div>
        <div>
          <Link to="/" className="home-link">
            <span>Go back home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
