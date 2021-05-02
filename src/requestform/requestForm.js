import React from 'react';
import emailjs from 'emailjs-com'
import './requestForm.css'
import BaseButton from '../base/BaseButton';

class RequestForm extends React.Component {
    state = {  
        name: "",
        email: "",
        date:"",
        starttime: "",
        endtime: "",
        numguests: 0
    }
    
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        var where = event.target.name
        this.setState({[where]: event.target.value})
    }
    
    handleSubmit(event){
        event.preventDefault()
        //Email service
        emailjs.sendForm('moskovitzpool@gmail.com', 'template_evKt4rXz', event.target, 'user_cFpre3aiuRr3uSJmqfbpC')
            .then(()=>{
                alert("Request sent!")
            }, (error)=>{
            })
    
    }

    render() { 

        return (       
        <div style={{display: 'flex', alignitems: "center"}}>
        <form style={{margin: "auto"}} onSubmit={this.handleSubmit} className='reserveForm'>
          <h2>Reservation Request Form</h2>
          <label>
            Name:
            <input type="text" placeholder="Your full name here" name="name" 
            onChange={this.handleChange} value={this.state.name}></input><br/>
          </label>
          <label>
            Email:
            <input type="text" placeholder="YourEmail@gmail.com" name="email" 
            value={this.state.email} onChange={this.handleChange}></input><br/>
          </label>
          <label>
            Date:
            <input type="text" placeholder="mm/dd" name ="date" 
            value={this.state.date} onChange={this.handleChange}></input><br/>
          </label>
          <label>
            Start Time:
            <input type="text" name= "starttime" 
            value={this.state.starttime} onChange={this.handleChange}></input><br/>
          </label>
          <label>
            End Time:
            <input type="text" name = "endtime" 
            value={this.state.endtime} onChange={this.handleChange}></input><br/>
          </label>
          <label>
            Number of Guest Swimmers:
            <input placeholder="Number of guest swimmers not in the immidiate family" 
              name = "numguests" type= "number"
              value={this.state.numguests} onChange={this.handleChange}></input><br/>
          </label>
          <button> Clear</button>
          <BaseButton type='submit' text='Send Request'></BaseButton>
          <ul>
          </ul>
        </form>
      </div>
 );
    }
}
 
export default RequestForm;