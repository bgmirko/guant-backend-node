import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        width: 400,
        marginTop: 10,
        border: '1px solid',
        alignItems: 'center',
    },
    unorderedList: {
        listStyleType: 'none',
        paddingLeft: 10
    },
    unorderedList2: {
        textAlign: 'right',
        listStyleType: 'none',
        paddingLeft: 15
    },
    ulContainer: {
        display: 'flex',
        width: 200
    },
    buttonContainer: {
        paddingLeft: 25,
        display: 'flex'
    },
    actionButton: {
        height: 24,
        width: 70,
        margin: '0 3px',
        fontSize: 12
    }
}

const Performer = props => {

    const { classes, performer } = props;

    return(
        <div className={classes.root}>
            <div className={classes.ulContainer}>
                <ul className={classes.unorderedList2}>
                    <li>{`Name:`}</li>
                    <li>{`Age:`}</li>
                    <li>{`Category: `}</li>
                </ul>
                <ul className={classes.unorderedList}>
                    <li>{performer.name}</li>
                    <li>{performer.age}</li>
                    <li>{performer.category}</li>
                </ul>
            </div>
            <div className={classes.buttonContainer}>
                <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.actionButton}
                        onClick={() => props.editPerformer(performer)}>
                            Edit
                </Button>
                <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.actionButton}
                        onClick={() => props.deletePerformer(performer._id)}
                >
                            Delete
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Performer);