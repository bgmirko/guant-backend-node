import React, { useEffect, useState } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { addNewPerformer, getPerformers, deletePerformer, editPerformer } from '../redux/performers/actions'; 
import { Button } from '@material-ui/core';
import SavePerformer from '../components/SavePerformer'
import ListOfPerformers from '../components/ListOfPerformers';

const styles = {
    container: {
        width: 400,
        margin: '0 auto'
    },
    button: {
        marginTop: 15
    }
}

const PerformersContainer = props => {

    const [state, setState ] = useState({
        showInContainer: "listOfPerformers",
        editPerformer: null
    })

    const { classes } = props;

    useEffect(() => { 
        console.log("[PerformersContainer] component did mount");
        props.onGetPerformers();
    }, []);

    const handleSavePerformer = (e, {_id, name, age, category}, mode) => {
        e.preventDefault();
        if(mode === "save"){
            props.onAddNewPerformer(name, age, category);
        }else if(mode === "edit"){
            props.onEditPerformer(_id, name, age, category);
        }
        setState({
            ...state,
            showInContainer: "listOfPerformers",
            editPerformer: null
        })
        props.onGetPerformers();
    }

    const handleEditPerformer = (performer) => {
        setState({
            ...state,
            editPerformer: performer,
            showInContainer: "editPerformer"
        })
    }

    const handleDeletePerformer = (_id) => {
        props.onDeletePerformer(_id);
        props.onGetPerformers();
    }

    const changeViewHandle = (viewType) => {
        setState({
            ...state,
            showInContainer: viewType
        })
    }
    
    const getView = () => {
        switch(state.showInContainer){
            case "listOfPerformers":
                return (
                    <div>
                        <ListOfPerformers 
                            performers={props.performers}
                            deletePerformer={handleDeletePerformer}
                            editPerformer={handleEditPerformer}
                        />
                        <Button 
                            className={classes.button}
                            variant="contained" 
                            color="primary" 
                            onClick={() => changeViewHandle("addNewPerformer")}>
                                Add New
                        </Button>
                    </div>
                )
            case "addNewPerformer":
                return (
                    <SavePerformer 
                        onPerformerDataSubmit={handleSavePerformer}
                        changeViewHandle={(viewType) => changeViewHandle(viewType)}
                    />
                )
            case "editPerformer":
                return (
                    <SavePerformer 
                        onPerformerDataSubmit={handleSavePerformer}
                        changeViewHandle={(viewType) => changeViewHandle(viewType)}
                        performer={state.editPerformer}
                    />
                )
            default: break;
        }
    }
    
    const view = getView();

    return(
        <div className={classes.container}>
            {props.user !== "" ?
                view
                :
                <p>You need to login to see data on this page</p>
            }
        </div>
    )

}

const mapStateToProps = state => ({
    performers: state.performers.performers,
    user: state.auth.user.name
});

const mapDispatchToProps = dispatch => ({
    onAddNewPerformer: (name, age, category) => dispatch(addNewPerformer(name, age, category)),
    onGetPerformers: () => dispatch(getPerformers()),
    onDeletePerformer: (_id) => dispatch(deletePerformer(_id)),
    onEditPerformer: (_id, name, age, category) => dispatch(editPerformer(_id, name, age, category))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(PerformersContainer);