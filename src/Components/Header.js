import React from "react";
import { useDispatch } from "react-redux";
import { searchData, howManysEntry } from "../Redux/Action/Actions";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const getSearchData = (e) => {
    const { value } = e.target;
    dispatch(searchData(value));
  };
  // howManyEntry
  const howManyEntry = (e) => {
    const { value } = e.target;
    dispatch(howManysEntry(value));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark primary sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Airline Pagination
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <form className="d-flex">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Number of Entry 20"
                    aria-label="number"
                    onChange={howManyEntry}
                    min="20"
                  />
                </form>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getSearchData}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
