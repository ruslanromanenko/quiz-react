import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz/Quiz';
import Button from '@material-ui/core/Button';

const dataQuiz = [
  {id:1, question: 'Столица Украины?',answer: 'Киев'},
  {id:2, question: 'Столица России?',answer: 'Москва'},
  {id:3, question: 'Столица Белорусии?',answer: 'Минск'},
  {id:4, question: 'Столица США?',answer: 'Вашингтон'}
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
            />
          })
        }
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Сдать тест
        </Button>
      </div>
    );
  }
}

export default App;
