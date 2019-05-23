import { connect } from 'react-redux';
import { JsonForms } from '@jsonforms/react';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import {getData, JsonFormsState} from '@jsonforms/core';
import './App.css';
import createStyles from "@material-ui/core/styles/createStyles";
import SimpleAppBar from "./SimpleAppBar";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = createStyles({
  toolBar: {
    flexGrow: 1,
  },
  container: {
    padding: '1em'
  },
  title: {
    textAlign: 'center',
    padding: '0.25em'
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
  },
  demoform: {
    margin: 'auto'
  },
  grow: {
    flexGrow: 1,
  },
  toolBarTitle: {
    padding: '0 30px',
    margin: '1em',
  }

});

export interface AppProps extends WithStyles<typeof styles> {
  dataAsString: string;
}

class App extends React.Component<AppProps> {
    
    handleNew = () => { 
        alert('Nytt emneord');
    }

    handlePersist = () => {
        const { dataAsString } = this.props;
        alert(dataAsString);
    }

    render() {
        const { classes, dataAsString } = this.props;
    
        const renderToolBar = (classes: any, dataAsStringprops:string) => {
            
            return (
                <div className={classes.toolBar}>
                    <AppBar position="static" color="default">
                        <Toolbar variant="dense">
                            <Typography className={classes.grow} variant="h6" color="inherit" align="left">
                            Emneord
                            </Typography>
                            <Button onClick={this.handleNew} color="inherit">Ny</Button>
                            <Button onClick={this.handlePersist} color="inherit">Lagre</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        }
    
        return (
        <div>
            <SimpleAppBar />
            <Grid container justify={'center'} spacing={16} className={classes.container}>
            <Grid item sm={9}>
                <Typography
                variant={'display1'}
                className={classes.title}
                >
                { renderToolBar(classes, dataAsString)}
                </Typography>
                <div className={classes.demoform}>
                <JsonForms/>
                </div>
                <Typography
                variant={'display1'}
                className={classes.title}
                >
                { renderToolBar(classes, dataAsString)}
                </Typography>
            </Grid>
            <Grid item sm={9}>
                <Typography
                variant={'display1'}
                className={classes.title}
                >
                Data
                </Typography>
                <div className={classes.dataContent}>
                <pre>{dataAsString}</pre>
                </div>
            </Grid>
            </Grid>
        </div>
        );
    }
}

const mapStateToProps = (state: JsonFormsState) => {
    return { dataAsString: JSON.stringify(getData(state), null, 2) }
};

export default connect(mapStateToProps)(withStyles(styles)(App));

