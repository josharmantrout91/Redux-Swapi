import React, {Fragment} from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  // const fetchChars = e => {}

  render() {
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    // }
    return (
      <Fragment>
      <h2>Star Wars Characters</h2>
      <div className="CharactersList_wrapper">
      { this.props.characters && <CharacterList characters={this.props.characters} /> } 
      </div>
      { this.props.error && <p className="error">{this.props.error}</p> }
      { this.props.isLoading && <h2>A Long Time Ago... In a Galaxy Far, Far Away</h2> }
      </Fragment>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  { getChars }
)(CharacterListView);
