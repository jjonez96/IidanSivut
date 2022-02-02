import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <div>
      <Menu right {...props}>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Etusivu
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/kynnet"
        >
          Kynnet
        </Link>
      </Menu>
    </div>
  );
};
export default Sidebar;
