import React from 'react';
import classes from './Result.module.css';
import ButtonQuiz from '../../../components/ButtonQuiz/ButtonQuiz';
import {connect} from "react-redux";

const Result = props => {
  return (
    <div className={classes.resultWrap}>
    <h1>Результат</h1>
      {
        props.quiz.map( (item, index) => {
          const userAnswer = item.answers.find( answer => answer.id === props.userAnswers[index].userAnswerId);
          return <div className={classes.quizAnswerBlock} key={index}>
          <h4> {item.question}</h4>
            {
            (item.rightAnswerId === props.userAnswers[index].userAnswerId)
              ? <span className={classes.successAnswer} >
                  Ваш ответ {userAnswer.value}, правильно!
                </span>
              : <span className={classes.errorAnswer}>
                  Ваш ответ {userAnswer.value} - не правильно. Правильный ответ {item.answers[item.rightAnswerId-1].value}!
                </span>
            }
          </div>
        })
      }
      <div>
        <ButtonQuiz
          value="Повторить"
          onClick={props.onClick}
        />
      </div>
    </div>
)};

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Result)