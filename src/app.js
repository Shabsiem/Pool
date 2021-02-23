import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
// import Intro from './intro/intro'
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
                    <Route path = "/" exact strict render={
                        ()=>{
                            return(
                                <div>
                                    <Header
                                    />
                                    {this.handleMain()}
                                </div>
                            )
                        }
                    }/>
                    <Route path = "/ContactUs" component={ContactUs}/>
                    <Route path = "/Terms" component={Terms}/>
                    {/* <Route path = "/Intro" component={Intro}/> */}
                    <Route path = "/CalendarPage" component={CalendarPage}/>
                </Router>
            </div>
         );
    }
}
 
export default App;