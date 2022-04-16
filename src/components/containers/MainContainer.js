import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import Board from './Board'

const {
    changePlayerName,
} = actions;

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            curPlayer: 'X',
            winner: null
        }
        this.togglePlayer = this.togglePlayer.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }

    togglePlayer = () => {
        if (this.props.playerName === "Victor") {
            this.props.changePlayerName("Priscilla");
        } else if (this.props.playerName === "Priscilla") {
            this.props.changePlayerName("Victor");
        }
    }

    checkWin = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
    
        return null;
    }

    handleClick = (i) => {
        if (this.state.winner) {
            return;
        }
        const cur = this.state.squares;
        const curPlayer = this.state.curPlayer;
        if (cur[i] === 'X' || cur[i] === 'O') {
            return;
        }
        var nextPlayer;
        if (curPlayer === 'X') {
            cur[i] = 'X';
            nextPlayer = 'O';
        } else if (curPlayer === 'O') {
            cur[i] = 'O';
            nextPlayer = 'X';
        }
        var winner = this.checkWin(cur);
        this.setState({squares: cur, curPlayer: nextPlayer, winner: winner});
    }

    resetGame = () => {
        var cur = this.state.squares;
        for (let i = 0; i < 9; i++) {
            cur[i] = null;
        }
        var nextPlayer = 'X';
        var winner = null;
        this.setState({squares: cur, curPlayer: nextPlayer, winner: winner});
    }

  render() {
      console.log("props", this.props)
      let status;
      if (this.state.winner) {
        status = "Winner: " + this.state.winner;
      } else {
        status = "Next player is: " + this.state.curPlayer;
      }
      return (
        <div className="game">
            <div className="game-board">
                <Board onClick={(i) => this.handleClick(i)}
                    squares={this.state.squares} />
            </div>
            <div className="game-info">
                <div>{status}
                </div>
                <div>
                <button onClick={() => this.resetGame()}>Reset</button>
                </div>
            </div>

        </div>
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