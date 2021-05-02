import React from 'react';
import RequestForm from '../requestform/requestForm'

class CalendarPage extends React.Component {


  render() { 
    return(
    <div style={{display: "flex", margin: "0, auto, 10%"}}>
      <iframe title = "Swimming Schedule"
        src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=bW9za292aXR6cG9vbEBnbWFpbC5jb20&amp;color=%23039BE5" 
        style={{height: "700px", width: "700px", margin: "2%"}}>
      </iframe>
      <RequestForm/>
    </div>
    )
  }
}
 
export default CalendarPage;
