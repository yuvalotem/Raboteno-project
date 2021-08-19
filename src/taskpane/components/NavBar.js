import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";

export default class NavBar extends React.Component {
  render() {
    const { page, items } = this.props;

    const listItems = items.map((item, index) => (
      <li className="ms-ListItem" key={index}>
        <span className="ms-font-m ms-fontColor-neutralPrimary">{item.primaryText}</span>
        <i className={`ms-Icon ms-Icon--${item.icon}`}></i>
      </li>
    ));
    return (
      <main className="ms-welcome__main">
        <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">{listItems}</ul>
      </main>
    );
  }
}

NavBar.propTypes = {
  page: PropTypes.number,
  items: PropTypes.array,
};
