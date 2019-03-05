import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import './ActiveQuiz.css';

const ActiveQuiz = props => {
  return (
    <React.Fragment>
      <p className='Question'>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.activeQuestion.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
      </p>
      <br/>
      <AnswersList
        activeQuestion={props.activeQuestion}
        onChangeRadio={props.onChangeRadio}
      />
    </React.Fragment>
)};
export default ActiveQuiz