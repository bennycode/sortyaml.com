import {Button, createStyles, Grid, Paper, Theme, Typography, WithStyles, withStyles,} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {copyToClipboard, hasClipboardSupport, readFromClipboard} from '../clipboard';
import CodeTextField from '../components/CodeTextField';
import CodeBox from '../components/CodeBox';
import {sortYaml} from '../yaml/sortYaml';

const styles = (theme: Theme) => {
  return createStyles({
    grid: {
      margin: 0,
      padding: theme.spacing.unit / 2,
      width: '100%',
    },
    paper: {
      padding: theme.spacing.unit,
    },
  });
};

const demoInput = `name: CI

on:
  push:
    tags:
      - '*production*'
      - '*staging*'
    branches: [ edge, main ]
`;

interface Props extends WithStyles<typeof styles> {
}

export const MainPage = ({classes}: Props) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => setOutput(input ? sortYaml(input) : ''), [input]);

  return (
    <Grid container spacing={16} className={classes.grid}>
      <Grid item xs={12} sm={6}>
        {/*Input*/}
        <Paper className={classes.paper}>
          <Typography variant={'h5'} component="h3">
            Input
          </Typography>
          <CodeTextField
            onChange={({target: {value}}) => setInput(value)}
            onFocus={() => setShowPlaceholder(false)}
            onBlur={() => setShowPlaceholder(true)}
            placeholder={showPlaceholder ? demoInput : ''}
            value={input}
          />
          {hasClipboardSupport() && (
            <Button onClick={() => readFromClipboard().then(setInput)} color="inherit" variant="contained">
              Paste
            </Button>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/*Output*/}
        <CodeBox
          actionText={'Copy'}
          heading={'Output'}
          onClick={() => copyToClipboard(output)}
          placeHolderText={sortYaml(demoInput)}
          showPlaceHolder={showPlaceholder}
          text={output}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MainPage);
