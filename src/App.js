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
      submitted: false
    }
  }

  handleClick = () => {
    this.setState({submitted: true});
  };

  handleChangeInput = (evt, idQuiz) => {
    let dataQuiz = this.state.dataQuiz;
    dataQuiz.map(quiz => {
      if(quiz.id === idQuiz) {
        quiz.answerUser = evt.target.value;
      }
      return quiz;
    });

    this.setState(dataQuiz);
  };


  render() {
    return (
      <div className="App">
        {
          this.state.dataQuiz.map(quiz => {
            return <Quiz
              quiz={quiz}
              key={quiz.id}
              stateButton={this.state.submitted}
              handleChange={this.handleChangeInput}
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
