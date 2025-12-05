import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <section className="container text-center py-5">
      <FaExclamationTriangle size={70} className="text-warning mb-3" />
      <h1 className="fw-bold text-dark mb-3">404 - Page Not Found</h1>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <a href="/" className="btn btn-outline-primary px-4 py-2">
        Go Home
      </a>
    </section>
  );
}

export default NotFound;
