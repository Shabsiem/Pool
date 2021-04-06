import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './regist-login/Login'
import CalendarPage from './calendar/CalendarPage'
import Terms from './terms/terms'
import ContactUs from './contact/contact'
import Header from './frame/header'

class App extends Component {
    state = {
        loggedin: false,
    }
    constructor(props){
        super(props)
        this.changeMain = this.changeMain.bind(this)
    }

    changeMain(){
        this.setState({loggedin: true})
    }

    handleMain(){
        if (this.state.loggedin === false){
            return(
                <Login 
                    enter={this.changeMain.bind(this)}
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
                <Header/>
                    <Route path = "/" exact strict render = {
                        ()=>{
                            return(
                                <div>
                                    {this.handleMain()}
                                </div>
                            )
                        }
                    }/>
                    <Route path = "/ContactUs" component={ContactUs}/>
                    <Route path = "/Terms" component={Terms}/>
                    <Route path = "/CalendarPage" component={CalendarPage}/>
                </Router>
            </div>
         );
    }
}
 
export default App;