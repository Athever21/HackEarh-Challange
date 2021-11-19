import React from "react";
import { Link, useLocation } from "react-router-dom";
import "@/styles/Header.scss";
import { useCandidates } from "@/CandidateProvider";

const Header = () => {
  const { setSearch } = useCandidates();
  const location = useLocation();

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-nav-link">
          Home
        </Link>
        <Link to="/shortlisted" className="header-nav-link">
          Shortlisted
        </Link>
        <Link to="/rejected" className="header-nav-link">
          Rejected
        </Link>
      </nav>
      {["/", "/rejected", "/shortlisted"].includes(location.pathname) && (
        <input
          className="header-search"
          type="text"
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Search..."
        />
      )}
    </header>
  );
};

export default Header;
