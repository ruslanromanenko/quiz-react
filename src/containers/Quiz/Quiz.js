import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import ButtonQuiz from '../../components/ButtonQuiz/ButtonQuiz';
import Result from '../../components/Result/Result';
import cloneDeep from 'lodash.clonedeep';

const quiz = [
  {
    id:'1',
    question: 'Столица Украины?',
    rightAnswerId: '1',
    answers: [
      {text: 'Киев', id: '1'},
      {text: 'Москва', id: '2'},
      {text: 'Минск', id: '3'},
      {text: 'Вашингтон', id: '4'}
    ]
  },
  {
    id:'2',
    question: 'Столица России?',
    rightAnswerId: '2',
    answers: [
      {text: 'Киев', id: '1'},
      {text: 'Москва', id: '2'},
      {text: 'Минск', id: '3'},
      {text: 'Вашингтон', id: '4'}
    ]
  },
  {
    id:'3',
    question: 'Столица Белорусии?',
    rightAnswerId: '3',
    answers: [
      {text: 'Киев', id: '1'},
      {text: 'Москва', id: '2'},
      {text: 'Минск', id: '3'},
      {text: 'Вашингтон', id: '4'}
    ]
  },
  {
    id:'4',
    question: 'Столица США?',
    rightAnswerId: '4',
    answers: [
      {text: 'Киев', id: '1'},
      {text: 'Москва', id: '2'},
      {text: 'Минск', id: '3'},
      {text: 'Вашингтон', id: '4'}
    ]
  }
];

class Quiz extends Component {

  state = {
    submitted: false,
    finished: false,
    activeQuestion: 0,
    quiz: cloneDeep(quiz),
  };

  handleClick = () => {
    this.setState({submitted: true});
  };

  handleChangeRadio = (evt) => {
    const activeQuestion = this.state.activeQuestion;

    if(activeQuestion <= this.state.quiz.length){
      const updateQuizState = this.state.quiz;
      updateQuizState[activeQuestion].answerUser = evt.target.value;
      updateQuizState[activeQuestion].answerUserId = evt.target.id;

      if(activeQuestion < this.state.quiz.length){
        this.setState({
          quiz: updateQuizState,
        });
      }
    }
  };

  handleClickNextQuestion = () => {
    const activeQuestionIndex = this.state.activeQuestion;
    if(activeQuestionIndex < this.state.quiz.length -1 && this.state.quiz[activeQuestionIndex].answerUser){
      this.setState({
        activeQuestion: activeQuestionIndex + 1,
      });
    }
    if(activeQuestionIndex + 1 === this.state.quiz.length){
      this.setState( (prevState) => prevState.finished = true)
    }
  };

  handleClickPreviousQuestion = () => {
    const activeQuestion = this.state.activeQuestion;
    if(activeQuestion > 0){
      this.setState({
        activeQuestion: activeQuestion - 1,
      });
    }
  };

  handleClickReset = () => {
    this.setState({
      activeQuestion: 0,
      submitted: false,
      finished: false,
      quiz: cloneDeep(quiz),
    });
  };

  renderActions = (finished) => {
    return (
      finished ?
        <ButtonQuiz onClick={this.handleClick} value="Сдать тест"/> :
        <React.Fragment>
          <ButtonQuiz onClick={this.handleClickPreviousQuestion} value="Предыдущий вопрос"/>
          <ButtonQuiz onClick={this.handleClickNextQuestion} value="Следующий вопрос"/>
        </React.Fragment>
    );
  };

  renderQuiz = () => {
    return (
      <React.Fragment>
        <ActiveQuiz
          activeQuestion={this.state.quiz[this.state.activeQuestion]}
          stateButton={this.state.submitted}
          onChangeRadio={this.handleChangeRadio}
          quizLength={this.state.quiz.length}
          answerNumber={this.state.activeQuestion + 1}
        />
        {this.renderActions(this.state.finished)}
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="Quiz">
        {
          this.state.submitted ?
            <Result
              quiz={this.state.quiz}
              onClickReset={this.handleClickReset}
            /> :
            this.renderQuiz()
        }
      </div>
    );
  }
}
export default Quiz;
