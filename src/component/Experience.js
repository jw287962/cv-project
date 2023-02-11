import React from "react";
import './experience.css'
class Experience extends React.Component{

    constructor(props){
      super(props);
      
        this.state ={
          data: this.props.data,
          button: true,
          noUpdate: props.noUpdate,
        }

        console.log(this.state.data)

      this.editExperience = (e) => {
        this.setState({
          button: !this.state.button,
        
        })

      }

    this.saveExperience = (e) => {
        this.setState({
          button: !this.state.button,
        })
    }

    this.submitFormExperiences = (e) => {
      e.preventDefault();
    }
    }

  static getDerivedStateFromProps(props,state){
    if(state.noUpdate && props.data !== state.data){
      return {
        data: props.data,
        button: state.button,
        noUpdate: false,
      }
      }
      return null;

  }
  render(){
    return (
        <div>
               <div>
                 <button className="borderless experience" onClick={this.editExperience} disabled={!this.state.button}>EXPERIENCE</button>
                 
                  <button className={(this.state.button) ? "hidden" : "nothidden"} onClick={this.saveExperience}>Save</button>

                  <div className={(this.state.button) ? "hidden" : "nothidden"}>
                    <form className="expform" onSubmit={this.submitFormExperiences}>
                        <label htmlFor="company">Company Name</label>
                        <input type='text' id="company" name="company"></input>
                        <label  htmlFor="title">Position Title</label>
                        <input type='text' name="title"></input>
                        <label htmlFor="description">Description</label>
                        <textarea id="description"></textarea>
                        <label htmlFor="start">Start Date</label>
                        <input type='date' id="start" name="start"></input>
                        <label htmlFor="end">End Date</label>
                        <input type='date' id="end" name="end"></input>
                    </form>

                  </div>
                  
                  {this.state.data.map((ele,i) => {
                        return(
                          <div className={'workexperiences'} id={i}key={i}>
                              <div>{ele.company}</div>
                              <div>{ele.title}</div>
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