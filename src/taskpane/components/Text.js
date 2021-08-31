import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";

export default class Text extends React.Component {
  render() {
    const { name, path } = this.props;
    return (
      <div className="textContainer">
        {name} {path}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
