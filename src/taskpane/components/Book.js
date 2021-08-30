import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";
import Books from "./Books";

export default class Book extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          open: false,
        };
      }
  render() {
    const { book, margin } = this.props;
    return (
      <div className="bookContainer" >
        <span style={{marginRight: margin}} onClick={()=>this.setState({open: !this.state.open})}>{typeof book === 'object' ? Object.keys(book)[0] : book}</span>
        {this.state.open && <Books books={book[Object.keys(book)[0]]} margin={margin+20}/>}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
