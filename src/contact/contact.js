import React, { Component } from 'react';

class ContactUs extends Component {
    state = {
        issue: "",
        name: "",
        phone: "",
        message: "",
      }
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Thank you for contacting us")
        const sendMessage =    `hi my name is  ${this.state.name} I am contacting you regarding ${this.state.issue} my phone number is ${this.state.phone} my issue is as follows: ${this.state.message}`;
        this.setState({issue: "", name: "", phone: "", message: ""})
        console.log(sendMessage)
        // use emailjs to send the message... must create a template first....
    }


    render() { 
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Please leave a message regarding what the nature of the issue is:</label>
                    <select placeholder= "Choose one">
                        <option onChange={this.handleChange} name= "issue">Technical issues (website/login/website useage</option>
                        <option onChange={this.handleChange} name= "issue">Other issues</option>
                    </select>
                    <label>Name:</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.name}name= "name"></input>
                    <label>Phone Number:</label>
                    <input type="number" onChange={this.handleChange} value = {this.state.phone} name= "phone"></input>
                    <label>Message:</label>
                    <input type="textarea" placeholder="Your massage here" onChange={this.handleChange} value = {this.state.message} name="message"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default ContactUs;