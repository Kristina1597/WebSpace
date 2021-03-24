import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspenset";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    catchAllUnhandleErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandlerejection", this.catchAllUnhandleErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandlerejection", this.catchAllUnhandleErrors);

    }

    setState(state, callback) {

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <React.StrictMode>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    {/*<NavbarContainer/>*/}
                    <div className='app-wrapper-content'>
                        <Switch>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                            <Route exact path='/dialogs'
                                   render={withSuspense(DialogsContainer)}/>

                            <Route exact path='/'
                                   render={() => <Redirect from="/" to="/profile" />}/>

                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                            <Route path='/login'
                                   render={() => <LoginPage/>}/>

                            <Route path='*'
                                   render={() => <div>404 not found</div>}/>
                        </Switch>
                    </div>
                </div>
            </React.StrictMode>
        )
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const WebSpaceApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
};

export default WebSpaceApp

