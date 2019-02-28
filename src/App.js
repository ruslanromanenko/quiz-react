import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz/Quiz';
import Button from '@material-ui/core/Button';

const dataQuiz = [
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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataQuiz: dataQuiz,
      submitted: false,
      focusedQuizIndex: 0
    }
  }

  handleClick = () => {
    this.setState({submitted: true});
  };

  handleClickInput = (evt, index) => {
    this.setState({focusedQuizIndex:index});
  };

  handleChangeInput = (evt, idQuiz) => {
    this.setState( dataQuiz.map(quiz => (idQuiz === quiz.id) ? quiz.answerUser = evt.target.value : quiz) );
  };

  handleChangeRadio = (evt) => {
    this.setState( dataQuiz.map(quiz => (evt.target.name === quiz.id) ? (quiz.answerUser = evt.target.value, quiz.answerUserId = evt.target.id ) : quiz) );
  };

  handleKeyDown = (evt) => {
    if(evt.key === 'ArrowUp'){
      this.setState( (prevState) => {
        let index = (prevState.focusedQuizIndex - 1) % 4;
        if(index < 0){
          index = 3;
        }
        return {focusedQuizIndex: index}
      });
    }

    if(evt.key === 'ArrowDown'){
      this.setState( (prevState) => ({focusedQuizIndex: (prevState.focusedQuizIndex + 1) % 4}) );
    }
  };

  render() {
    const hasButton = this.state.dataQuiz.every(quiz => quiz.answerUser);
    return (
      <div className="App">
        {
          this.state.dataQuiz.map((quiz, index) => {
            return <Quiz
              index={index}
              quiz={quiz}
              key={quiz.id}
              stateButton={this.state.submitted}
              active={this.state.focusedQuizIndex === index}
              onKeyDown={this.handleKeyDown}
              onClick={this.handleClickInput}
              onChangeInput={this.handleChangeInput}
              onChangeRadio={this.handleChangeRadio}
            />
          })
        }
        {hasButton && <Button style={{marginTop: '20px'}} variant="contained" color="primary" onClick={this.handleClick}>
          Сдать тест
        </Button>}
      </div>
    );
  }
}
export default App;
