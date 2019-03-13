import React from 'react';
import {Link} from "react-router-dom";

const LogOut = () => {
  localStorage.setItem('loggedIn', 'false');
  return(
    <div>
      <h1>Вы вышли</h1>
      <Link to='/'>На главную</Link>
    </div>
  )
};
export default LogOut