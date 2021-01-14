import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

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
    form: {
        width: 300
    },
    inputFields: {
        marginBottom: 30,
        width: 300
    },
    formControl: {
        display: 'flex',
        width: 300,
        marginBottom: 30
    },
    button: {
        margin: '0 5px 0 0',
        height: 28,
        width: 70,
        fontSize: 14
    }
}

const SavePerformer = props => {

    const [state, setState] = useState({
        performer: {
            _id: "",
            name: "",
            age: "",
            category: ""
        },
        mode: "save"
    })

    const { classes, performer } = props;

    useEffect(() => { 
        console.log("[Performer] component did mount");
        if(performer !== undefined){
            setState({
                ...state,
                performer: {
                    _id: performer._id,
                    name: performer.name,
                    age: performer.age,
                    category: performer.category
                },
                mode: "edit"
            })
        }
     }, [])

    const handleInputChange = (e) => {
        setState({
            ...state,
            performer: {
                ...state.performer,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleCategoryChange = (e) => {
        setState({
            ...state,
            performer: {
                ...state.performer,
                category: e.target.value
            }
        });
    }

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}> 
            <form action="#"
                    className={classes.form} 
                    onSubmit={(e) => { props.onPerformerDataSubmit(e, state.performer, state.mode)} }>
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="name"
                        label="Name"
                        value={state.performer.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        className={classes.inputFields}
                        id="outlined-required"
                        name="age"
                        label="Age"
                        value={state.performer.age}
                        onChange={handleInputChange}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-label">Category</InputLabel>
                        <Select
                            required
                            labelId="select-label"
                            id="demo-simple-select"
                            value={state.performer.category}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value={"Singing"}>Singing</MenuItem>
                            <MenuItem value={"Dancing"}>Dancing</MenuItem>
                            <MenuItem value={"Acting"}>Acting</MenuItem>
                        </Select>
                    </FormControl>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        disabled={state.performer.category === "" ? true : false}
                        className={classes.button}>
                            Save
                    </Button>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        onClick={() => props.changeViewHandle("listOfPerformers")}
                        >
                            Cancel
                    </Button>
                </form>    
            </Paper>
        </div>
    )
}

export default withStyles(styles)(SavePerformer);