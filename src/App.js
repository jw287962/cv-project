import './App.css';
import React from 'react';
import Experience from './component/Experience'
import Skills from './component/Skills';
import Detail from './component/Detail';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      personal: {name: "Name", email: "Email@gmail.com", phone: "000-000-0000"},
      university: {school: "College/University", major: "FIELD OF STUDY", graduation: "YEAR (2020)"},
      skills: [],
      experience: [{company: "",title: "", task: [], description: ""}],
      button: true,
      noUpdate: true,
    }

    // 
    this.updateHTMLButton = (e) => {
      this.setState({button: !this.state.button})
   
      if(this.state.button){
        console.log('Clicking Button')
        // // const newInput = document.createElement('input');
        // // newInput.value = this.state.personal.name;
        //   let targetNode = e.target;
        //   targetNode.appendChild(newInput)
          }
      }

      
  this.updateData = (e) => {
    this.setState({button: !this.state.button})
    console.log('Click Saving Button')


   

  }
  this.onChangeUpdate = (e) => {
    console.log(e.target.value)
    this.setState({personal: {name: e.target.value}})
  }

  this.fillData = (e) => {
    this.setState({
      personal: {name: "Jason Wong", email: "jasonwong287962@gmail.com", phone: "000-000-0000"},
      university: {school: "University of Georgia", major: "Management Information Systems", graduation: "2020"},
      skills: ['CSS','JAVASCRIPT','HTML','PROBLEM-SOLVING'],
      experience: [{company: "Juicy S",title: "Manager", task: ['Customer Service'], description: "Improved Sales by 100% YOY by implementing modern technology to increase efficiency and allow for more automation in day-to-day tasks(IE: cloud-based services"}],
      button: true,
      noUpdate: false,
    })
  }
}



  render(){
  return (
    <div className="App">
        {/* 
 name, email, phone number.
    A section to add your educational experience (school name, title of study, date of study)
    A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
 */}
    <div className='header'> CV APPLICATION
      <button className='filldata' onClick={this.fillData}>AUTOFILL</button>
    </div>
      <div className='formContainer'>
          <div className='personal'>
              {/* <Button button={this.state.button} value={this.state.name} ></Button> */}
                <div className='row apart '>
                  <div className="col alignleft">
                    <Detail data={this.state.personal.name} ></Detail>
                    <Detail data={this.state.personal.email}></Detail>
                    <Detail data={this.state.personal.phone}></Detail>
                  </div>
              
                  <div className="col alignright">
                    <Detail data={this.state.university.school} ></Detail>
                    <Detail data={this.state.university.major}></Detail>
                    <Detail data={this.state.university.graduation}></Detail>
                  </div>
                </div>
            </div>
            <div className='grid'>
              <div  className='skills left'>
                <Skills data={this.state.skills}></Skills>

              </div>
              <div  className='experience'>
                <Experience data={this.state.experience} noUpdate= {this.state.noUpdate}></Experience>
              </div>
            </div>
            




      </div>
    </div>
    )}
}
       
export default App;
{/* 

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
      <fieldset className='form'>
          <legend>Experience:  </legend>
          <div>
            <label htmlFor="skills">Skills:</label>
            <input htmlFor="skills" required value={this.state.skills} onChange={this.formUpdateChange}></input>
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input htmlFor="title" required value={this.state.experience[0].title} onChange={this.formUpdateChange}></input>
          </div>
      </fieldset>


      <div className='formbuttons'>
      <button type='submit' className='submitbutton'>Submit</button>
      <button type='button' onClick={this.fillForm} className="fillbutton">Fill Form</button>
      <button type='button' onClick={this.editForm} className="editbutton">Edit Form</button>
      </div>
        </form>
      </div>
      <div className='overviewContainer'>
        <div className='submissionheader'>SUBMISSION DETAILS</div>
        <Overview personal={this.state.personal} university={this.state.university} experience={this.state.experience}></Overview>
      </div>
    </div>
  ); */}