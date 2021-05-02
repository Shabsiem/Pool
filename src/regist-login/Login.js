import React, {Component} from 'react';
import store from '../store/store'
import './Login.css'
//import emailjs from 'emailjs-com'
import {Link} from 'react-router-dom';
import BaseButton from '../base/BaseButton';

class Login extends Component{
    state = {
        loginName: "",
        loginPass: "",
        regName: "",
        regPhone: "",
        regnumppl: "",
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
        this.auth({
            method: 'signInWithPassword',
            name: this.state.loginName,
            pass: this.state.loginPass
        })
    }
    
    handleregisterSubmit(event){
        event.preventDefault()
        const address = this.state.regName.toLocaleLowerCase()
        const email = store.filter(mail => mail.email === address)
        if (email.length > 0){
            alert("You have already registered your email, please login. If you don't remmember your password please contact us.")
        }else {
            if (this.state.regPass === this.state.rePass){
                if(this.state.regPhone.length > 9){
                    this.auth({
                        method: 'signUp', 
                        name: this.state.regName,
                        phone: this.state.regPhone,
                        fam: this.state.regnumppl,
                        pass: this.state.regPass
                    })
                }else{
                    alert("Please use a 10 digit phone number.")
                }
            }else{
                alert("Please make sure your password and retype your password are the same")
            }
        }      
    }

    async auth(props){
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:${props.method}?key=AIzaSyDxaAYXM4Pl4pmr6Wy1HDIcHjOd-9Z7eSI`;
        let name = props.name
        let pass = props.pass
        if (props.method === 'signInWithPassword'){
            name = props.name
            pass = props.pass
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: name,
                password: pass,
                returnSecureToken: true
            })
        })
        const responseData = await response.json()
        if (!response.ok){
            const error = new Error(
                responseData.message || 'Failed to Authenticate, please try again later or contact support.'
            )
            throw error
        }else{
            if(props === 'signUp'){
                this.familyRegister()
            }
            const token = responseData.idToken
            const email = responseData.email
            const exp = +responseData.expiresIn * 1000
            const expirationDate = new Date().getTime() + exp
            const userId = responseData.localId
            localStorage.setItem('email', email)
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)
            localStorage.setItem('tokenExpiration', expirationDate)
            this.time(exp)
            this.props.auth({
                token: token
            })
        }
    }
    time(props){
        let timer
        timer = setTimeout(function(){
            localStorage.removeItem('email')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('tokenExpiration')
            clearTimeout(timer)
        }, props)
    }
    async familyRegister(){
        const newFamily = {
            email: this.state.regName,
            phone: this.state.regPhone,
            numOfFamilyMem: this.state.regnumppl,
        }
        let url = `https://pool-e422b-default-rtdb.firebaseio.com/familyinfo.json`
        const response = await fetch (url,{
            method: 'POST',
            body: JSON.stringify(newFamily)
        })
        const responseData = await response.json()
        if (!response.ok){
            const error = new Error(
                responseData.meessage || 'failed to register family. Please contact the Administrator'
            )
            throw error
        }
        this.state.regName = ''
        this.state.regPass = ''
        this.state.regPhone = ''
        this.state.regnumppl = ''
        this.state.rePass = ''
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
                    <BaseButton type='submit' text='Login'></BaseButton>
                </form>
                
                <form className="registrationForm" onSubmit={this.handleregisterSubmit}>
                    <h2>Register</h2>
                    <label>Email:
                        <input type="email" name="regName" onChange={this.handleChange} value={this.state.regName}></input>
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
                    <input type="checkbox" className="checkbox" required></input>
                    <label>I agree to the terms a conditions found <Link to= "/Terms">here</Link></label>
                    <br/>
                    <BaseButton text="Register" type="submit"></BaseButton>         
                </form>
            </div>
          );
    }
}
 
export default Login;