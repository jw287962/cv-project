import React from "react";


class Detail extends React.Component{
  constructor(props){
    super(props);

    
      this.state = {
        // personal: {data: "Name", email: "Email", phone: "000-000-0000"},
        data: this.props.data,
        button: true,
      }

  
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
      this.setState({data: e.target.value})
    }
  }

  static getDerivedStateFromProps(props, state){
      if(props.data !== state.data){
        return {
            data: props.data,
            button: state.button
        }
      }
      
      return null;
  }
  render(){
    return (
        <div >
          <button className='singledata' id='detail' onClick={this.updateHTMLButton} disabled={!this.state.button}>
                        <div className={(!this.state.button) ? 'hidden': 'nothidden'}>{this.state.data}</div> 
                        <input className={(this.state.button) ? 'hidden': 'nothidden'} value={this.state.data} onChange={this.onChangeUpdate} ></input>
                   </button>
                  <button className={(this.state.button) ? 'hidden': 'nothidden'} onClick={this.updateData}>Save</button>

            
            
        </div>
      )

  }

}

export default Detail;