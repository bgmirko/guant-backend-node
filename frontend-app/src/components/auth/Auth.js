import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 450,
        minHeight: 250,
        padding: 40,
        marginTop: 50
    },
    buttonContainer:{
        display: 'flex',
        paddingTop: 25
    },
    button: {
        width: 110,
        margin: '0 7px'
    }
}

const Auth = props => {



    const { classes } = props;

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>     
              <Typography variant="body1">Type of Authentication</Typography>
              <div className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained" 
                        color="primary"
                        onClick={() => props.typeOfAuth("signIn")} 
                        >
                            Sign in
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained" 
                        color="primary"
                        onClick={() => props.typeOfAuth("signUp")}  
                        >
                            Sign up
                    </Button>
              </div>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Auth);