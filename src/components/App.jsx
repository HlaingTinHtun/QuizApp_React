import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Result from './quiz/Result.jsx';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      questions:[
        {
          id: 1,
          text: 'What is the result of 1 + 1',
          choices: [
            {
              id: 'a',
              text: '2'
            },
            {
              id: 'b',
              text: '3'
            },
            {
              id: 'c',
              text: '1'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'WHat is the result of 1-1',
          choices: [
            {
              id: 'a',
              text: '2'
            },
            {
              id: 'b',
              text: '1'
            },
            {
              id: 'c',
              text: '0'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'WHat is the result of 4/2',
          choices: [
            {
              id: 'a',
              text: '1'
            },
            {
              id: 'b',
              text: '2'
            },
            {
              id: 'c',
              text: '3'
            }
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'WHat is the result of 7*1',
          choices: [
            {
              id: 'a',
              text: '7'
            },
            {
              id: 'b',
              text: '14'
            },
            {
              id: 'c',
              text: '9'
            }
          ],
          correct: 'a'
        },
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render(){
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var result = <Result {...this.state} />
    }else {
      var scorebox = <Scorebox {...this.state} />
      var result = '';
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {result}
      </div>
    )
  }
}
export default App
