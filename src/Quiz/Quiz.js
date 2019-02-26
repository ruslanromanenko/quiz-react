import React from 'react';
import Input from '@material-ui/core/Input';
import './Quiz.css';

const Quiz = (props) => {
  return <div>
    <span>{props.quiz.question}</span>
    <br/>
    {
      (props.stateButton) ?

      <div>
        <span className="answer">{props.quiz.answer}</span>
        <span className="answerUser">{props.quiz.answerUser}</span>
      </div> :

      <Input type="text"  onChange={ (evt) => props.handleChange(evt, props.quiz.id)}/>
    }
  </div>

};

export default Quiz