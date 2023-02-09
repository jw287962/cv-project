import React from "react";


class General extends React.Component{
  constructor(props){
    super(props);


  }

    // changeHTML = (e) =>{
    //   e.preventDefault();
    // }

     changeHTML = () =>{
      if(this.props.General.button === 'edit')
        return (
            <button >
                
            </button>
        )
    }

  render(){
    return (
        <div>
           {}
        </div>
      )

  }

}

export default General;