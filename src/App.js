import React, { Component } from 'react';
import './App.css';

const correct = [2,3,1,4];

class App extends Component {
    constructor() {
        super();
        this.state = {
            curr: [0,0,0,0],
            showResult: false,
            win: false
        }
    }

    checkCurr() {
        console.log(correct);
        console.log(this.state.curr);
        if (this.state.curr.filter((c, i) => c === correct[i]).length === 4) {
            this.setState({
                win: true,
            })
        } else {
            this.setState({
                showResult: true,
            })
        }

    }

    changeColor(index) {
        this.setState({
            showResult: false,
        })
        let currCopy = this.state.curr;
        currCopy[index] = (currCopy[index] + 1) % 5;
        this.setState({
            curr: currCopy
        })
    }

  render() {
        const { curr, showResult, win } = this.state;
        console.log()
      var colorArray = ['white', 'cyan', 'coral', 'red', 'purple'];
    return (
      <div className="App">
          <p>Press the circles to change color!</p>
          <p>Press submit to check your answer, you have unlimited submissions!</p>
          <svg height="100" width="600">
              {curr && curr.map((c, i) => {
                  return <circle onClick={() => this.changeColor(i)} cx={(i+1)*100} cy="50" r="40" stroke="black" stroke-width="3" fill={colorArray[c]} />
              })}

          </svg>
          <button onClick={() => this.checkCurr()}>Submit</button>
          {showResult && (this.state.curr.filter((c, i) => c === correct[i]).length === 0 ? <p>Try again!</p> : <div>
              {curr.map((c, i) => {
                  if (c === correct[i]) {
                      return <p>Circle {i+1} is correct</p>
                  }

              })}
          </div>)
          }
          {win && <div><h5>Congratulations!!!</h5><p>Arrange sauces in this order and then flip them over!</p></div>}
      </div>
    );
  }
}

export default App;
