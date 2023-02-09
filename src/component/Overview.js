import React from "react";

class Overview extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
        <div className="overview">
          <div className="headerdetails">Personal
            <div>
               <div className="personal">{this.props.personal.name}</div>
              <div className="personal">{this.props.personal.email}</div>
              <div className="personal">{this.props.personal.phone}</div>
            </div>
              <div className="university">
                  <div>{this.props.university.school}</div>
                  <div>{this.props.university.major}</div>
                  <div>{this.props.university.graduation}</div>
                </div>            
          </div>  
          <div className="experience">

          </div>


          
        </div>
    )
  }
}

export default Overview;