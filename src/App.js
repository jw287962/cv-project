import './App.css';
import React from 'react';
import Overview from './component/Overview'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      personal: {name: "", email: "", phone: ""},
      university: {school: "", major: "", graduation: ""},
      experience: [{company: "",title: "", task: []}],
    }
  }

   submitForm = (e) =>{
    e.preventDefault();
    this.setState({
      personal: this.state.personal,
      university: this.state.university,
      experience:  this.state.experience,
    })
  }

  fillForm = (e) => {
    e.preventDefault();
    this.setState({
      personal: {name: "Jason Wong", email: "jason.wongdevwork@gmail.com", phone: "000-000-0000"},
      university: {school: "UGA", major: "MIS", graduation: "2020"},
      experience: [{company: "Juicy Seafood",title: "Manager", task: ['Cashier','Host','Server',"ALL"],}],
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
        if(key == 'experience'){
          let num =0;
        this.state[objectKey].forEach(element => {
          for(var key2 in element){
            if(userCurrentInput.includes(key2)){
                holderObject.experience[num][key2] = e.target.value;
            }
          }
          num++;
        })
        }
        
        
        }else {
        for(var key1 in this.state[objectKey]){
          console.log(key1);
          if(userCurrentInput.includes(key1)){
            holderObject[objectKey][key1] = e.target.value;
            
          }
        }}
      }
      this.setState({
        personal: holderObject.personal,
        university: holderObject.university,
        experience: holderObject.experience,
      })
  }


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
              <input htmlFor="major" required value={this.state.university.major} onChange={this.formUpdateChange}></input>
            </div>

            <div>
              <label htmlFor="graduation">Graduation:</label>
              <input htmlFor="graduation" required value={this.state.university.graduation} onChange={this.formUpdateChange}></input>
            </div>
      </fieldset>
      <fieldset className='form'>
          <legend>Experience:  </legend>
          <div>
            <label htmlFor="company">Company:</label>
            <input htmlFor="company" required value={this.state.experience[0].company} onChange={this.formUpdateChange}></input>
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input htmlFor="title" required value={this.state.experience[0].title} onChange={this.formUpdateChange}></input>
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
