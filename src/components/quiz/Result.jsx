import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Result extends Component{
  render(){
    var percent = (this.props.score/this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'Great Job!';
    }else if (percent < 80 && percent > 60) {
      var message = 'Not Bad!';
    }else{
      var message = "Bad!";
    }
    return(
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h2>{percent}% - {message}</h2>
        <hr/>
        <a href="/app"> Take The Test Again</a>
      </div>
    )
  }
}
export default Result
