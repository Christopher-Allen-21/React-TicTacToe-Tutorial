import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// To run, go to Command Line and navigate inside project
// Then enter "npm start"


// In JavaScript classes, you need to always call 'super' when defining the constructor of a subclass
// All React component classes that have a constructor should start with a super(props) call
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

/*
To collect data from multiple children, or to have two child components communicate with each other,
you need to declare the shared state in their parent component instead.
The parent component can pass the state back down to the children by using props;
this keeps the child components in sync with each other and with the parent component.
 */
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
