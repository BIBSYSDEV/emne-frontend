import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    padding: '0 30px',
    margin: '1em',
  }
};


function RegistryToolBar(props: any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography className={classes.grow} variant="h6" color="inherit" align="left">
            Emneord
          </Typography>
          <Button color="inherit">Ny</Button>
          <Button color="inherit">Lagre</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

RegistryToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistryToolBar);
