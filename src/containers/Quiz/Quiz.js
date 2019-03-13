import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import ButtonQuiz from '../../components/ButtonQuiz/ButtonQuiz';
import Result from '../../components/Result/Result';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Quiz extends Component {

  state = {
    indexActiveQuestion: 0
  };

  handleChangeRadio = (evt) => {
    this.props.answerOnQuestion({indexActiveQuestion: this.state.indexActiveQuestion, idUserAnswer: evt.target.id})
  };

  handleClickNextQuestion = () => {
    const indexActiveQuestion = this.state.indexActiveQuestion;

    if(indexActiveQuestion < this.props.quiz.length -1 && this.props.quiz[indexActiveQuestion].valueUserAnswer){
      this.setState({
        indexActiveQuestion: indexActiveQuestion + 1,
      });
    }

    this.props.onFinishedQuiz(indexActiveQuestion + 1);
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
      indexActiveQuestion: 0
    });
    this.props.onResetQuiz();
  };

  renderQuiz = () => {
    return (
      <React.Fragment>
        <ActiveQuiz
          indexActiveQuestion={this.props.quiz[this.state.indexActiveQuestion]}
          stateButton={this.props.submitted}
          onChangeRadio={this.handleChangeRadio}
          quizLength={this.props.quiz.length}
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
              quiz={this.props.quiz}
              onClickReset={this.handleClickReset}
              />
            : this.renderQuiz()
        }
        <Link to='/'>
          <ButtonQuiz value="Вернуться на главную" className={classes.BackToHome}/>
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
    onFinishedQuiz: (indexActiveQuestion) => dispatch({type: 'QUIZ_FINISHED', indexActiveQuestion}),
    onResetQuiz: () => dispatch({ type: 'QUIZ_RESET' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
