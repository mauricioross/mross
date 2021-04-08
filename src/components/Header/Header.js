import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
/**
 * @name Header
 * @param {*} props
 */
const Header = (props) => {
  return (
    <div className="Header_container">
      {/* <div className="menu">Menu</div> */}
      <div className="name">Mauricio Ross</div>
      <div className="search">
        {/* <div className="input_container">
          <FontAwesomeIcon icon={faSearch} />
          <input></input>
        </div> */}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
