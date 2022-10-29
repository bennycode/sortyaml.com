import {Button, createStyles, Paper, Theme, Typography, WithStyles, withStyles,} from '@material-ui/core';
import {hasClipboardSupport} from "../clipboard";
import React from "react";
import CodeTextField from "./CodeTextField";
import {ButtonProps} from "@material-ui/core/Button";

const styles = (theme: Theme) => {
  return createStyles({
    paper: {
      padding: theme.spacing.unit,
    },
  });
};

interface Props extends WithStyles<typeof styles> {
  actionText: string;
  heading: string;
  placeHolderText: string;
  showPlaceHolder: boolean;
  text: string;
}

const CodeBox = ({
                   classes,
                   placeHolderText,
                   actionText,
                   heading,
                   text,
                   showPlaceHolder,
                   onClick
                 }: ButtonProps & Props) => {
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h3">
        {heading}
      </Typography>
      <CodeTextField
        disabled
        value={text}
        placeholder={showPlaceHolder ? placeHolderText : ''}
      />
      {hasClipboardSupport() && (
        <Button disabled={showPlaceHolder} onClick={onClick} color="inherit" variant="contained">
          {actionText}
        </Button>
      )}
    </Paper>
  );
};

export default withStyles(styles)(CodeBox);
