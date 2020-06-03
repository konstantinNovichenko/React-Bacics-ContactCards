import React, {Component} from 'react';
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component{  
  
  render(){
    return (
      <div className="contact-cards col-7">
        <ContactCard
          name= "Konstantin Novichenko"
          cellPhone= "9876543212"
          workPhone= "9567894322"
          email= "novichenko.konstantin@gmail.com"

        />

        <ContactCard
          name= "John Wick"
          cellPhone= "9532465436"
          workPhone= "9347699484"
          email= "john.wick@gmail.com"

        />

        <ContactCard
          name= "Tony Stark"
          cellPhone= "9324658267"
          workPhone= "9457952349"
          email= "tony.ironmanrulez@gmail.com"
        />

      </div>

    )
    
  };
}

export default App;
