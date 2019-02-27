import React from 'react';
import Input from '@material-ui/core/Input';
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
    return  <div>
    <span>{this.props.quiz.question}</span>
    <br/>
    {
      (this.props.stateButton) ?
        <React.Fragment>
          {
          (this.props.quiz.answerUser === this.props.quiz.answer) ?
            <span className="answer"> ваш ответ {this.props.quiz.answerUser}, правильно!</span> :
            <span className="answerUser">ваш ответ {this.props.quiz.answerUser}, не правильно, правильный ответ {this.props.quiz.answer}</span>
          }
        </React.Fragment>  :
        <React.Fragment>
          <Input type="text" onChange={(evt) => this.props.onChange(evt, this.props.quiz.id)} onKeyDown={this.props.onKeyDown} inputRef={this.inputRef} onClick={(evt) => this.props.onClick(evt, this.props.index)}/>
        </React.Fragment>
    }
    <br/>
    </div>
  }
}

export default Quiz