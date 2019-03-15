import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const ErrorDialog = props => {


  return (
    <Dialog
      open={props.onOpen}
      onClose={props.onClose}
    >
      <DialogTitle id="alert-dialog-title">Ошибка!!!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.errorMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Close
        </Button>

      </DialogActions>
    </Dialog>
  )

};

export default ErrorDialog