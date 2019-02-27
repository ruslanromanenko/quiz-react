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
    if(this.props.active){
      this.inputRef.current.focus();
    }
  }
  componentDidUpdate(){
    if(this.props.active){
      this.inputRef.current.focus();
    }
  }

  handleChange = (evt) => {
    this.setState({answerUser: evt.target.value});
  };

  render() {
    return  <div>
    <span>{this.props.quiz.question}</span>
    <br/>
    {
      (this.props.stateButton) ?
        <React.Fragment>
          {
          (this.state.answerUser === this.props.quiz.answer) ?
          <span className="answer"> ваш ответ {this.state.answerUser}, правильно!</span> :
          <span className="answerUser">ваш ответ {this.state.answerUser}, не правильно, правильный ответ {this.props.quiz.answer}</span>
          }
        </React.Fragment> :
        <Input type="text" onChange={this.handleChange} onKeyDown={this.props.onKeyDown} inputRef={this.inputRef} onClick={(evt) => this.props.onClick(evt, this.props.index)}/>
    }
    <br/>
    </div>
  }
}

export default Quiz