import './Overview.css';
import React from "react";

class Overview extends React.Component{
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div className="Overview" >
          <div className="headerdetails">
            <div>
               <div className="personal" contentEditable="true">{this.props.personal.name}</div>
              <div className="personal" contentEditable="true">{this.props.personal.phone}</div>
              <div className="personal" contentEditable="true">{this.props.personal.email}</div>
            </div>
              <div className="university">
                  <div contentEditable="true">{this.props.university.school}</div>
                  <div contentEditable="true">{this.props.university.major}</div>
                  <div contentEditable="true">{this.props.university.graduation}</div>
                </div>            
          </div>  
          <div className='resumebody'>

         
          <div className="experience" > 
          <div contentEditable="true">WORK EXPERIENCE:</div>

                {this.props.experience.map(element => {
                          return (
                              <div>
                                <div contentEditable="true">{element.company} </div>
                                <div contentEditable="true">{element.title} </div>
                                <div contentEditable="true">Task: {
                                element.task.map(element => {
                                  return (
                                  element + "| "
                                  )
                                })
                                } 
                                </div>
                          
                              </div>
                          )
                        }
                
                )}
         
          </div>
          <div className='skills' contentEditable="true">Skills:

          </div>


          </div>
        </div>
    )
  }
}

export default Overview;