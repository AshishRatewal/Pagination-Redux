import React from "react";
import { useDispatch } from "react-redux";
import { searchData } from '../Redux/Action/Actions';
const Header = () => {
  const dispatch = useDispatch();
  const getSearchData = (e) => {
    const {value} = e.target;
    dispatch(searchData(value));
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark primary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Airline
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li></li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control"
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
