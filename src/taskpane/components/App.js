import * as React from "react";
import PropTypes from "prop-types";
import { Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";
import HeroList from "./HeroList";
import NavBar from "./NavBar";
import Progress from "./Progress";
/* global Word */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
      text: "",
      page: 0,
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Unlock",
          primaryText: "עיון",
        },
        {
          icon: "Search",
          primaryText: "חיפוש",
        },
        {
          icon: "Design",
          primaryText: "ראשי תיבות",
        },
        {
          icon: "Compare",
          primaryText: "השוואה",
        },
      ],
    });
  }

  handleChange = (event) =>{
    this.setState({
      text: event.target.value
    })
  }

  click = async () => {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */
      //  var paragraphs = context.document.getSelection().paragraphs;
      //  paragraphs.load();
      //  paragraphs.items[0].insertText(' New sentence in the paragraph.',
      //                                 Word.InsertLocation.end);
      // context.document.body.paragraphs[0].font.color = "blue"

      // insert a paragraph at the end of the document.
      // const paragraph = context.document.body.insertParagraph(this.state.text, Word.InsertLocation.end);

      // change the paragraph color to blue.
      // paragraph.font.color = "blue";


      let results = context.document.body.search(this.state.text);
      results.load("length");

      await context.sync();

      // Let's traverse the search results... and highlight...
      for (let i = 0; i < results.items.length; i++) {
        results.items[i].font.highlightColor = "yellow";
      }

      this.setState({
        text: ""
      })

      await context.sync();
    });
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <NavBar page={this.state.page} items={this.state.listItems}/>
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome!" />
        <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <input
          value={this.state.text}
          placeholder="text to search"
          onChange={this.handleChange} />
          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            iconProps={{ iconName: "ChevronRight" }}
            onClick={this.click}
          >
            Run
          </Button>
        </HeroList>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
