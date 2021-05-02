import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'
class Header extends React.Component {
loggedOrNot(){
    if (this.props.loginstate == null){
        return 'Login / Register'
    }else{
        var element = document.getElementById('logout')
        console.log(element)
        element.classList.remove('logout')
        return 'Reserve'
    }
}
handleLogout(){
    localStorage.removeItem('email')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')
    this.props.logout = {logout: null}
}
    render() { 
        return ( 
        <div >
            <div>
                <h1 style={{textAlign:"center", paddingTop: "80px"}}>Welcome to the Moskovitz's ool</h1>
            </div>
            <div className="nav">
                <Link to="/">{this.loggedOrNot()}</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to= "/Terms">Terms and Conditions</Link>
                <button className='logout' id='logout' onClick={this.handleLogout}>Logout</button>
            </div>
        </div>
         );
    }
}
 
export default Header;