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

  handleClick = () =>{
    const { book, openFile, path} = this.props;
    if(typeof book === 'object' && book !== null && !Array.isArray(book)){
      this.setState({open: !this.state.open})
      path += "/" + Object.keys(book)[0]
    }else{
      openFile({ icon: "page", primaryText: book, path: path + "/" + book})
    }
  }

  render() {
    const { book, margin, openFile, path} = this.props;
    return (
      <div className="bookContainer" >
        <span style={{marginRight: margin}} onClick={this.handleClick}>{typeof book === 'object' ? Object.keys(book)[0] : book}</span>
        {this.state.open && <Books books={book[Object.keys(book)[0]]} openFile={openFile} path={path}  margin={margin+20}/>}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
