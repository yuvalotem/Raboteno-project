import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";

export default class NavBar extends React.Component {
  render() {
    const { page, items, setPage } = this.props;

    const listItems = items.map((item, index) => (
      <li className="nav-ListItem" key={index} onClick={()=>setPage(index)}>
        <i className={`ms-Icon ms-Icon--${item.icon}`}></i>
        <span className="ms-font-m ms-fontColor-neutralPrimary">
            {page===index ? <b>{item.primaryText}</b> : item.primaryText}</span>
      </li>
    ));
    return (
      <div className="menuContainer">
        <ul className="nav-List">{listItems}</ul>
      </div>
    );
  }
}

NavBar.propTypes = {
  page: PropTypes.number,
  items: PropTypes.array,
};
