import './Overview.css';
import React from "react";

class Overview extends React.Component{
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div className="Overview">
          <div className="headerdetails">
            <div>
               <div className="personal">{this.props.personal.name}</div>
              <div className="personal">{this.props.personal.phone}</div>
              <div className="personal">{this.props.personal.email}</div>
            </div>
              <div className="university">
                  <div>{this.props.university.school}</div>
                  <div>{this.props.university.major}</div>
                  <div>{this.props.university.graduation}</div>
                </div>            
          </div>  
          <div className='resumebody'>

         
          <div className="experience"> WORK EXPERIENCE:

                {this.props.experience.map(element => {
                          return (
                              <div>
                                <div >{element.company} </div>
                                <div >{element.title} </div>
                                <div>Task: {
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
          <div className='skills'>Skills:

          </div>


          </div>
        </div>
    )
  }
}

export default Overview;