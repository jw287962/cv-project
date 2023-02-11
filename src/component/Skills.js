import React from "react";
import './skills.css'

class Skills extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      data: this.props.data,
      button: true,
      allowUpdate: false,
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
      this.setState({
        newItem: e.target.value,
      })
    }
    this.editSkillsList= (e) =>{
        this.setState({
          button: !this.state.button,
          allowUpdate: true,
        })
    }

    this.saveSkillList= (e) =>{
      console.log(this.state.newItem);
        if(this.state.newItem){
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


    this.deleteSkill = (e) =>{
        let listPostion = e.target.parentElement.getAttribute('a-key');
        this.state.data.splice(listPostion,1);
      this.setState({
        data: this.state.data,
        newItem: '',
      })
    }
  }
  
  static getDerivedStateFromProps(props,state){
    if(!state.allowUpdate && props.data !== state.data){
    return {
      data: props.data,
      button: state.button,
    }
    }
    return null;
  }

  render(){
    return (
        <div>
          <button className="borderless skill" onClick={this.editSkillsList} disabled={!this.state.button}>SKILLS
            
          </button>
          <button className={(this.state.button) ? 'hidden': 'nothidden'} onClick={this.saveSkillList}> Save</button>
          <input className={((this.state.button) ? 'hidden': 'nothidden') + " skillsInput"} onChange={this.onChangeSkillInput}></input>
            <ul className="col">
              {this.state.data.map((element,i=0) => {
                return (
                      <button className="borderless alignleft" onClick={this.deleteSkill} 
                              key={'skills'+i} a-key={i}
                              >
                        <li >{element} </li>
                      </button>
              )})}
              </ul>
            
            
        </div>
      )

  }

}

export default Skills;