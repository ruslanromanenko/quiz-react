import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import ButtonQuiz from '../../components/ButtonQuiz/ButtonQuiz';
import Result from './Result/Result';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as quizes from '../../quizes';

class QuizRadio extends Component {

  state = {
    indexActiveQuestion: 0,
    quiz: quizes.default
  };

  handleChangeRadio = (evt) => {
    this.props.answerOnQuestion({questionId: this.state.quiz[this.state.indexActiveQuestion].id, userAnswerId: evt.target.id})
  };

  handleClickNextQuestion = () => {
    const indexActiveQuestion = this.state.indexActiveQuestion;

    if(indexActiveQuestion < this.state.quiz.length -1 && this.props.userAnswers[indexActiveQuestion]){
      this.setState({
        indexActiveQuestion: indexActiveQuestion + 1,
      });
    }
    if(this.props.userAnswers[indexActiveQuestion]){
      this.props.onFinishedQuiz({numberQuestion: indexActiveQuestion + 1, quizLength: this.state.quiz.length});
    }
  };

  handleClickPreviousQuestion = () => {
    const indexActiveQuestion = this.state.indexActiveQuestion;
    if(indexActiveQuestion > 0){
      this.setState({
        indexActiveQuestion: indexActiveQuestion - 1,
      });
    }
  };

  handleClickReset = () => {
    this.setState({
      indexActiveQuestion: 0,
    });
    this.props.onResetQuiz();
  };

  renderQuiz = () => {
    return (
      <React.Fragment>
        <ActiveQuiz
          question={this.state.quiz[this.state.indexActiveQuestion]}
          onChangeRadio={this.handleChangeRadio}
          quizLength={this.state.quiz.length}
          answerNumber={this.state.indexActiveQuestion + 1}
        />
        <div>
          <ButtonQuiz onClick={this.handleClickPreviousQuestion} value="Предыдущий вопрос"/>
          <ButtonQuiz onClick={this.handleClickNextQuestion} value="Следующий вопрос"/>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz Radio</h1>
        {
          this.props.finished
            ? <Result
              quiz={this.state.quiz}
              onClick={this.handleClickReset}
              />
            : this.renderQuiz()
        }
        <Link to='/'>
          <ButtonQuiz value="Вернуться на главную" className={classes.BackToHome} onClick={this.handleClickReset}/>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    answerOnQuestion: (payload) =>  dispatch({ type: 'USER_ANSWER', payload}),
    onFinishedQuiz: (payload) => dispatch({type: 'QUIZ_FINISHED', payload}),
    onResetQuiz: () => dispatch({ type: 'QUIZ_RESET' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizRadio);
