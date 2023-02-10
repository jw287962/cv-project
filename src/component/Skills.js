import React from "react";
import './skills.css'

class Skills extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      data: this.props.data,
      button: true,
    }
      // if(!this.props.button){
      //   this.setState({value: "edit"})
      // }
     
  
      this.updateHTMLButton = (e) => {
        this.setState({button: !this.state.button})
     
        if(this.state.button){
          console.log('Clicking Button')
     
            }
        }
  
        
    this.updateData = (e) => {
      this.setState({
        button: !this.state.button,
      })
    
  
    }
    this.onChangeSkillInput = (e) => {
      console.log(e.target.value)
      this.setState({
        newItem: e.target.value,
      })
    }
    this.editSkillsList= (e) =>{
        this.setState({
          button: !this.state.button,
        })
    }

    this.saveSkillList= (e) =>{
      console.log('save skills list')
      console.log(this.state.newItem);
      if(this.state.newItem !== ''){
        this.setState({
          button: !this.state.button,
          data: this.state.data.concat((this.state.newItem).toUpperCase()),
          newItem: '',
        })
      
      }else
      this.setState({
        button: !this.state.button,
      })
  }
  }


  render(){
    return (
        <div>
          <button className="borderless skill" onClick={this.editSkillsList} disabled={!this.state.button}>SKILLS
            <div>

            </div>
          </button>
          <button className={(this.state.button) ? 'hidden': 'nothidden'} onClick={this.saveSkillList}> Save</button>
          <input className={((this.state.button) ? 'hidden': 'nothidden') + " skillsInput"} onChange={this.onChangeSkillInput}></input>
            <ul className="col">
              {this.state.data.map(element => {
                return (
                      <button className="borderless alignleft" onClick={this.deleteSkill}>
                        <li>{element} </li>
                      </button>
              )})}
              </ul>
            
            
        </div>
      )

  }

}

export default Skills;