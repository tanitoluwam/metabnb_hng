import { useState } from "react";
import logo from "../../assets/images/Group.png";
import { HamburgerIcon } from "../vectors/HamburgerIcon";
import { IconClose } from "../vectors/IconClose";
import { Modal } from "../modal/Modal";
import { SideBar } from "../sideBar/SideBar";

export const Navbar = ({ handleShow }) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Place to stay", link: "/places" },
    { name: "NFTs", link: "/" },
    { name: "community", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="d-md-flex justify-content-between align-items-center mt-5 container mx-auto mb-5">
        <div className="d-flex justify-content-between">
          <img src={logo} alt="metabnb logo" />
          <button onClick={() => setOpen(!open)} className="d-md-block bg-white border-0">
            {open ? <IconClose /> : <HamburgerIcon />}
          </button>
        </div>

        <ul className="d-md-flex align-items-center absolute links_contaner d-none d-md-none d-lg-flex ">
          {Links.map((link) => (
            <li key={link.name} className="md:mx-6">
              <a href={link.link} className=" nav_links px-4">
                {link.name}{" "}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          class="btn cta_btn py-2 d-none d-md-none d-lg-block"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleShow}
        >
          connect wallet
        </button>

        <Modal>
          <p>Your unsaved changes will be lost </p>
        </Modal>
      </nav>
      <SideBar isOpen={open} />
    </>
  );
};
