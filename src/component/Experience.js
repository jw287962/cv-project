import React from "react";

class Experience extends React.Component{

    constructor(props){
      super(props);
        this.state ={
          data: this.props.data,
          button: true,
        }

      this.editExperience = (e) => {
        this.setState({
          button: !this.state.button
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


  render(){
    return (
        <div>
               <button className="borderless experience" onClick={this.editExperience} disabled={!this.state.button}>EXPERIENCE</button>
               
                <button className={(this.state.button) ? "hidden" : "nothidden"} onClick={this.saveExperience}>Save</button>
                <form className={((this.state.button) ? "hidden" : "nothidden") + "formwork"} onSubmit={this.submitFormExperiences}>
                    <label htmlFor="company">Company Name</label>
                    <input type='text' id="company" name="company"></input> 
                    <label  htmlFor="title">Position Title</label>
                    <input type='text' name="title"></input>
                    <label htmlFor="start">Start Date</label>
                    <input type='date' id="start" name="start"></input>
                    <label htmlFor="end">End Date</label>
                    <input type='date' id="end" name="end"></input>

                </form>
        </div>
    )
  }
}

export default Experience;