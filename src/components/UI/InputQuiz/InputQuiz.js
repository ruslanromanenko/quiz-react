import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  margin: {
    margin: theme.spacing.unit,

  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

 const InputQuiz = props => {
   const { classes } = props;
    return (
      <FormControl className={classes.margin }>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          {props.label}
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline,

          }}
          onChange={props.onChange}
          name={props.name}
        />
      </FormControl>
    )
 };
export default withStyles(styles)(InputQuiz)