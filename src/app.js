import React, {Component} from 'react';
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Login from './regist-login/Login'
import CalendarPage from './calendar/CalendarPage'
import Terms from './terms/terms'
import ContactUs from './contact/contact'
import Header from './frame/header'
class App extends Component {
    state = {
        loggedin: null,
    }
    constructor(props){
        super(props)
        this.changeMain = this.changeMain.bind(this)
        this.logout = this.logout.bind(this)
    }

    changeMain(props){
        this.setState({loggedin: props.token})
    }
    logout(props){ 
        this.setState({loggedin: props.logout})
    }
    handleMain(){
        const expire = localStorage.getItem('tokenExpiration')
        const now = new Date().getTime()
        if (now > expire && this.state.loggedin !== null){
            this.setState({loggedin: null})
        }
        if (this.state.loggedin === null){
            return(
                <Login 
                    auth= {this.changeMain}
                />
            )
        }
        else {
            return(
                <CalendarPage/>
            )
        }
    }
    render(){
        return (
            <div className = "frame">
                <Router>
                <Header
                    loginstate = {this.state.loggedin}
                    logout = {this.logout}
                />
                    <Route path = "/ContactUs" component={ContactUs}/>
                    <Route path = "/Terms" component={Terms}/>
                    <Route path = "/CalendarPage" component={CalendarPage}/>
                    <Route path = "/Pool">
                        <Redirect to= '/'/>
                    </Route>
                    <Route path = "/" exact render = {
                        ()=>{
                            return(
                                <div>
                                    {this.handleMain()}
                                </div>
                            )
                        }
                    }/>

                </Router>
            </div>
         );
    }
}
 
export default App;