import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";


const styles = {
  radioGroup: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    maxWidth: 600,
    margin:'auto',
  },
  label: {
    textTransform: 'capitalize',
    color: 'white',
  },
  radio: {
    '&$checked':{
      color: 'blue',
    }
  },
  checked:{}
};

const AnswersList = props => {
const {classes} = props;

 const userAnswer = props.userAnswers.find( answer => props.question.id === answer.questionId );

 return (
    <RadioGroup
      onChange={props.onChangeRadio}
      classes={{root: classes.radioGroup}}
      name={props.question.id}
      defaultValue={false}
    >
      {
        props.question.answers.map( (answer, index) => {
          return(
          <FormControlLabel
            key={index}
            value={answer.value}
            control={
              <Radio
                id={answer.id}
                classes={{root: classes.radio, checked: classes.checked}}
                checked={userAnswer ? answer.id === userAnswer.userAnswerId : false}
              />}
            label={answer.value}
            classes={{label: classes.label}}
          />)}
        )
      }
    </RadioGroup>
  );
};

function mapStateToProps(state) {
  return state;
}

export default withStyles(styles)( connect(mapStateToProps)(AnswersList));