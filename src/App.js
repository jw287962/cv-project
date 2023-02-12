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
      experience: [{company: "Juicy S",title: "Manager", task: ['Customer Service'], description: "Improved Sales and Customer Service by implementing modern technology to increase efficiency/accurancy and utilizing automation in day-to-day tasks(IE: cloud-based services)"}],
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
                    <Detail data={this.state.personal.name} noUpdate={this.state.noUpdate}></Detail>
                    <Detail data={this.state.personal.email} noUpdate={this.state.noUpdate}></Detail>
                    <Detail data={this.state.personal.phone} noUpdate={this.state.noUpdate}></Detail>
                  </div>
              
                  <div className="col alignright">
                    <Detail data={this.state.university.school} noUpdate={this.state.noUpdate}></Detail>
                    <Detail data={this.state.university.major} noUpdate={this.state.noUpdate}></Detail>
                    <Detail data={this.state.university.graduation} noUpdate={this.state.noUpdate}></Detail>
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


  componentDidCatch(error, info) {
    console.log('Componenet did catch')

    this.setState({error, info})
  }

}
       
export default App;
