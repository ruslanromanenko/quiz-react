import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonQuiz = props => {
  return (
  <Button
    style={{marginTop: '20px'}}
    variant="contained"
    color="primary"
    onClick={props.onClick}
    className={props.className}
  >
    {props.value}
  </Button>
  )
};
export default ButtonQuiz