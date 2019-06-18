import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { getChars } from '../actions';

import { CharacterList } from "../components";

class CharacterListView extends Component {

  componentDidMount() {
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    }
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
