import React from 'react';
import Input from '@material-ui/core/Input';
import './Quiz.css';

class Quiz extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       answerUser: '',
     }
   }

  handleChange = (evt) => {
     this.setState({answerUser: evt.target.value});
  };

  render() {
    return  <div>
    <span>{this.props.quiz.question}</span>
    <br/>
    {
      (this.props.stateButton) ?

        <div>
          <span className="answer">{this.props.quiz.answer}</span>
          <span className="answerUser">{this.state.answerUser}</span>
        </div> :

        <Input type="text" onChange={this.handleChange}/>
    }
    </div>
  }
}

export default Quiz