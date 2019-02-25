import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz/Quiz';

const dataQuiz = [
  {question: 'Столица Украины',answer: 'Киев'},
  {question: 'Столица России',answer: 'Москва'},
  {question: 'Столица Белорусии',answer: 'Минск'},
  {question: 'Столица США',answer: 'Вашингтон'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz />
      </div>
    );
  }
}

export default App;
