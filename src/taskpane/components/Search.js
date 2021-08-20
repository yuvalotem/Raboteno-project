import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";

export default class Search extends React.Component {
  render() {
    const { text, handleChange, handleClick } = this.props;

    return (
      <div className="searchContainer">
        <input
          value={text}
          placeholder="טקסט לחיפוש"
          onChange={handleChange} />
          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            iconProps={{ iconName: "ChevronRight" }}
            onClick={handleClick}
          >
            חיפוש
          </Button>
      </div>
    );
  }
}

Search.propTypes = {
    text: PropTypes.string,
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
};
