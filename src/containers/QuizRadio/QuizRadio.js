import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import ButtonQuiz from '../../components/ButtonQuiz/ButtonQuiz';
import Result from './Result/Result';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorDialog from '../../components/UI/Dialogs/ErrorDialog/ErrorDialog';

class QuizRadio extends Component {

  state = {
    indexActiveQuestion: 0,
    quiz: [],
    loader: true,
    dialog: false,
    errorMessage: null
  };

  async componentDidMount() {
    // const url = 'https://quiz-react-8350c.firebaseio.com/Quiz.json';
    //
    // const data = JSON.stringify(quizes.default);
    // const myInit = {
    //   method: 'POST',
    //   body: data,
    //   headers: {'Content-Type': 'application/json'}
    // };
    // fetch(url, myInit)
    //   .then((response) => {
    //     if(response.status === 200){
    //       response.json().then( (data)=> {
    //       console.log(data.Question)
    //     });
    //
    //     }else{
    //       // this.changeLoadingState();
    //     }
    //   })
    //   .catch(console.log)

    // const url = `https://quiz-react-8350c.firebaseio.com/Quiz.json`;
    // var myInit = {
    //   method: 'GET',
    // };
    // fetch(url, myInit)
    //   .then((response) => {
    //     if(response.status === 200){
    //       const quizes = [];
    //       response.json().then( (data)=> {
    //         Object.keys(data).forEach( (key, index) => {
    //           quizes.push({
    //             id: key,
    //             name: `Тест №${index +1}`
    //           });
    //
    //           this.setState({
    //             quizes
    //           });
    //           console.log(this.state.quizes)
    //         });
    //       });
    //     }else{
    //       // this.changeLoadingState();
    //     }
    //   })
    //   .catch(console.log);

    const urlQuiz = `https://quiz-react-8350c.firebaseio.com/Quiz/-La-yaVQmAhD4gymzsRR.json`;
    fetch(urlQuiz)
      .then((response) => {
        if(response.status === 200){
          response.json().then( quizData => {
            const quiz = quizData
            this.setState({
              quiz,
              loader: false
            });
          })
        }else{
          this.setState({
            loader: true
          });
        }
      })
      .catch(console.log)
  }

  handleChangeRadio = (evt) => {
    this.props.answerOnQuestion({questionId: this.state.quiz[this.state.indexActiveQuestion].id, userAnswerId: evt.target.id})
  };

  handleClickNextQuestion = () => {
    const indexActiveQuestion = this.state.indexActiveQuestion;

    if(indexActiveQuestion < this.state.quiz.length -1 && this.props.userAnswers[indexActiveQuestion]){
      this.setState({
        indexActiveQuestion: indexActiveQuestion + 1,
      });
    }else{
      this.setState({
        errorMessage: 'Нужно выбрать вариант ответа',
        dialog: true
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

  handleCloseDialog = () => {
    this.setState({
      dialog: false
    })
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
            : this.state.loader ?  <CircularProgress className={classes.progress} /> :  this.renderQuiz()
        }
        <Link to='/'>
          <ButtonQuiz value="Вернуться на главную" className={classes.BackToHome} onClick={this.handleClickReset}/>
        </Link>

        {
          this.state.dialog
            ? <ErrorDialog
                onOpen={this.state.dialog}
                onClose={this.handleCloseDialog}
                errorMessage={this.state.errorMessage}
              />
            : null
        }
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
