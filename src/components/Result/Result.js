import React from 'react';
import classes from './Result.module.css';
import ButtonQuiz from '../ButtonQuiz/ButtonQuiz';

const Result = props => {
  console.log(props)
  return (
    <div className={classes.resultWrap}>
    <h1>Результат</h1>
      {
        props.quiz.map( (item, index) => {
          return <div className={classes.quizAnswerBlock} key={index}>
          <h4> {item.question}</h4>
            {
            (item.rightAnswerId === item.idUserAnswer)
              ? <span className={classes.successAnswer} >
                  Ваш ответ {item.valueUserAnswer}, правильно!
                </span>
              : <span className={classes.errorAnswer}>
                  Ваш ответ {item.valueUserAnswer} - не правильно. Правильный ответ {item.answers[item.rightAnswerId-1].text}!
                </span>
            }
          </div>
        })
      }
      <div>
        <ButtonQuiz
          value="Повторить"
          onClick={props.onClickReset}
        />
      </div>
    </div>
)};
export default Result