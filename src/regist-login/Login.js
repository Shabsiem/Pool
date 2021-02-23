import React, {Component} from 'react';
import store from '../store/store'
import '../regist-login/Login.css'
import emailjs from 'emailjs-com'
import {Link} from 'react-router-dom';


class Login extends Component{
    state = {
        loginName: "",
        loginPass: "",
        regName: "",
        regPhone: "",
        regnumppl: "",
        regeMail: "",
        regPass: "",
        rePass: "",
    }
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleloginSubmit = this.handleloginSubmit.bind(this)
        this.handleregisterSubmit = this.handleregisterSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleloginSubmit(event){
        event.preventDefault()
        const name = this.state.loginName.toLowerCase()
        const username = store.filter(user => user.loginName === name)
        if (username.length > 0) {
            if(username[0].loginPass === this.state.loginPass){
                alert(`Welcome! ${this.state.loginName}`)
                this.props.enter()
            }
            else{
                alert("Your Username and Password do not match our records. Please try again or contact us for support.")
            }
        }
        else{
            alert("Your Username and Password do not match our records. Please try again or contact us for support.")
        }

    }
    
    handleregisterSubmit(event){
        event.preventDefault()
        const address = this.state.regeMail.toLocaleLowerCase()
        const email = store.filter(mail => mail.email === address)
        if (email.length > 0){
            alert("You have already registered your email, please login. If you don't remmember your password please contact us.")
        }else {
            if (this.state.regPass === this.state.rePass){
                if(this.state.regPhone.length > 9){
                    alert("SUCCESS!")
                        emailjs.sendForm('moskovitzpool@gmail.com', 'registration', event.target, 'user_cFpre3aiuRr3uSJmqfbpC')
                        .then(()=>{
                            alert("Request sent!")
                            }, (error)=>{
                            console.log(error.text)
                        })
                }else{
                    alert("Please use a 10 digit phone number.")
                }
            }else{
                alert("Please make sure your password and retype your password are the same")
            }
        }      
    }

    render() { 
        return (
            <div>
                <form className="loginForm" onSubmit={this.handleloginSubmit}>
                    <h2>Login</h2>
                    <label>Name:</label>
                    <input type="text" name="loginName" onChange={this.handleChange} value={this.state.loginName}></input>
                    <br/>
                    <label>Password:</label>
                    <input type="password" name="loginPass" onChange={this.handleChange} value={this.state.loginPass}></input>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                
                <form className="registrationForm" onSubmit={this.handleregisterSubmit}>
                    <h2>Register</h2>
                    <label>Name:
                        <input type="text" name="regName" onChange={this.handleChange} value={this.state.regName}></input>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" name="regPass" onChange={this.handleChange} value={this.state.regPass}></input>
                    </label>
                    <br/>
                    <label>Retype Password:
                        <input type="password" name="rePass" onChange={this.handleChange} value={this.state.rePass}></input>
                    </label>
                    <br/>
                    <label>Phone Number:
                        <input type="number" name="regPhone" onChange={this.handleChange} value={this.state.regPhone}></input>
                    </label>
                    <br/>
                    <label>Number of immidiate family members:
                        <select name="regnumppl" onChange={this.handleChange} value={this.state.regnumppl}>
                        <option value="1">Just me</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                        </select>
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text" name="regeMail" onChange={this.handleChange} value={this.state.regeMail}></input>
                    </label>
                    <input type="checkbox" className="checkbox" required></input>
                    <label>I agree to the terms a conditions found <Link to= "/Terms">here</Link></label>
                    <br/>
                    <button type="submit">Register</button>              
                </form>
            </div>
          );
    }
}
 
export default Login;