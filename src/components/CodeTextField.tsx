import {createStyles, TextField, Theme, WithStyles, withStyles} from "@material-ui/core";
import {TextFieldProps} from "@material-ui/core/TextField";
import React from "react";

const styles = (theme: Theme) => {
  return createStyles({
    textArea: {
      fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: '14px',
    },
    textField: {
      margin: `${theme.spacing.unit}px 0`,
    },
  })
}

const CodeTextField = withStyles(styles)((props: TextFieldProps & WithStyles<typeof styles>) => {
  const {classes} = props;

  return (
    <TextField
      {...props}
      className={classes.textField}
      fullWidth
      multiline
      rows={20}
      rowsMax={Infinity}
      variant="outlined"
      InputProps={{
        className: classes.textArea,
      }}
    />
  );
});

export default CodeTextField
