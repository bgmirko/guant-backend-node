import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Performer from '../components/Performer'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}

const ListOfPerformers = props => {

    const { classes, performers } = props;

    let listOfPerformers = [];
    if(performers.length > 0){
        listOfPerformers = performers.map(performer => {
          return (
            <Performer 
                key={performer._id}
                performer={performer}
                deletePerformer={props.deletePerformer}
                editPerformer={props.editPerformer}
            />)
        })     
    }   

    return(
        <div className={classes.root}>
           { listOfPerformers }
        </div>
    )
}

export default withStyles(styles)(ListOfPerformers);