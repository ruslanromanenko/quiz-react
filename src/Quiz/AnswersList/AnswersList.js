import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

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

 return (
    <RadioGroup
      onChange={props.onChangeRadio}
      classes={{root: classes.radioGroup}}
      name={props.idQuiz}
    >
      {
        props.answers.map( (answer, index) =>
          <FormControlLabel
            key={index}
            value={answer.text}
            control={<Radio id={answer.id} classes={{root: classes.radio, checked: classes.checked}}/>}
            label={answer.text}
            classes={{label: classes.label}}
          />
        )
      }
    </RadioGroup>
  );
};

export default withStyles(styles)(AnswersList);