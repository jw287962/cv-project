import React from "react";
import './experience.css'
class Experience extends React.Component{

    constructor(props){
      super(props);
      
        this.state ={
          currentForm: {title: "", company: "", description: ""},
          data: this.props.data,
          button: true,
          noUpdate: props.noUpdate,


        }
          console.log(this.state.data);
          
      this.editExperience = (e) => {
        this.setState({
          button: !this.state.button,
        
        })

      }

    this.saveExperience = (e) => {
      e.preventDefault();
      console.log(this.state.currentForm);
      if(this.state.data.title === undefined && this.state.data.length ===1){
        this.setState({
          data: [this.state.currentForm],
          button: !this.state.button,
          currentForm: {title: "", company: "", description: ""},
          noUpdate: false,
        })
      }
      else{
        this.setState({
          data: this.state.data.concat(this.state.currentForm),
          currentForm: {title: "", company: "", description: ""},
          button: !this.state.button,
        })
      }
        
    }

    this.submitFormExperiences = (e) => {
      e.preventDefault();
      this.setState()
    }

    this.reEditExperience = (e) => {
      let arrayNum;
      if(e.target.className === 'workexperiences'){
      arrayNum = e.target.id;
      }else{
        arrayNum = e.target.parentElement.id;
      }

      console.log(arrayNum);
      let currentArray = this.state.data[arrayNum]
      console.log(currentArray);
      // this.setState({
      //   currentForm: {title: , company: "", description: ""},

      // })
      e.stopPropagation()
      e.preventDefault();

    }

    this.formOnChange = (e) => {
      if(e.target.id === 'company'){
        this.setState({
          currentForm: { title: this.state.currentForm.title,  description: this.state.currentForm.description, company: e.target.value}
        })
      }
      else if(e.target.id === 'title'){
        this.setState({
          currentForm: {company: this.state.currentForm.company,  description: this.state.currentForm.description, title: e.target.value}
        })
      }      
      else if(e.target.id === 'description'){
        this.setState({
          currentForm: {company: this.state.currentForm.company,  title: this.state.currentForm.title, description: e.target.value}
        })
      }
    }
    }

  static getDerivedStateFromProps(props,state){
    if(state.noUpdate && props.data !== state.data){
      return {
        data: props.data.slice(0,1),
        button: state.button,
        noUpdate: false,
      }
      }
      return null;

  }

  // NO DATES YET 
  render(){
    return (
        <div>
               <div>
                 <button className="borderless experience" onClick={this.editExperience} disabled={!this.state.button}>EXPERIENCE</button>
                 
                  <button className={(this.state.button) ? "hidden" : "nothidden"} onClick={this.saveExperience}>Save</button>

                  <div className={(this.state.button) ? "hidden" : "nothidden"}>
                    <form className="expform" onSubmit={this.submitFormExperiences}>
                        <label htmlFor="company" >Company Name</label>
                        <input type='text' id="company" name="company" value={this.state.currentForm.company} onChange={this.formOnChange}></input>
                        <label  htmlFor="title">Position Title </label>
                        <input type='text' name="title" id="title" value={this.state.currentForm.title}  onChange={this.formOnChange}></input>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" value={this.state.currentForm.description}  onChange={this.formOnChange}></textarea>
                        <label htmlFor="start">Start Date</label>
                        <input type='date' id="start" name="start"></input>
                        <label htmlFor="end">End Date</label>
                        <input type='date' id="end" name="end"></input>
                    </form>

                  </div>
                  
                  {this.state.data.map((ele,i) => {
                    if(ele.title === "") return;
                        return(
                          <div className={'workexperiences'} id={i}key={i} onClick={this.reEditExperience}>
                              <div className="title">Title: {ele.title}</div>
                              <div className="company"> {ele.company}</div>

                              <div>{ele.description}</div>
                          </div>
                        ) 
                      }
                    )}
                 
                      
                
                
                </div>
        </div>
    )
  }
}

export default Experience;