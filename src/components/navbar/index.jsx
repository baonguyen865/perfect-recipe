import React from "react";
import { IoHeartCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {

  return (
    <div className="_navbar py-3 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Link
            to={"/"}
            className="text-decoration-none"
          >
            <p className="logo p-0 m-0 text-uppercase fw-bold text-grey h1">
              Perfect<span className="logo_suffex">Recipe</span>
            </p>
          </Link>

        </div>
        <div className="d-flex align-items-center gap-4">

          <Link
            to={"/favourite"}
            className="text-decoration-none"
          >
            <button className="bg-transparent border-0 outline-0 d-flex justify-content-between  align-items-center gap-2">
              <IoHeartCircle className="m-0 p-0 text_primary h4" />{" "}
              <p className="p-0 m-0 text_primary h6">Favoritos</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar
