import React from "react";


class Skills extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      personal: {name: "Name", email: "Email", phone: "000-000-0000"},
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
      this.setState({button: !this.state.button})
      console.log('Click Saving Button')
  
  
    }
    this.onChangeUpdate = (e) => {
      console.log(e.target.value)
      this.setState({personal: {name: e.target.value}})
    }
    this.editSkillsList= (e) =>{
        this.setState({
          button: !this.state.button
        })
    }
    this.saveSkillList= (e) =>{
      console.log('save skills list')
      this.setState({
        button: !this.state.button
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
            
            {/* <button type={this.state.type}>{this.state.value}</button> */}
            
        </div>
      )

  }

}

export default Skills;