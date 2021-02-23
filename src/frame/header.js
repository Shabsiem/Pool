import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {
        state = {loggedin: false}

handlefisrtbutton(){
    if (this.props.logged === false){
        return ("Login / Register")
    }
    else {
        return ("Calendar Page")
    }
}

    render() { 
        return ( 
        <div >
            <div>
                <h1 style={{textAlign:"center", paddingTop: "80px"}}>Welcome to the Moskovitz's <span style={{color:"yellow"}}>פול</span></h1>
            </div>
            <div className="nav">
                <Link to="/" onClick={this.props.relogin}>Login / Reserve</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to= "/Terms">Terms and Conditions</Link>
            </div>
        </div>
         );
    }
}
 
export default Header;