import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";
import Book from "./Book";


export default class Books extends React.Component {
  render() {
      const { books, margin } = this.props;
    //   const books = [
    //       {'תנ"ך ומפרשיו': []},
    //       {'חז"ל': []},
    //       {'הלכה ומנהג': []},
    //       {'שאלות ותשובות': []},
    //       {'מחשבה ומוסר': []},
    //   ]
    return (
      <div className="booksContainer">
        {books.map(b=><Book book={b} margin={margin} />)}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
