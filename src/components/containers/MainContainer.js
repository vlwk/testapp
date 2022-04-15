import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../actions';

const {
    changePlayerName,
} = actions;

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.togglePlayer = this.togglePlayer.bind(this)
    }


    togglePlayer = () => {
        if (this.props.playerName === "Victor") {
            this.props.changePlayerName("Priscilla");
        } else if (this.props.playerName === "Priscilla") {
            this.props.changePlayerName("Victor");
        }
    }

  render() {
      console.log("props", this.props)
    return (
      <button onClick = {this.togglePlayer} >
          {this.props.playerName}
      </button>
    )
  }
}

const mapStateToProps = state => {
    return {
        playerName: state.data.playerName,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePlayerName: bindActionCreators(changePlayerName, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);