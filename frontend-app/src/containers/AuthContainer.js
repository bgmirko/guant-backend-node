import React, { useState } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { getUser, logout, addNewUser } from '../redux/auth/actions'; 
import Login from '../components/auth/Login';
import Auth from '../components/auth/Auth';
import Logout from '../components/auth/Logout';
import Signup from '../components/auth/Signup';


const AuthContainer = props => {

    const [state, setState] = useState({
        typeOfAuth: null
    })

    const handleLogin = (e, email, password) => {
        e.preventDefault();
        props.onGetUser(email, password);
    }

    const handleNewUser = (e, {email, password, name, userName}) => {
        e.preventDefault();
        props.onAddNewUser(email, password, name, userName)
    }

    const typeOfAuth = (type) => {
        setState({
            ...state,
            typeOfAuth: type
        });
    }

    const handleLogout = () => {
        setState({
            ...state,
            typeOfAuth: null
        });
        props.onLogout();
    }

    const getAuthOption = () => {
        if(props.user.name === "" && state.typeOfAuth === "signUp"){
            return (
                <Signup
                     onSignupDataSubmit={handleNewUser}
                />
            )
        }
        if(props.user.name !== ""){
            return (
                <Logout
                    logout={handleLogout}
                />
            )
        }
        if(state.typeOfAuth){
            return (
                <Login 
                    onLoginDataSubmit={handleLogin}
                    errorMessage={props.errorMessage}
                />
            )
        }else{
            return (
                <Auth 
                    typeOfAuth={typeOfAuth}
                />
            )
        }
    }

    const showAuthOption = getAuthOption();

    return(
        <div>
            {showAuthOption}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
    onGetUser: (email, password) => dispatch(getUser(email, password)),
    onLogout: () => dispatch(logout()),
    onAddNewUser: (email, password, name, userName) => dispatch(addNewUser(email, password, name, userName))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AuthContainer);