import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";
import NavBar from "./NavBar";
import Books from "./Books";
import SearchLocation from "./SearchLocation";
import mapping from "../../../mapping.json";

export default class Browse extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          listItems: [],
          page: 0,
          path: "",
        };
      }

    componentDidMount() {
        this.setState({
          listItems: [
            {
              icon: "Unlock",
              primaryText: "תצוגת עץ",
            },
            {
              icon: "Search",
              primaryText: "חיפוש מראה מקום",
            }
          ],
        });
      }

      setPage = (pageNum) =>{
        this.setState({
          page: pageNum
        })
      }

      setPath = (dir) =>{
        this.setState({
          path: path + "/" + dir
        })
      }

  render() {
    const { openFile } = this.props;
    let path = ''
    return (
      <div className="browseContainer">
        <NavBar page={this.state.page} items={this.state.listItems} setPage={this.setPage}/>
        {this.state.page === 0 ?
        <Books books={mapping} margin={0} openFile={openFile} path={path} /> :
        <SearchLocation />}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   page: PropTypes.number,
//   items: PropTypes.array,
// };
