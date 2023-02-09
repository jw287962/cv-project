import './App.css';
import React from 'react';
import Overview from './component/Overview'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      personal: {name: "", email: "", phone: ""},
      university: {school: "", major: "", graduation: ""},
      experience: [],
    }
  }

   submitForm = (e) =>{
    e.preventDefault();
    this.setState({
      personal: {name: "", email: "", phone: ""},
      university: {school: "", major: "", graduation: ""},
      experience: [{company: "N/A",title: "", task: []}],
    })
  }

  fillForm = (e) => {
    console.log('fill')
    e.preventDefault();
    this.setState({
      personal: {name: "Jason Wong", email: "jason.wongdevwork@gmail.com", phone: "000-000-0000"},
      university: {school: "UGA", major: "MIS", graduation: "2020"},
      experience: [{company: "Juicy Seafood",title: "Manager", task: ['Cashier','Host','Server',"ALL"]}],
    })
  }

  formUpdateChange = (e) => {
    e.preventDefault();
   const userCurrentFieldSpot = e.target.parentElement.parentElement.textContent.toLowerCase();
    const userCurrentInput = e.target.parentElement.textContent.toLowerCase();

    const holderObject = this.state;
   let objectKey ;
    for(var key in this.state){
      if((userCurrentFieldSpot).includes(key)){
        objectKey = key;
        for(var key1 in this.state[objectKey]){
          console.log(key1);
          if(userCurrentInput.includes(key1)){
            holderObject[objectKey][key1] = e.target.value;
            this.setState({
              personal: holderObject.personal,
              university: holderObject.university,
              experience: holderObject.experience,
            })
          }
        }
      }
    }
  }

    formUpdatePersonalName = (e) =>{

        e.preventDefault();
        this.setState({
          personal: {name: e.target.value, email: this.state.personal.email, phone: this.state.personal.phone},
          university: this.state.university,
          experience: this.state.experience,
        })
    }

//     formUpdateEmail = (e) =>{
//       e.preventDefault();
//       this.setState({
//         personal: {name: this.state.personal.name,  email:  e.target.value, phone: this.state.personal.phone},
//         university: this.state.university,
//         experience: this.state.experience,
//       })
//     }
//   formUpdatePhone = (e) =>{
//     e.preventDefault();
//     this.setState({
//       personal: {name: this.state.personal.name, email: this.state.personal.email, phone:  e.target.value},
//       university: this.state.university,
//       experience: this.state.experience,
//     })
// }
  render(){
  return (
    <div className="App">
        {/* 
 name, email, phone number.
    A section to add your educational experience (school name, title of study, date of study)
    A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
 */}
      <div className='formContainer'>
        <form onSubmit={this.submitForm} >
      <fieldset className='form'>
        <legend>Personal Details</legend>
            <div>
              <label htmlFor="name">Name:</label>
              <input htmlFor="name" required value={this.state.personal.name} onChange={this.formUpdateChange}></input>
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input htmlFor="email" required value={this.state.personal.email} onChange={this.formUpdateChange}></input>
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input htmlFor="phone" required value={this.state.personal.phone} onChange={this.formUpdateChange}></input>
            </div>
      </fieldset>
      <fieldset className='form'>
        <legend> University Information</legend>
            <div>
              <label htmlFor="school">School:</label>
              <input htmlFor="school" required value={this.state.university.school} onChange={this.formUpdateChange}></input>
            </div>

            <div>
              <label htmlFor="major">Major:</label>
              <input htmlFor="major" required></input>
            </div>

            <div>
              <label htmlFor="graduation">Graduation:</label>
              <input htmlFor="graduation" required></input>
            </div>
      </fieldset>
      <fieldset className='form'>
          <legend>Experience:  </legend>
          <div>
            <label htmlFor="company">Company:</label>
            <input htmlFor="company" required></input>
          </div>
      </fieldset>
      
      <button type='submit'>Submit</button>
      <button type='button' onClick={this.fillForm}>Fill Form</button>
        </form>
      </div>
      <div className='overviewContainer'>
        <Overview personal={this.state.personal} university={this.state.university} experience={this.state.experience}></Overview>
      </div>
    </div>
  );
}
}

export default App;
