import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";
import Book from "./Book";


export default class Books extends React.Component {
  render() {
      const { books, margin, openFile, path } = this.props;
    return (
      <div className="booksContainer">
        {books.map(b=><Book book={b} margin={margin} openFile={openFile} path={path} />)}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
