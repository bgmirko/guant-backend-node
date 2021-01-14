import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button } from '@material-ui/core';

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
        width: 450,
        padding: 40,
        marginTop: 50
    },
    form: {
        width: 300
    },
    inputFields: {
        width: 300,
        marginBottom: 30
    },
    submitButton: {
        width: 300,
        marginTop: 20,
        marginBottom: 30
    },
    errorMessage: {
        color: "#ff0000",
        textAlign: "center"
    }
}

const Login = props => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const { classes } = props;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className={classes.root}>
            <Typography variant="h6">Login Page</Typography>
            <Paper className={classes.paper}> 
                <form action="#"
                    className={classes.form} 
                    onSubmit={(e) => { props.onLoginDataSubmit(e, state.email, state.password)} }>
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="email"
                        label="Email"
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="password"
                        label="Password"
                        onChange={handleInputChange}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        className={classes.submitButton}>
                            Login
                    </Button>
                    <Typography className={classes.errorMessage} variant="body1">{props.errorMessage}</Typography>
                </form>            
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Login);
