import React, {Component} from 'react';
import classes from './Home.module.css';
import {Link} from "react-router-dom";

export default class Home extends Component {

  submitHandler = evt => {
    evt.preventDefault()
  };

  render() {
    return (
      <div className={classes.Auth}>
        <h1>Домашняя страница</h1>
        <ul>
          <li>
            <Link to='/quiz'>Пройти тест 'Radio'</Link>
          </li>
          <li>
            <Link to='/quiz-checkbox'>Пройти тест 'CheckBox'</Link>
          </li>
          <li>
            <Link to='/auth'>Войти</Link>
          </li>
          <li>
            <Link to='/log-out'>Выйти</Link>
          </li>
        </ul>
      </div>
    )
  }
}