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
        padding: 40,
        marginTop: 50,
        minHeight: 200,
    },
    button: {
        marginTop: 20
    }
}

const Logout = props => {

    const { classes } = props;
    
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}> 
                    <Typography variant="body1">You are logged in</Typography>
                    <Button
                        className={classes.button}
                        variant="contained" 
                        color="primary"
                        onClick={() => props.logout()}  
                        >
                            Logout
                    </Button>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Logout);