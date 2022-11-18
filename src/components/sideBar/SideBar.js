import React from "react";
import { Link } from "react-router-dom"

export const SideBar = ({ isOpen, handleShow }) => {
  return isOpen ? (
    <ul id="mySidenav" className="sidenav d-block d-md-block d-lg-none d-xl-none">
      <Link  to="/">Home</Link>
      <Link  to="/places">Place to stay</Link>
      <Link to="/">NFTs</Link>
      <Link  to="/">Community</Link>
      <button
        type="button"
        className="btn cta_btn py-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleShow}
      >
        connect wallet
      </button>
    </ul>
  ) : null;
};
