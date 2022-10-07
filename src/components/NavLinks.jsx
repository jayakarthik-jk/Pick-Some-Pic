import React from "react";

import useColor from "../hooks/useColor";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  const { PRIMARY_COLOR_DARK, SECONDARY_COLOR_LIGHT, BRAND_COLOR } = useColor();
  return (
    <div
      className={`d-flex align-items-center justify-content-evenly bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
      style={{ marginLeft: "auto" }}
    >
      <ul className="navbar-nav">
        <li className="nav-item mx-2 p-2 text-center d-flex align-items-center">
          <NavLink
            className={`nav-link bg-${PRIMARY_COLOR_DARK} text-${SECONDARY_COLOR_LIGHT}`}
            to="photos"
          >
            <b>Explore</b>
          </NavLink>
        </li>
        {!sessionStorage.getItem("token") && (
          <li className="nav-item text-center p-1 mx-2">
            <NavLink className="nav-link" to="login">
              <button
                className={`btn btn-${BRAND_COLOR}`}
                onClick={() => {
                  sessionStorage.setItem(
                    "redirect_uri",
                    document.location.href
                  );
                }}
              >
                <b>log in</b>
              </button>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
