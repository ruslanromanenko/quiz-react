import React from 'react';
import AnswersList from './AnswersList/AnswersList';

import './Quiz.css';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answerUser: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    if(this.inputRef.current && this.props.active){
      this.inputRef.current.focus();
    }
  }
  componentDidUpdate(){
    if(this.props.active && this.inputRef.current){
      this.inputRef.current.focus();
    }
  }

  render() {
    return  <React.Fragment>
    <h3>{this.props.quiz.question}</h3>
    <br/>
    {
      (this.props.stateButton) ?
        <React.Fragment>
          {
          ( this.props.quiz.rightAnswerId === this.props.quiz.answerUserId ) ?
            <span className="rightAnswer">Ваш ответ {this.props.quiz.answerUser}, правильно!</span> :
            <span className="wrongAnswer">Ваш ответ {this.props.quiz.answerUser}, не правильно, правильный ответ {this.props.quiz.answer}</span>
          }
        </React.Fragment>  :
        <React.Fragment>
          <AnswersList
            answers={this.props.quiz.answers}
            idQuiz={this.props.quiz.id}
            onChangeRadio={this.props.onChangeRadio}/>
        </React.Fragment>
    }
    <br/>
    </React.Fragment>
  }
}
export default Quiz