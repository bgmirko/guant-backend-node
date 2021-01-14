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
    }
}

const Signup = props => {

    const [state, setState] = useState({
        email: "",
        password: "",
        name: "",
        userName: ""
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
            <Typography variant="h6">Sign Up</Typography>
            <Paper className={classes.paper}> 
                <form action="#"
                    className={classes.form} 
                    onSubmit={(e) => { props.onSignupDataSubmit(e, state)} }>
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
                                        <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="name"
                        label="Name"
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="userName"
                        label="User Name"
                        onChange={handleInputChange}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        className={classes.submitButton}>
                            Login
                    </Button>
                </form>            
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Signup);
