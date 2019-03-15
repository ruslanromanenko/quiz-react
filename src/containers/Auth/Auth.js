import React, { Component } from 'react';
import InputQuiz from '../../components/UI/InputQuiz/InputQuiz';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';

export default class Auth extends Component {

  state = {
    loading: false,
    email: '',
    password: ''
  };

  changeLoadingState(){
    const loading = !this.state.loading;
    this.setState({
      loading
    });
  }

  handleChange = evt => {

    const state = this.state;

    if(evt.target.name === 'email'){
      state.email = evt.target.value
    }
    if(evt.target.name === 'password'){
      state.password = evt.target.value
    }
    this.setState(state);
  };

  loginHandler = evt => {
    evt.preventDefault();

    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    };
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAt87ufttqHxU_x0xlP3pPKDkovmJngrdw';

    const myInit = {
      method: 'POST',
      body: JSON.stringify(authData)
    };
    this.changeLoadingState();
    fetch(url, myInit)
      .then((response) => {
        if(response.status === 200){
          localStorage.setItem('loggedIn', 'true');
          this.props.history.push('/quiz');
        }else{
          this.changeLoadingState();
        }
    })
      .catch(console.log)
  };

  registerHandler = evt => {
    evt.preventDefault();

    const authData = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    };
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAt87ufttqHxU_x0xlP3pPKDkovmJngrdw';

    var myInit = {
      method: 'POST',
      body: JSON.stringify(authData)
    };

    fetch(url, myInit)
      .then(function(response) {
        console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
        console.log(response.status); // 200
        return response.json();
      })
      .then(function(user) {
        console.log(user.name); // iliakan
      })
      .catch( console.log );
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={this.state.loading ? classes.loading : null}>
            <InputQuiz
              label='Email'
              onChange={this.handleChange}
              name='email'
            />
            <InputQuiz
              label='Password'
              onChange={this.handleChange}
              name='password'
            />
            <div>
              <Button
                onClick={this.loginHandler}
              >
                Вход
              </Button>
              <Button
                onClick={this.registerHandler}
              >
                Регистрация
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}